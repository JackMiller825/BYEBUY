const HOSTED_API = 'https://byebuy.103.161.35.238.sslip.io'

export function apiOrigin(): string {
  if (typeof location === 'undefined') return ''
  const host = location.hostname.toLowerCase()
  if (host === 'byebuy.online' || host === 'www.byebuy.online') return HOSTED_API
  return ''
}

export function apiUrl(path: string): string {
  return `${apiOrigin()}${path}`
}
