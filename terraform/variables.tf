variable "environment" {
  description = "The environment for which the WAF resources are being created."
  type        = string
  default     = "dev"
  validation {
    condition     = can(regex("^(dev|stg|prd)$", var.environment))
    error_message = "Environment must be one of: dev, stg, prd."
  }
}

variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API token. Supplied via TF_VAR_cloudflare_api_token from a CI secret."
  sensitive   = true
  default     = ""
}

variable "region" {
  description = "The AWS region in which to create the WAF resources."
  type        = string
  default     = "us-east-1"
  validation {
    condition     = contains(["us-east-1", "eu-central-1", "ap-southeast-1"], var.region)
    error_message = "Region must be one of: us-east-1, eu-central-1, ap-southeast-1."
  }
}

variable "role_arn" {
  description = "The ARN of the IAM role to assume."
  type        = string
  default     = ""
}

variable "domain_name" {
  description = "The domain name for the WAF resources."
  type        = string
  validation {
    condition     = can(regex("^[a-zA-Z0-9.-]+$", var.domain_name))
    error_message = "Domain name must be a valid domain format."
  }
}

variable "cost_center" {
  description = "Cost center tag applied to all resources."
  type        = string
}

variable "technical_owner" {
  description = "Technical owner contact applied as a resource tag."
  type        = string
}

variable "owner" {
  description = "Business owner contact applied as a resource tag."
  type        = string
}

variable "subdomains" {
  type        = list(string)
  description = "List with all clients to be set and used"
}

variable "artifact_folder" {
  type        = string
  description = "The folder name for the artifact."
}

variable "allowed_ips" {
  type        = list(string)
  description = "List of allowed IPs for the WAF rules."
  default     = []

  validation {
    condition     = alltrue([for cidr in var.allowed_ips : can(cidrhost(cidr, 0))])
    error_message = "Each allowed IP entry must be a valid CIDR block."
  }
}
# TODO - set the validation with the rest
variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the ACM certificate to use for the CloudFront distribution."
}
