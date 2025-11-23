data "aws_route53_zone" "public_zone" {
  name         = var.zone_name
  private_zone = false
}
