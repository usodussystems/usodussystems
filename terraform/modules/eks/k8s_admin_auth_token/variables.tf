variable "cluster_name" {
  type = string
  description = "cluster name"
}

variable "service_account_name" {
  default = "octopus-admin-access-dev"
}

variable "service_account_namespace" {
  default = "default"
}

variable "labels" {
   type = map(string)
}
