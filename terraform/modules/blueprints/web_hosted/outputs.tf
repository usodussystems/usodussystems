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
  value = local.files
}

output "command_invalidation" {
  value = <<-EOT
    aws s3 sync ${var.path_to_deploy_files} s3://${aws_s3_bucket.site.id}/ --delete
    aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.dist.id} --paths '/*'
  EOT
}
