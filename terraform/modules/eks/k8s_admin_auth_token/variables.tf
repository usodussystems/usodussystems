variable "cluster_name" {
  type        = string
  description = "cluster name"
}

variable "service_account_name" {
  description = "Kubernetes service account name for the admin token."
  type        = string
  default     = "octopus-admin-access-dev"
}

variable "service_account_namespace" {
  description = "Kubernetes namespace where the service account is created."
  type        = string
  default     = "default"
}

variable "allow_state_managed_cluster_admin_token" {
  description = "Explicit opt-in to create a long-lived cluster-admin service account token stored in Terraform state. Prefer short-lived Kubernetes auth for new use."
  type        = bool
  default     = false
}

variable "labels" {
  description = "Labels applied to Kubernetes resources."
  type        = map(string)
}
