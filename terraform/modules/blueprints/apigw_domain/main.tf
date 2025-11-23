variable "site_domain" {
  description = "The domain name for the site"
  type        = string
}
variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default     = {}

}

locals {
  tags = var.tags
}

resource "aws_api_gateway_domain_name" "this" {
  domain_name              = format("api.%s", var.site_domain)
  regional_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}


# Example DNS record using Route53.
# Route53 is not specifically required; any DNS host can be used.
resource "aws_route53_record" "this" {
  name    = aws_api_gateway_domain_name.this.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.domain.id

  alias {
    evaluate_target_health = true
    name                   = aws_api_gateway_domain_name.this.regional_domain_name
    zone_id                = aws_api_gateway_domain_name.this.regional_zone_id
  }
}



resource "aws_acm_certificate" "cert" {
  domain_name       = format("api.%s", var.site_domain)
  validation_method = "DNS"

  tags = merge(local.tags, {
    Name = var.site_domain
  })
}

data "aws_route53_zone" "domain" {
  name = var.site_domain
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = data.aws_route53_zone.domain.zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]

}
