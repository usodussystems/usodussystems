variable "tags" {
  description = "A map of tags to assign to the WAF resources."
  type        = map(string)
  default     = {}
}
variable "subdomains" {
  description = "A list of subdomains to create WAF resources for."
  type        = list(string)
  default     = []
}
variable "environment" {
  description = "Deployment environment. Must be one of: dev, stg, prd."
  type        = string
  default     = "dev"

  validation {
    condition     = can(regex("^(dev|stg|prd)$", var.environment))
    error_message = "Environment must be one of: dev, stg, prd."
  }
}
variable "region" {
  description = "The AWS region in which to create the WAF resources."
  type        = string
  default     = "us-east-1"
}
variable "account_id" {
  description = "The AWS account ID in which to create the WAF resources."
  type        = string
  default     = ""
}
variable "waf_ip_set_name" {
  description = "The name of the WAF IP set."
  type        = string
  default     = "waf-ip-set"
}
variable "waf_acl_name" {
  description = "The name of the WAF ACL."
  type        = string
  default     = "waf-acl"
}
variable "waf_custom_response_body" {
  description = "The custom response body for the WAF."
  type        = string
  default     = "<p>Yep, nice try! But you can't access this!</p>"
}

variable "allowed_ips" {
  description = "A list of allowed IP addresses for the WAF IP set."
  type        = list(string)
  default     = []

  validation {
    condition     = alltrue([for cidr in var.allowed_ips : can(cidrhost(cidr, 0))])
    error_message = "Each allowed IP entry must be a valid CIDR block."
  }
}
