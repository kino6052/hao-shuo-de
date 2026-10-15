import { parseUrl } from './router.js';

// The address of a file from public/ (story pictures, audio). The build uses
// base: './' so one docs/ folder works from a domain root, a GitHub Pages
// project path or a custom domain; but './story/x.webp' in a script is read
// against the page's own address, so it breaks on /repo/en/lesson/. This asks
// the router for the site root instead, the same way links are built.
export function assetUrl(path, pathname = window.location.pathname) {
  return `${parseUrl(pathname).root}/${path.replace(/^\/+/, '')}`;
}
