variable "environment" {
  description = "The environment for which the WAF resources are being created."
  type        = string
  default     = "Development"
  validation {
    condition     = try(length(regex("(prd|dev|stg)", var.environment)) == 1, false)
    error_message = "Try one valid value."
  }
}

variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API token"
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
} 

variable "domain_name" {
  description = "The domain name for the WAF resources."
  type        = string
  default     = "example.com"
  validation {
    condition     = can(regex("^[a-zA-Z0-9.-]+$", var.domain_name))
    error_message = "Domain name must be a valid domain format."
  }
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
  default = [
    "0.0.0.0/8",   # Americas
    "127.0.0.0/8",  # Americas

  ]
}
# TODO - set the validation with the rest
variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the ACM certificate to use for the CloudFront distribution."
  default     = "arn:aws:acm:us-east-1:000000000000:certificate/REDACTED-CERT-ID"
}

