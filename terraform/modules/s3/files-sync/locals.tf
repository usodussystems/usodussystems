locals {
  files = fileset(var.files_directory_path, "**")

  files_map = tomap({
    for fn in local.files : fn => "${var.files_directory_path}/${fn}"
  })
}
