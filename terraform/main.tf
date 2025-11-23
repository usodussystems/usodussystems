



locals {
  env = {
    prd = "prd"
    stg = "stg"
    dev = "dev"
  }
  environment = {
    prd = "Production"
    stg = "Staging"
    dev = "Development"
  }

  files_path = fileset("${path.cwd}/../${var.artifact_folder}", "**")

  subdomains = toset(var.subdomains)

  folders_path = {
    for i in local.subdomains :
    i => "${path.cwd}/../${var.artifact_folder}"
  }

  is_prod = var.environment == "prd"

  tags = {
    "Environment"    = var.environment
    "CostCenter"     = "REDACTED-CC"
    "TechnicalOwner" = "redacted@example.com"
    "Owner"          = "redacted@example.com"
  }
}

# module "waf" {
#   source      = "./modules/blueprints/waf"
#   for_each    = local.subdomains
#   tags        = local.tags
#   subdomains  = [each.value]
#   allowed_ips = var.allowed_ips
#   environment = var.environment
#   region      = var.region
# }

module "s3host" {
  source   = "./modules/blueprints/web_hosted"
  for_each = local.subdomains

  site_domain          = var.domain_name
  subdomain            = each.value
  aws_region           = var.region
  path_to_deploy_files = local.folders_path[each.value]
  environment          = var.environment
  # waf_acl_arn          = module.waf[each.value].waf_web_acl[each.value].arn
  acm_certificate_arn  = var.acm_certificate_arn
  cf_functions = {
    handlerpath = {
      path = "${path.cwd}/cf_handler/index.js"
    }
  }
  
  tags = local.tags
}

# module "api_domain" {
#   source      = "./modules/aws/blueprints/apigw_domain"
#   site_domain = var.domain_name
# }

resource "null_resource" "deploy" {
  for_each = module.s3host
  triggers = {
    "timer" = timestamp()
  }
  provisioner "local-exec" {
    command = <<EOF
    aws sts assume-role --role-arn ${var.role_arn} --role-session-name temp-session > temp_session.json
    export AWS_ACCESS_KEY_ID=$(cat temp_session.json | jq -r .Credentials.AccessKeyId)
    export AWS_SECRET_ACCESS_KEY=$(cat temp_session.json | jq -r .Credentials.SecretAccessKey)
    export AWS_SESSION_TOKEN=$(cat temp_session.json | jq -r .Credentials.SessionToken) 
    ${each.value.command_invalidation}
    EOF
  }
}

