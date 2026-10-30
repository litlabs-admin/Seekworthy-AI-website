export function faviconUrl(domain: string, size: number) {
  const upstream = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
  return upstream;
}

