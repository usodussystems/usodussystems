output "database_credentials" {
  description = "Database proxy endpoint and secret metadata for configured database users."
  # Safety warning: this output currently merges var.db_users and may carry
  # credential material in Terraform state. Migrate consumers to secret_name and
  # secret_arn only before removing the merged input payload.
  sensitive = true
  value = {
    for key, value in var.db_users : key => merge(value, {
      db_endpoint           = module.rds_postgres_proxy.proxy_endpoint
      db_password_encrypted = aws_kms_ciphertext.database_password_encrypted[key].ciphertext_blob
      secret_name           = aws_secretsmanager_secret.db_instance_proxy[key].name
      secret_arn            = aws_secretsmanager_secret.db_instance_proxy[key].arn
    })
  }
}

output "db_security_group" {
  description = "Security group ID attached to the PostgreSQL database."
  value       = aws_security_group.db_sg.id
}
