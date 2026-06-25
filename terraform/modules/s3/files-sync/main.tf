resource "aws_s3_object" "object" {
  for_each    = local.files_map
  bucket      = var.bucket_name
  key         = var.key_prefix != null ? "${var.key_prefix}/${each.key}" : each.key
  source      = each.value
  source_hash = filemd5(each.value)
}