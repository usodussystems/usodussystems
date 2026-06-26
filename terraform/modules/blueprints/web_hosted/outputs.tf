output "website_bucket_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.site.id
}

output "bucket_endpoint" {
  description = "Bucket endpoint"
  value       = aws_s3_bucket_website_configuration.this.website_endpoint
}

output "cloudfront_endpoint" {
  description = "Cloudfront endpoint"
  value       = aws_cloudfront_distribution.dist.domain_name
}

# output "route53" {
#   description = "Website endpoint"
#   value       = data.aws_route53_zone.domain.zone_id
# }

output "files" {
  description = "Map of static object keys to source file paths uploaded to S3."
  value       = local.files
}

# File upload is now handled natively by aws_s3_object.this (see main.tf), so
# this command only invalidates the CloudFront edge cache. Do NOT re-add an
# `aws s3 sync --delete` here — it would race with / delete Terraform-managed
# objects.
output "command_invalidation" {
  description = "AWS CLI command used by the root module to invalidate this CloudFront distribution."
  value       = <<-EOT
    aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.dist.id} --paths '/*'
  EOT
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution id (for cache invalidation)."
  value       = aws_cloudfront_distribution.dist.id
}
