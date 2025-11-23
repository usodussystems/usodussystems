variable "bucket_name" {
  type = string
  description = "name of the s3 bucket"
  default = "org-builder-test-sync"
}

variable "files_directory_path" {
  type = string
  description = "Directory path for the files to upload"
}

variable "key_prefix" {
  type = string
  description = "S3 object key prefix"
}