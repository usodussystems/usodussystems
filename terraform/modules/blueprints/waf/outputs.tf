output "waf_web_acl" {
  description = "The ARN of the WAF resources."
  value       = aws_wafv2_web_acl.this
}

