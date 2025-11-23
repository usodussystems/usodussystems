output "cluster_token_ca_crt" {
  value     = kubernetes_secret_v1.octopus_service_account_token.data["ca.crt"]
  sensitive = true
}

output "cluster_token" {
  value     = kubernetes_secret_v1.octopus_service_account_token.data.token
  sensitive = true
}

 output "cluster_endpoint" {
   value = data.aws_eks_cluster.eks_cluster.endpoint
 }