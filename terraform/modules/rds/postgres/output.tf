output "database_credentials" {
  value = {
    for key, value in var.db_users : key => merge(value, {
      db_endpoint           = module.rds_postgres_proxy.proxy_endpoint
      db_password_encrypted = aws_kms_ciphertext.database_password_encrypted[key].ciphertext_blob
      secret_name = aws_secretsmanager_secret.db_instance_proxy[key].name
      secret_arn = aws_secretsmanager_secret.db_instance_proxy[key].arn
    })
  }
}

output "db_security_group" {
  value = aws_security_group.db_sg.id
}