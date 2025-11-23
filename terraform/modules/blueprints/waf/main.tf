
locals {
  managed_rule_groups = {
    common = {
      name     = "AWSManagedRulesCommonRuleSet"
      priority = 2
    }
    known-bad-inputs = {
      name     = "AWSManagedRulesKnownBadInputsRuleSet"
      priority = 3
    }
    amazon-ip-reputation = {
      name     = "AWSManagedRulesAmazonIpReputationList"
      priority = 4
    }
    anonymous-ip = {
      name     = "AWSManagedRulesAnonymousIpList"
      priority = 5
    }
    sqli = {
      name     = "AWSManagedRulesSQLiRuleSet"
      priority = 6
    }
    windows = {
      name     = "AWSManagedRulesWindowsRuleSet"
      priority = 7
    }
    admin-protection = {
      name     = "AWSManagedRulesAdminProtectionRuleSet"
      priority = 8
    }
    bot-control = {
      name     = "AWSManagedRulesBotControlRuleSet"
      priority = 9
    }
  }
}

resource "aws_wafv2_ip_set" "this" {
  for_each           = toset(var.subdomains)
  name               = "waf-ip-set-${each.value}-${var.environment}"
  scope              = "CLOUDFRONT"
  ip_address_version = "IPV4"
  addresses          = var.allowed_ips
  tags               = var.tags
}

resource "aws_wafv2_web_acl" "this" {
  for_each    = toset(var.subdomains)
  name        = "waf-acl-${each.value}-${var.environment}"
  description = "WAF IP Set access control for ${title(each.value)} ${upper(var.environment)}"
  scope       = "CLOUDFRONT"

  custom_response_body {
    key     = "${each.value}-${var.environment}"
    content = <<-EOF
    <p>
    Yep, nice try! But you can't access this!
    </p>
    EOF

    content_type = "TEXT_HTML"
  }

  default_action {
    block {}
  }

  rule {
    name     = "ip-set"
    priority = 1

    action {
      allow {}

    }

    statement {
      ip_set_reference_statement {
        arn = aws_wafv2_ip_set.this[each.value].arn
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "ipset-${each.value}-${var.environment}"
      sampled_requests_enabled   = true
    }
  }
  dynamic "rule" {
    for_each = local.managed_rule_groups
    content {
      name     = "${rule.key}-${each.value}-${var.environment}"
      priority = rule.value.priority

      override_action {
        count {}
      }

      statement {
        managed_rule_group_statement {
          name        = rule.value.name
          vendor_name = "AWS"
        }

      }
      visibility_config {
        cloudwatch_metrics_enabled = true
        metric_name                = "${each.key}-${each.value}-${var.environment}"
        sampled_requests_enabled   = true
      }
    }
  }
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "waf-acl-${each.value}-${var.environment}"
    sampled_requests_enabled   = true
  }
  tags = var.tags
}


