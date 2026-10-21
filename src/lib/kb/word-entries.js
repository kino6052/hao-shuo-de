// Counts a core word as an entry in the English and Mandarin checks (yardsticks.js, english.js, frontier.js).
// A core word that no composite entry repeats (球, 东, 没: the entry went when the word became core) is still said by the
// dictionary, so the checks count it. Nothing here changes data.
//
//   wordEntries({ words, composites, links }) -> { entries, links }
//
// words       the dictionary's words { id: { term, hanzi, pos, definition, senses } }
// composites  the dictionary's entries [{ zh }]
// links       kb/wordnet/links.json: { linked: { zh: [ili] }, words: { id: [ili] } }
// entries     the composites, then one entry for each word (and each sense) whose hanzi no composite has: { zh, py, en, pos, word }
// links       the same links, with `linked[hanzi]` filled from `words[id]` for those new entries

// 'to love, have compassion for, show deep affection to; ...' -> 'to love, have compassion for': the first clause is its gloss
// ('what? which?; ...' -> 'what, which': a question mark ends a gloss word like a comma does)
function glossOf(text) {
  const clean = String(text ?? '').replace(/\{\{[^}]*\}\}/g, '').replace(/\([^)]*\)/g, '').replace(/[?!]/g, ',');
  const parts = clean.split(/[;:.]/)[0].split(',').map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
  return parts.slice(0, 3).join(', ');
}

export function wordEntries({ words = {}, composites = [], links = {} } = {}) {
  const have = new Set(composites.map((c) => c.zh));
  const extra = [];
  const linked = { ...(links.linked ?? {}) };
  const add = (zh, entry, ilis) => {
    if (!zh || have.has(zh)) return;
    have.add(zh);
    extra.push({ zh, ...entry });
    if (ilis?.length && !linked[zh]) linked[zh] = ilis;
  };
  for (const [id, w] of Object.entries(words)) {
    add(w.hanzi, { py: w.term, en: glossOf(w.definition?.eng), pos: w.pos?.eng, word: id }, links.words?.[id]);
    for (const s of Object.values(w.senses ?? {})) add(s.hanzi, { py: w.term, en: glossOf(s.eng), pos: w.pos?.eng, word: id }, null);
  }
  return { entries: [...composites, ...extra], links: { ...links, linked } };
}
