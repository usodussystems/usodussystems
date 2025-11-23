data "aws_eks_cluster" "eks_cluster" {
  name = var.cluster_name
}

data "aws_eks_cluster_auth" "eks_cluster_auth" {
  name = var.cluster_name
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.eks_cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.eks_cluster.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.eks_cluster_auth.token
}


resource "kubernetes_service_account_v1" "admin_service_account" {
  metadata {
    name      = var.service_account_name
    namespace = var.service_account_namespace
    labels    = var.labels
  }
}

resource "kubernetes_cluster_role_binding_v1" "cluster_admin_role_binding" {
  metadata {
    name   = "${kubernetes_service_account_v1.admin_service_account.metadata[0].name}-crb"
    labels = var.labels
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "cluster-admin"
  }
  subject {
    kind      = "ServiceAccount"
    name      = kubernetes_service_account_v1.admin_service_account.metadata[0].name
    namespace = kubernetes_service_account_v1.admin_service_account.metadata[0].namespace
  }
}


resource "kubernetes_secret_v1" "octopus_service_account_token" {
  metadata {
    name        = "${kubernetes_service_account_v1.admin_service_account.metadata[0].name}-secret"
    namespace   = kubernetes_service_account_v1.admin_service_account.metadata[0].namespace
    labels      = var.labels
    annotations = {
      "kubernetes.io/service-account.name" = var.service_account_name
    }
  }

  type = "kubernetes.io/service-account-token"
}



