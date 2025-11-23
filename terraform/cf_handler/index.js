const config = {
  suffix: ".html",
  appendToDirs: "index.html",
  removeTrailingSlash: false,
}

async function handler(event) {
  const request = event.request
  const headers = request.headers
  let uri = request.uri

  // // Skip rewriting assets
  // if (uri.startsWith("/_next/") || uri.startsWith("/static/")) {
  //   return request
  // }

  // Extract tenant id from the first path segment
  // e.g., /tenant123/page -> tenantId: tenant123, newUri: /page
  const match = uri.match(/^\/([^\/]+)(\/.*)?$/)
  if (match) {
    const tenantId = match[1]
    // uri = match[2] || "/"

    // Set custom header for tenant id
    headers["x-tenant-id"] = { value: tenantId }
  }

  // // URL Rewrite Logic
  // if (uri.endsWith("/")) {
  //   uri += config.appendToDirs
  // } else if (!uri.includes(".")) {
  //   uri += "/" + config.appendToDirs
  // }

  // request.uri = uri
  return request
}
