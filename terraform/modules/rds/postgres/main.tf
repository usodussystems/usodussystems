resource "random_password" "database_password" {
  for_each = var.db_users

  length  = 24
  special = false

  keepers = {
    trigger = "create-once"
  }
}

resource "aws_kms_ciphertext" "database_password_encrypted" {
  for_each = random_password.database_password
  key_id   = var.kms_key_arn

  plaintext = each.value.result
}

resource "aws_security_group" "db_sg" {
  name        = "${var.db_instance_identifier}-sg"
  description = "Allow all inbound traffic from ${var.db_instance_identifier}-proxy Only"
  vpc_id      = data.aws_vpc.vpc_id.id

  tags = {
    Name = "sg-${var.db_instance_identifier}"
  }
}

resource "aws_vpc_security_group_ingress_rule" "all_vpc_cidrs" {
  for_each = toset(var.attach_all_vpc_cidrs ? [
    for assoc in data.aws_vpc.vpc_id.cidr_block_associations :assoc.cidr_block
  ] : [])

  description       = "Allow all ip within same VPC"
  security_group_id = aws_security_group.db_sg.id
  from_port         = 5432
  to_port           = 5432
  ip_protocol       = "tcp"
  cidr_ipv4         = each.key
}

resource "aws_vpc_security_group_ingress_rule" "additional_cidrs" {
  for_each = toset(var.additional_cidrs)

  description       = "Allow additional CIDRs"
  security_group_id = aws_security_group.db_sg.id
  from_port         = 5432
  to_port           = 5432
  ip_protocol       = "tcp"
  cidr_ipv4         = each.key
}

resource "aws_vpc_security_group_egress_rule" "allow_all_out" {
  description       = "Allow all traffic to outside"
  security_group_id = aws_security_group.db_sg.id
  from_port         = -1
  to_port           = -1
  ip_protocol       = "-1"
  cidr_ipv4         = "0.0.0.0/0"
}

module "db" {
  source  = "terraform-aws-modules/rds/aws"
  version = "6.5.3"

  identifier = var.db_instance_identifier

  # All available versions: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts
  engine         = "postgres"
  engine_version = var.db_engine_version
  instance_class = var.db_instance_class

  allocated_storage     = var.storage.min
  max_allocated_storage = var.storage.max
  kms_key_id            = var.kms_key_arn

  # NOTE: Do NOT use 'user' as the value for 'username' as it throws:
  # "Error creating DB Instance: InvalidParameterValue: MasterUsername
  # user cannot be used as it is a reserved word used by the engine"
  db_name                     = var.db_users["master"].db_name
  username                    = var.db_users["master"].db_username
  port                        = 5432
  manage_master_user_password = false
  password                    = random_password.database_password["master"].result

  multi_az                        = true
  create_db_parameter_group       = false
  create_db_subnet_group          = true
  db_subnet_group_name            = "${var.db_instance_identifier}-sg"
  db_subnet_group_use_name_prefix = false
  subnet_ids                      = var.subnet_ids
  vpc_security_group_ids          = concat([aws_security_group.db_sg.id], var.additional_security_groups)

  backup_retention_period = var.db_backup_retention_period
  copy_tags_to_snapshot   = true
  skip_final_snapshot     = true
  apply_immediately       = true

}

resource "aws_secretsmanager_secret" "db_instance_credentials" {
  for_each = var.db_users

  name                    = "${var.db_instance_identifier}-${each.key}-credentials"
  description             = "Secret associated with RDS instance: ${var.db_instance_identifier}"
  kms_key_id              = var.kms_key_arn
  recovery_window_in_days = 0

  tags = {
    Name = "${var.db_instance_identifier}-${each.key}-credentials"
  }
}

resource "aws_secretsmanager_secret_version" "db_instance_credentials_value" {
  for_each = var.db_users

  secret_id = aws_secretsmanager_secret.db_instance_credentials[each.key].id

  secret_string = jsonencode({
    db_name              = each.value.db_name
    username             = each.value.db_username
    password             = random_password.database_password[each.key].result
    engine               = "postgres"
    host                 = module.db.db_instance_endpoint
    port                 = 5432
    dbInstanceIdentifier = module.db.db_instance_identifier
  })
}

module "rds_postgres_proxy" {
  source  = "terraform-aws-modules/rds-proxy/aws"
  version = "3.1.0"

  name                   = "${var.db_instance_identifier}-proxy"
  use_role_name_prefix   = true
  vpc_subnet_ids         = var.subnet_ids
  vpc_security_group_ids = concat([aws_security_group.db_sg.id], var.additional_security_groups)

  require_tls  = false
  kms_key_arns = [var.kms_key_arn]
  # Connections to the proxy dbs
  auth         = {
    for key, value in aws_secretsmanager_secret.db_instance_credentials : key => {
      iam_auth    = "DISABLED"
      description = value.description
      secret_arn  = value.arn
    }
  }

  engine_family = "POSTGRESQL"

  target_db_instance     = true
  db_instance_identifier = module.db.db_instance_identifier
}

resource "aws_secretsmanager_secret" "db_instance_proxy" {
  for_each = var.db_users

  name                    = "${var.db_instance_identifier}-${each.key}-secret"
  description             = "Secret associated with RDS instance proxy: ${var.db_instance_identifier}"
  kms_key_id              = var.kms_key_arn
  recovery_window_in_days = 0

  tags = {
    Name = "${var.db_instance_identifier}-${each.key}-secret"
  }
}

resource "aws_secretsmanager_secret_version" "db_instance_proxy_value" {
  for_each = var.db_users

  secret_id = aws_secretsmanager_secret.db_instance_proxy[each.key].id

  secret_string = jsonencode({
    db_name  = each.value.db_name
    username = each.value.db_username
    password = random_password.database_password[each.key].result
    host     = module.rds_postgres_proxy.proxy_endpoint
    port     = 5432
  })
}
