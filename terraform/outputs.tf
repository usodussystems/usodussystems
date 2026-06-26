output "files" {
  description = "Static files managed by each web_hosted module instance."
  value       = [for k, v in module.s3host : v.files]
}

output "path" {
  description = "Artifact folder path used for each subdomain deployment."
  value       = local.folders_path
}

output "site_urls" {
  description = "Public HTTPS URLs for each deployed static site."
  value = {
    for subdomain, site in module.s3host :
    subdomain => "https://${subdomain}.${var.domain_name}"
  }
}

output "subdomains" {
  description = "Set of subdomains deployed by this root module."
  value       = local.subdomains
}
