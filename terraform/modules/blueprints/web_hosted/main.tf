/**
 * # S3 Hosted Web Applications CSR
 * ----
 * Fully hosted on AWS with s3, cloudfront and route53
 */

locals {
  is_prod = var.environment == "prd"

  site_domain = trim(var.site_domain, ".")
  subdomain   = trim(var.subdomain, ".")
  bucket_name = local.subdomain == "" ? local.site_domain : "${local.subdomain}.${local.site_domain}"

  # Recursive walk of the built artifact so nested files (e.g. assets/*.js,
  # assets/*.css) are uploaded too. Keyed by the relative path, which becomes
  # the S3 object key.
  files = {
    for f in fileset(var.path_to_deploy_files, "**") :
    f => format("%s/%s", trimsuffix(var.path_to_deploy_files, "/"), f)
  }

  # Map file extensions to MIME types. S3 defaults uploaded objects to
  # binary/octet-stream, which makes browsers download (not render) HTML/CSS/JS;
  # setting content_type explicitly is required for a static site to work.
  mime_types = {
    "html"        = "text/html"
    "css"         = "text/css"
    "js"          = "application/javascript"
    "mjs"         = "application/javascript"
    "json"        = "application/json"
    "map"         = "application/json"
    "svg"         = "image/svg+xml"
    "png"         = "image/png"
    "jpg"         = "image/jpeg"
    "jpeg"        = "image/jpeg"
    "gif"         = "image/gif"
    "ico"         = "image/x-icon"
    "webp"        = "image/webp"
    "avif"        = "image/avif"
    "woff"        = "font/woff"
    "woff2"       = "font/woff2"
    "ttf"         = "font/ttf"
    "eot"         = "application/vnd.ms-fontobject"
    "txt"         = "text/plain"
    "xml"         = "application/xml"
    "webmanifest" = "application/manifest+json"
    "wasm"        = "application/wasm"
  }

  hashed_asset_pattern = "(^|/).+[-._][a-z0-9]{8,}\\.(css|js|mjs|json|map|svg|png|jpg|jpeg|gif|ico|webp|avif|woff|woff2|ttf|eot|wasm)$"

  tags = var.tags
}

resource "aws_s3_bucket" "site" {
  bucket        = local.bucket_name
  tags          = local.tags
  force_destroy = var.force_destroy
}

# resource "aws_s3_bucket_acl" "example_bucket_acl" {
#   bucket = aws_s3_bucket.site.id
#   acl    = "public-read"
# }

resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.site.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}


resource "aws_s3_bucket_public_access_block" "this" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "this" {
  bucket = aws_s3_bucket.site.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }

  # routing_rule {
  # condition {
  #   key_prefix_equals = "docs/"
  # }
  # redirect {
  #   replace_key_prefix_with = "documents/"
  # }
  # }
}

resource "aws_s3_bucket_cors_configuration" "this" {
  bucket = aws_s3_bucket.site.id
  cors_rule {
    allowed_headers = [
      "Accept",
      "Authorization",
      "Content-Type",
      "Origin"
    ]
    allowed_methods = [
      "GET",
      "HEAD",
      "OPTIONS"
    ]
    allowed_origins = concat([
      "https://${local.bucket_name}",
      "https://${aws_cloudfront_distribution.dist.domain_name}"
    ], var.extra_cors_domains)
    expose_headers = [
      "ETag"
    ]
    max_age_seconds = 3000
  }

}

resource "aws_s3_object" "this" {
  for_each = local.files

  bucket = aws_s3_bucket.site.id
  key    = each.key
  source = each.value
  cache_control = each.key == "index.html" ? "no-cache, must-revalidate" : (
    can(regex(local.hashed_asset_pattern, lower(each.key))) ? "public, max-age=31536000, immutable" : "public, max-age=3600"
  )

  # content_type drives how browsers handle the response; fall back to a generic
  # binary type for unknown extensions.
  content_type = lookup(
    local.mime_types,
    lower(try(element(split(".", each.key), length(split(".", each.key)) - 1), "")),
    "application/octet-stream"
  )

  # Re-upload only when the file content changes; source_hash also lets
  # `terraform plan` detect drift against the bucket. (Preferred over `etag`,
  # which breaks if SSE-KMS is ever enabled on the bucket.)
  source_hash = filemd5(each.value)
}

data "aws_iam_policy_document" "S3_read_files" {
  statement {
    sid    = "CloudFrontDistReadGetObject"
    effect = "Allow"
    principals {
      type = "Service"
      identifiers = [
        "cloudfront.amazonaws.com"
      ]
    }
    resources = [
      aws_s3_bucket.site.arn,
      format("%s/*", aws_s3_bucket.site.arn)
    ]

    actions = [
      "s3:GetObject"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.dist.arn]
    }
  }
}

resource "aws_cloudfront_origin_access_control" "origin_access_control" {
  name                              = "control-access-${var.environment}-${var.subdomain}"
  description                       = "Control Origin for S3 for ${var.subdomain}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.S3_read_files.json
}

# resource "aws_acm_certificate" "cert" {
#   domain_name       = format("%s.%s", local.subdomain, var.site_domain)
#   validation_method = "DNS"


#   tags = merge(local.tags, {
#     Name = var.site_domain
#   })
# }

# data "cloudflare_zone" "this" {
#   filter = {
#     name = var.site_domain
#   } 
# }

# resource "cloudflare_dns_record" "this" {
#   zone_id = data.cloudflare_zone.this.id
#   name = "${local.bucket_name}"
#   ttl = 3600
#   type = "CNAME"
#   comment = "Domain verification record"
#   content = aws_cloudfront_distribution.dist.domain_name
#   proxied = true
#   settings = {
#     ipv4_only = true
#     ipv6_only = true
#   }
#   tags = [""]
# }


# resource "aws_route53_record" "cert_validation" {
#   for_each = {
#     for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
#       name    = dvo.resource_record_name
#       record  = dvo.resource_record_value
#       type    = dvo.resource_record_type
#       zone_id = data.aws_route53_zone.domain.zone_id
#     }
#   }

#   allow_overwrite = true
#   name            = each.value.name
#   records         = [each.value.record]
#   ttl             = 60
#   type            = each.value.type
#   zone_id         = each.value.zone_id
# }

# resource "aws_acm_certificate_validation" "cert" {
#   certificate_arn         = aws_acm_certificate.cert.arn
#   validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
# }

resource "aws_cloudfront_distribution" "dist" {

  origin {
    domain_name              = aws_s3_bucket.site.bucket_domain_name
    origin_id                = aws_s3_bucket.site.id
    origin_access_control_id = aws_cloudfront_origin_access_control.origin_access_control.id
  }
  enabled             = true
  default_root_object = "index.html"

  aliases = [
    local.bucket_name,
  ]
  web_acl_id = var.waf_acl_arn

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.site.id

    origin_request_policy_id   = data.aws_cloudfront_origin_request_policy.this.id
    cache_policy_id            = data.aws_cloudfront_cache_policy.this.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.this.id

    dynamic "function_association" {
      for_each = aws_cloudfront_function.this
      content {
        event_type   = "viewer-request"
        function_arn = function_association.value.arn
      }
    }

    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  tags = local.tags
}

data "aws_cloudfront_origin_request_policy" "this" {
  name = "Managed-CORS-S3Origin"
}

data "aws_cloudfront_cache_policy" "this" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_response_headers_policy" "this" {
  name    = "request-headers-policy-${var.environment}-${var.subdomain}"
  comment = "Security Best Practices"
  security_headers_config {

    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }

    referrer_policy {
      override        = true
      referrer_policy = "strict-origin-when-cross-origin"
    }

    # content_security_policy {

    # }

    strict_transport_security {
      access_control_max_age_sec = 31536000
      preload                    = true
      include_subdomains         = true
      override                   = true
    }

    xss_protection {
      mode_block = true
      override   = true
      protection = true
    }
  }

  cors_config {
    access_control_allow_credentials = false

    access_control_allow_headers {
      items = [
        "Accept",
        "Authorization",
        "Content-Type",
        "Origin"
      ]
    }

    access_control_allow_methods {
      items = ["GET", "HEAD", "OPTIONS"]
    }

    access_control_allow_origins {
      items = concat([
        "https://${local.bucket_name}"
      ], var.extra_cors_domains)
    }
    access_control_expose_headers {
      items = ["ETag"]
    }
    access_control_max_age_sec = 600

    origin_override = true
  }
}

resource "aws_cloudfront_function" "this" {
  for_each = var.cf_functions
  name     = each.key
  runtime  = try(each.value.runtime, "cloudfront-js-2.0")
  comment  = try(each.value.comment, "Handle requests")
  publish  = try(each.value.publish, true)
  code     = file(each.value.path)
}


# resource "aws_route53_record" "this" {
#   zone_id = data.aws_route53_zone.domain.zone_id
#   name    = var.subdomain
#   ttl     = 1
#   type    = "CNAME"

#   records = [aws_cloudfront_distribution.dist.domain_name]
# }
