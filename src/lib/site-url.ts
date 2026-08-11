// Single source of truth for absolute URLs (canonical, og:url, og:image).
// Override at build time with VITE_SITE_URL if the domain ever changes.
export const SITE_URL = (import.meta.env["VITE_SITE_URL"] ?? "https://kaycarta.com.au").replace(
  /\/$/,
  "",
);

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
