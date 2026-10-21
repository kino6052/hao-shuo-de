// Hints for describing a new word: for an English or Mandarin word, what WordNet says it means and which entry the description
// can start from. Each WordNet sense comes with its definition, the Mandarin words WordNet gives for it, the entry it can start
// from (the nearest kind the dictionary already has), the entries for its opposite (for an adjective, also the one found through
// its group's head word) and its whole, and a draft line saying how to begin (KB_PLAN.md phase 7). A hint is a starting point
// for Claude or the author, never a description: the description is written with dictionary words only and checked with
// kb_check_form. Nothing here changes data.
//
//   hintReport(english, text, { limit }) -> { query, language, said, senses: [...], note? }
//   renderHints(report)                  -> the report as text
//
// english  the English model (english.js): lookup, senseIds, entriesFor, kindFrom, sensesOfMandarin, data.index
// A word that is already said (an entry's gloss has it, or an entry shares its sense) is reported as said, with the entries.

const HAN = /\p{Script=Han}/u;
const MAX_SENSES = 4;
const MAX_MANDARIN = 6;

const plain = (e) => `${e.zh} ${e.py}`;

export function hintReport(english, text, { limit = MAX_SENSES } = {}) {
  const query = String(text ?? '').trim();
  const language = HAN.test(query) ? 'zh' : 'en';
  const index = english.data?.index;
  const out = { query, language, said: [], senses: [] };
  if (!query) return out;
  if (!index) return { ...out, note: 'The English index is not built (npm run wordnet), so there are no hints.' };

  let ilis;
  if (language === 'en') {
    const r = english.lookup(query);
    out.said = [...r.glosses, ...r.sameSense.flatMap((s) => s.entries)].filter((e, i, all) => all.findIndex((x) => x.zh === e.zh) === i);
    ilis = english.senseIds(query);
  } else {
    ilis = english.sensesOfMandarin(query);
  }
  if (!ilis.length) return { ...out, note: language === 'en' ? `"${query}" is not in the English WordNet.` : `WordNet has no sense with "${query}" as a Mandarin word.` };

  const synset = (ili) => index.synsets?.[ili];
  const entriesOf = (iliList) => {
    const seen = new Set();
    const lemmaOf = (ili) => synset(ili)?.l?.[0] ?? ili;
    return iliList
      .map((ili) => ({ lemma: lemmaOf(ili), entries: english.entriesFor(ili) }))
      .filter((x) => x.entries.length && !seen.has(x.lemma) && seen.add(x.lemma));
  };

  for (const ili of ilis.slice(0, limit)) {
    const s = synset(ili);
    if (!s) continue;
    const said = english.entriesFor(ili);
    const start = said.length ? [] : english.kindFrom(ili).slice(0, 3);
    const sense = {
      ili,
      pos: s.p,
      definition: s.d,
      lemmas: s.l ?? [],
      mandarin: (s.z ?? []).slice(0, MAX_MANDARIN),
      said,
      start: start.map((e) => ({ zh: e.zh, py: e.py, en: e.en, via: e.via, steps: e.steps })),
      opposites: entriesOf(s.a ?? []),
      oppositeThroughHead: entriesOf(s.ai ?? []), // an adjective's opposite found through the head word of its group (tiny -> small -> large)
      wholes: entriesOf(s.w ?? []),
    };
    sense.draft = draftLine(sense);
    out.senses.push(sense);
  }
  return out;
}

// how to begin, in one line
function draftLine(s) {
  if (s.said.length) return `already said by ${s.said.map(plain).join(', ')} (the sense is linked); nothing to draft.`;
  const sets = `then say what sets it apart: "${s.definition}"`;
  if (s.start.length) {
    const k = s.start[0];
    return `start from …-de ${k.py} (${k.en}), ${s.start[0].steps === 1 ? 'one step up' : `${k.steps} steps up`}; ${sets}.`;
  }
  return `no entry on the way up; describe it from its definition: "${s.definition}".`;
}

export function renderHints(r) {
  const out = [`Hints for "${r.query}"${r.language === 'zh' ? ' (a Mandarin word)' : ''}`];
  if (r.said.length) out.push(`Already said by: ${r.said.map(plain).join(', ')}`);
  if (r.note) out.push(r.note);
  for (const s of r.senses) {
    out.push('', `${s.pos} ${s.lemmas.slice(0, 4).join(', ')}: ${s.definition}`);
    if (s.mandarin.length) out.push(`  WordNet's Mandarin: ${s.mandarin.join(', ')}`);
    if (s.start.length) out.push(`  can start from: ${s.start.map((k) => `${plain(k)} (${k.en}; ${k.via.join(' < ')})`).join('; ')}`);
    if (s.opposites.length) out.push(`  opposite: ${s.opposites.map((o) => `${o.lemma} = ${o.entries.map(plain).join('/')}`).join('; ')}`);
    if (s.oppositeThroughHead.length) out.push(`  opposite, through its group's head word: ${s.oppositeThroughHead.map((o) => `${o.lemma} = ${o.entries.map(plain).join('/')}`).join('; ')}`);
    if (s.wholes.length) out.push(`  part of: ${s.wholes.map((o) => `${o.lemma} = ${o.entries.map(plain).join('/')}`).join('; ')}`);
    out.push(`  draft: ${s.draft}`);
  }
  if (r.senses.length) out.push('', 'Write the description with dictionary words only, then check it with kb_check_form.');
  return out.join('\n');
}
