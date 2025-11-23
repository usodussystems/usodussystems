output "files" {
  value = [for k, v in module.s3host : v.files]
}

output "path" {
  value = local.folders_path
}

output "subdomains" {
  value = local.subdomains
}
