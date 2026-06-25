output "cluster_token_ca_crt" {
  description = "Kubernetes service account CA certificate data."
  # Safety warning: marking this sensitive hides CLI output, but the secret data
  # still exists in Terraform state. Prefer short-lived auth flows for new use.
  value     = kubernetes_secret_v1.octopus_service_account_token.data["ca.crt"]
  sensitive = true
}

output "cluster_token" {
  description = "Kubernetes service account token."
  # Safety warning: marking this sensitive hides CLI output, but the token still
  # exists in Terraform state. Prefer short-lived auth flows for new use.
  value     = kubernetes_secret_v1.octopus_service_account_token.data.token
  sensitive = true
}

output "cluster_endpoint" {
  description = "EKS cluster API endpoint."
  value       = data.aws_eks_cluster.eks_cluster.endpoint
}
