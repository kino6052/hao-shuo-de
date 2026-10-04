// The composite dictionary words a reader can open in the Word Builder, read
// once and shared by the Word Builder and the composite dictionary page.
import composites from "../data/composites.ts";
import dictionary from "../data/dictionary.ts";
import { builderEntries } from "./word-builder-parse.js";
import { buildUrl, parseUrl } from "./router.js";

let cache = null;

// -> [{ entry, tree }] (see src/lib/word-builder-parse.js). Reading every
// form takes a moment, so callers ask for it after their first render.
export function dictionaryBuilds() {
  if (!cache) cache = builderEntries(dictionary, composites.entries);
  return cache;
}

// -> the { entry, tree } for a composite dictionary entry's rank, or null.
export function buildOfRank(rank) {
  return dictionaryBuilds().find((b) => b.entry.rank === rank) ?? null;
}

// -> the Word Builder's URL with a dictionary word loaded.
export function wordBuilderUrl(lang, rank) {
  const root = parseUrl(window.location.pathname).root;
  return `${buildUrl(root, lang, "word-builder")}?w=${rank}`;
}

// Opens a URL inside the app, the way the sidebar does (no page reload).
export function openInApp(event, url) {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
  event.preventDefault();
  window.history.pushState(null, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
