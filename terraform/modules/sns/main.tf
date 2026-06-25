resource "aws_sns_topic" "sns_topic" {
  name = var.topic_name
}

resource "aws_sns_topic_subscription" "sns_topic_subscription" {
  count     = length(var.subscriptions)
  topic_arn = aws_sns_topic.sns_topic.arn
  protocol  = var.subscriptions[count.index].protocol
  endpoint  = var.subscriptions[count.index].endpoint
}