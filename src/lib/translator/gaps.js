// The gaps translations met (TRANSLATOR_PLAN.md E2, W9): an idea the dictionary had no short way to say, gathered from the
// saved results (review/translations/**/*.json) into kb/translation-gaps.json, the queue the author and kb_frontier read.
// Pure: the caller reads and writes the files.
//
//   collectGaps(results) -> [{ idea, times, descriptions, notes, texts }]   most often met first
//   renderGaps(gaps, { limit }) -> text
//
// results: [{ file, result }]. A cast description over LONG_DESCRIPTION words (counted between spaces and hyphens, as
// output.js does) counts as a gap too, even when the session did not list it: a thing that takes that long to say wants a word.

export const LONG_DESCRIPTION = 10;

const key = (s) => String(s ?? '').trim().toLowerCase();
const lengthOf = (s) => String(s ?? '').split(/[\s-]+/).filter((w) => /\p{L}/u.test(w)).length;

export function collectGaps(results) {
  const byIdea = new Map();
  const add = (idea, description, note, file) => {
    const k = key(idea);
    if (!k) return;
    const g = byIdea.get(k) ?? { idea: String(idea).trim(), times: 0, descriptions: [], notes: [], texts: [] };
    g.times++;
    if (description && !g.descriptions.includes(description)) g.descriptions.push(description);
    if (note && !g.notes.includes(note)) g.notes.push(note);
    if (file && !g.texts.includes(file)) g.texts.push(file);
    byIdea.set(k, g);
  };
  for (const { file, result } of results) {
    const listed = new Set();
    for (const g of result?.gaps ?? []) {
      add(g.idea, g.description, g.note, file);
      listed.add(key(g.idea));
    }
    for (const c of result?.cast ?? []) {
      if (listed.has(key(c.thing)) || lengthOf(c.description) <= LONG_DESCRIPTION) continue;
      add(c.thing, c.description, `a ${lengthOf(c.description)}-word description`, file);
    }
  }
  return [...byIdea.values()].sort((a, b) => b.times - a.times || a.idea.localeCompare(b.idea));
}

export function renderGaps(gaps, { limit = 50 } = {}) {
  if (!gaps.length) return 'No gaps in the saved translations.';
  const out = [`${gaps.length} idea${gaps.length === 1 ? '' : 's'} with no short way to say ${gaps.length === 1 ? 'it' : 'them'}, most often met first:`];
  for (const g of gaps.slice(0, limit)) {
    out.push(`- ${g.idea} (${g.times}x): ${g.descriptions[0] ?? 'no description found'}${g.notes.length ? ` -- ${g.notes[0]}` : ''}`);
  }
  if (gaps.length > limit) out.push(`... and ${gaps.length - limit} more`);
  return out.join('\n');
}
