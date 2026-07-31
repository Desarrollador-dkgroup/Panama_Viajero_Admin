const DEFAULT_API_URL = 'https://panama-viajero-api.desarrollo-dkgroup.workers.dev'

export async function onRequest(context) {
  const apiBaseUrl = context.env.API_BASE_URL || DEFAULT_API_URL
  const requestUrl = new URL(context.request.url)
  const upstreamUrl = new URL(
    `${requestUrl.pathname}${requestUrl.search}`,
    apiBaseUrl,
  )

  // Keep the panel API same-origin while the Pages Function forwards it to Worker.
  return fetch(new Request(upstreamUrl, context.request))
}
