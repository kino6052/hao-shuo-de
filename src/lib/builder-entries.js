// The composite dictionary words a reader can open in the Word Builder,
// shared by the Word Builder and the composite dictionary page. Reading a form
// takes about half a millisecond, so an entry is read only when it is asked
// for (on screen, or among a search's first results) and remembered.
import composites from "../data/composites.ts";
import dictionary from "../data/dictionary.ts";
import { builderEntries } from "./word-builder-parse.js";
import { buildUrl, parseUrl } from "./router.js";

const read = new Map();

// -> the { entry, tree } of one composite dictionary entry (see
// src/lib/word-builder-parse.js), or null when the Word Builder cannot show it.
export function buildOf(entry) {
  if (!read.has(entry)) read.set(entry, builderEntries(dictionary, [entry])[0] ?? null);
  return read.get(entry);
}

// -> the first `limit` builds, in dictionary order, of the entries `keep` lets through.
export function findBuilds(keep, limit) {
  const found = [];
  for (const entry of composites.entries) {
    if (found.length >= limit) break;
    if (!keep(entry)) continue;
    const build = buildOf(entry);
    if (build) found.push(build);
  }
  return found;
}

// -> the { entry, tree } for a composite dictionary entry's rank, or null.
export function buildOfRank(rank) {
  const entry = composites.entries.find((e) => e.rank === rank);
  return entry ? buildOf(entry) : null;
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
