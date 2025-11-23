variable "topic_name" {
  description = "SNS topic name"
  type        = string
}

variable "subscriptions" {
  description = "List of subscriptions"
  type = list(object({
    protocol = string
    endpoint = string
  }))
}
