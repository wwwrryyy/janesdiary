/**
 * Safely joins the configured Astro BASE_URL (`/janesdiary`) with any internal path or asset path,
 * guaranteeing zero double slashes and proper trailing slash handling for GitHub Pages subpath hosting.
 */
export function withBase(path: string = '/'): string {
  const rawBase = import.meta.env.BASE_URL || '/janesdiary';
  const normalizedBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  if (!path || path === '/') {
    return `${normalizedBase}/`;
  }

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }

  if (path.startsWith('#')) {
    return `${normalizedBase}/${path}`;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Avoid double-prefixing if path already starts with base
  if (cleanPath === normalizedBase || cleanPath.startsWith(`${normalizedBase}/`)) {
    return cleanPath;
  }

  return `${normalizedBase}${cleanPath}`;
}
