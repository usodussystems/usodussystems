terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "<=6.0.0"
    }
    random = {
      source = "hashicorp/random"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }
  # Partial backend configuration. Backend blocks cannot reference variables,
  # so the bucket, key, region and assume_role are supplied at init time via:
  #   terraform init -backend-config=backend.hcl
  # See backend.hcl.example for the expected keys.
  backend "s3" {}
}
provider "aws" {
  region = var.region
  assume_role {
    role_arn = var.role_arn
  }
}
provider "cloudflare" {
  api_token = var.cloudflare_api_token
  email     = var.cloudflare_email
}
