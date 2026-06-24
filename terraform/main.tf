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
    "CostCenter"     = var.cost_center
    "TechnicalOwner" = var.technical_owner
    "Owner"          = var.owner
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

# Site files are uploaded by aws_s3_object inside the web_hosted module, so this
# resource only invalidates the CloudFront cache after every apply. It relies on
# the ambient AWS credentials of the caller (the OIDC-assumed CI role, or the
# local operator) — the same identity Terraform already uses — rather than a
# manual `sts assume-role`/`jq` dance, which was brittle and wrote a temp
# credentials file to disk.
resource "null_resource" "deploy" {
  for_each = module.s3host

  # module-level depends_on forces this to run only after EVERY resource in the
  # web_hosted module — including the aws_s3_object uploads — has settled, so we
  # never invalidate the cache before the new files are in the bucket.
  depends_on = [module.s3host]

  triggers = {
    # Re-run on every apply so freshly uploaded objects are served immediately.
    timer = timestamp()
  }

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    command     = each.value.command_invalidation
  }
}

