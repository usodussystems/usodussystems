variable "db_instance_identifier" {
  type        = string
  description = "DB Instance name"
}

variable "kms_key_arn" {
  type        = string
  description = "KMS key ARN to decrypt vault"
}

variable "vpc_name" {
  type        = string
  description = "VPC name tag"
}

variable "attach_all_vpc_cidrs" {
  type        = bool
  description = "Attach all VPC CIDRs to the DB"
  default     = false
}

variable "subnet_ids" {
  type        = list(string)
  description = "List of subnet id to create RDS into"
}

variable "db_users" {
  type = map(object({
    db_username = string
    db_name     = string
  }))
  default = {
    master = {
      db_username = "postgres"
      db_name     = "postgres"
    }
  }
  description = "Database config for name & username. 'master' config is required"
}

variable "db_instance_class" {
  type        = string
  description = "Database instance class"
  default     = "db.m5.large"
}

variable "db_engine_version" {
  type        = string
  description = "Postgres db Engine version"
  default     = "14"
}

variable "db_backup_retention_period" {
  type        = number
  description = "No of days to retain the backup"
  default     = 0
}

variable "storage" {
  type = object({
    min = number
    max = number
  })
  description = "Allocated storage value in GB"
  default     = {
    min = 20
    max = 100
  }
}

variable "additional_security_groups" {
  type    = list(string)
  default = []
}

variable "additional_cidrs" {
  type    = list(string)
  default = []
}