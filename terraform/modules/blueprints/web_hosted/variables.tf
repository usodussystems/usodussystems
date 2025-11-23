variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "us-east-1"
}

variable "site_domain" {
  type        = string
  description = "The domain name to use for the static site"
}

variable "subdomain" {
  type        = string
  description = "Subdomain where the S3 will held the content and cloudflare will point to"
  
}

variable "environment" {
  type        = string
  description = "should attend to one of prd, dev, hml"
  validation {
    condition     = try(length(regex("(prd|dev|stg)", var.environment)) == 1, false)
    error_message = "Try one valid value."
  }
}

variable "path_to_deploy_files" {
  type        = string
  description = "Absolute path for files"
  validation {
    condition     = try(length(regex("(^/.*)", var.path_to_deploy_files)) == 1, false)
    error_message = "Path should be absolute."
  }
}

variable "tags" {
  description = "Tag resoureces"
  type        = map(any)
  default     = {}
}

variable "waf_acl_arn" {
  default     = null
  description = "Insert ARN String if needed for a WAF v2 type"
}

variable "cf_functions" {
  description = "CloudFront functions to deploy e.g. {handlerpath = {path = \"cf_handler/index.js\"}}"
  type        = map(any)
  default     = {}

}

variable "extra_cors_domains" {
  description = "Extra CORS domains to allow in the S3 bucket"
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the ACM certificate to use for the CloudFront distribution."
} 