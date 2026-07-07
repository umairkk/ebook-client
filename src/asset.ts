/**
 * Resolve a public asset path against Vite's configured base URL so that
 * runtime string references (e.g. image `src` attributes and inline
 * `background` styles) work both locally and when the site is served from a
 * sub-path such as GitHub Pages (`/<repo>/`).
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
