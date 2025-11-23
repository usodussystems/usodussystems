terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "<=6.0.0"
    }
    random = {
      source = "hashicorp/random"
    }
  }
  backend "s3" {
    bucket  = "REDACTED-TFSTATE-BUCKET"
    key    = "usodus/us-east-1/dev/main-webapp.tfstate"
    region = "us-east-1"
    assume_role = {
      role_arn = var.role_arn
    }
  }
}
provider "aws" {
  region = var.region
  assume_role {
    role_arn = var.role_arn
  }
}
# provider "cloudflare" {
#   api_token = var.cloudflare_api_token
#   email     = "redacted@example.com"
# }
