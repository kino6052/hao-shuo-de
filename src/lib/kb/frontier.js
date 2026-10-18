// The frontier (KB_PLAN.md phase 6, K28): what the dictionary cannot say yet, and the word that would fix each. The yardsticks
// (yardsticks.js) count the gaps; this names a fix for them, using the Mandarin words WordNet gives each English sense.
// Nothing here changes data.
//
//   frontier({ yardsticks, english, composites, words, mandarin }) -> { ready, words, mandarin, sentences }
//   renderFrontier(report, { part, limit }) -> the report as text
//
// yardsticks  the report of yardsticks.js
// english     the English model (english.js): lookup(word), senseIds(word), data.index
// words       the dictionary's words { id: { term, hanzi } }; composites [{ zh, py }]
// mandarin    the common Mandarin words [{ zh, py, rank }]
//
// An English word the dictionary cannot say is one of:
//   link      the dictionary has a Mandarin word WordNet gives for the sense, but that entry is not linked to it
//             (or its gloss is another word): link or gloss it, nothing to add
//   add       a common Mandarin word (best rank) is WordNet's word for the sense and is no entry yet: the word that would fix it
//   grammar   WordNet has no sense for it, or the author's own Mandarin for it is an entry (of: 的): said by grammar, not by a word
//   rare      WordNet gives only Mandarin words that are not in the common list
//   none      WordNet has senses but no Mandarin word for them
// A common Mandarin word the dictionary lacks shows its English meaning and whether the dictionary already says that meaning.
// A sentence one character away shows the character and the words that carry it.

const MAX_SENSES = 3;
const MAX_CANDIDATES = 4;

// Closed-class English words are said by a pattern or a particle, not by a word of their own, and WordNet's senses for them
// (will: wanting; can: a tin; may: the month) would only mislead, so they are not sent looking for a Mandarin word.
const FUNCTION_WORDS = new Set(
  'a an the to of in on at by for from with about into than as and or but if so because while that this these those i me my mine you your yours he him his she her hers it its we us our ours they them their theirs who whom whose which what when where why how am is are was were be been being do does did done have has had having will would shall should can could may might must not no there here then very too also just'.split(' '),
);

export const PARTS = ['words', 'mandarin', 'sentences'];

export function frontier({ yardsticks, english, composites = [], words = {}, mandarin = [] }) {
  const index = english?.data?.index;
  if (!yardsticks || !index) return { ready: false };
  const have = new Map(composites.map((c) => [c.zh, c]));
  const byZh = new Map(mandarin.map((m) => [m.zh, m]));
  const synset = (ili) => index.synsets?.[ili];
  const name = (zh) => `${zh} ${have.get(zh)?.py ?? byZh.get(zh)?.py ?? ''}`.trim();
  const senseText = (ili) => (ili && synset(ili) ? `${synset(ili).l?.[0] ?? ''}: ${synset(ili).d?.slice(0, 50) ?? ''}` : undefined);

  // -- English words ------------------------------------------------------------------------------
  const basic = new Map((yardsticks.basic?.words ?? []).map((b) => [b.en, b]));
  const wordItems = (yardsticks.englishTop?.missing ?? []).map((en, i) => {
    const ilis = english.senseIds(en).slice(0, MAX_SENSES);
    const seen = new Set();
    const zh = [];
    for (const ili of ilis) {
      for (const z of synset(ili)?.z ?? []) {
        if (seen.has(z)) continue;
        seen.add(z);
        zh.push({ zh: z, py: have.get(z)?.py ?? byZh.get(z)?.py, have: have.has(z), rank: byZh.get(z)?.rank, ili });
      }
    }
    const authors = basic.get(en);
    const best = zh.filter((x) => !x.have && x.rank).sort((a, b) => a.rank - b.rank)[0];
    const linkable = zh.find((x) => x.have);
    let fix;
    if (FUNCTION_WORDS.has(en)) fix = 'grammar';
    else if (linkable) fix = 'link';
    else if (best) fix = 'add';
    else if (!ilis.length || authors?.zhSaid) fix = 'grammar';
    else if (zh.length) fix = 'rare';
    else fix = 'none';
    // the entries first, then the common words (most common first), then the rest, shortest first
    zh.sort((a, b) => Number(b.have) - Number(a.have) || (a.rank ?? Infinity) - (b.rank ?? Infinity) || a.zh.length - b.zh.length);
    const isFunction = FUNCTION_WORDS.has(en); // WordNet's Mandarin for a function word ("an": a nursing diploma) is not worth showing
    return {
      en,
      rank: i + 1,
      fix,
      zh: isFunction ? [] : zh.slice(0, MAX_CANDIDATES),
      best: best && !isFunction ? name(best.zh) : undefined,
      author: authors?.zh,
      sense: senseText(fix === 'link' ? linkable.ili : ilis[0]),
    };
  });
  const tally = (list) => list.reduce((t, x) => ({ ...t, [x.fix]: (t[x.fix] ?? 0) + 1 }), {});

  // -- Mandarin words ----------------------------------------------------------------------------
  // WordNet's senses for each Mandarin word, to say what a missing common word means
  const linkedTo = new Map(); // the entries linked to each sense
  for (const [zh, ilis] of Object.entries(english.data?.links?.linked ?? {})) if (have.has(zh)) for (const i of ilis) (linkedTo.get(i) ?? linkedTo.set(i, []).get(i)).push(zh);
  const zhSenses = new Map();
  for (const [ili, s] of Object.entries(index.synsets ?? {})) for (const z of s.z ?? []) (zhSenses.get(z) ?? zhSenses.set(z, []).get(z)).push(ili);
  const mandarinItems = (yardsticks.mandarin?.missing ?? []).map((m) => {
    const ilis = (zhSenses.get(m.zh) ?? []).slice(0, MAX_SENSES);
    const meaning = ilis.map((i) => `${synset(i).l[0]} (${synset(i).d.slice(0, 40)})`).slice(0, 2);
    // does the dictionary already say one of its senses? the entries linked to the sense, or glossed with its main word
    // (not every word of the sense: "pop" is one of the words for "popular" and would only lead to 爸爸)
    const said = [];
    for (const i of ilis) {
      for (const zh of linkedTo.get(i) ?? []) said.push(name(zh));
      for (const e of english.lookup(synset(i).l[0]).glosses) said.push(`${e.zh} ${e.py}`);
    }
    return { zh: m.zh, py: m.py, rank: m.rank, meaning, saidBy: [...new Set(said)].slice(0, 3) };
  });

  // -- sentences one character away -----------------------------------------------------------------
  const wordsByHanzi = new Map();
  for (const [id, w] of Object.entries(words)) if (w.hanzi) (wordsByHanzi.get(w.hanzi) ?? wordsByHanzi.set(w.hanzi, []).get(w.hanzi)).push(w.term ?? id);
  const sentences = {
    total: yardsticks.sentences?.total ?? 0,
    said: yardsticks.sentences?.said ?? 0,
    oneAway: yardsticks.sentences?.oneAway ?? 0,
    chars: (yardsticks.sentences?.missing ?? []).map((m) => ({
      char: m.char,
      unlocks: m.unlocks,
      sentences: m.sentences,
      // the char is a word of the dictionary without an entry of its own, or only part of common words that are no entry yet
      isWord: wordsByHanzi.get(m.char) ?? [],
      carriedBy: mandarin.filter((x) => x.zh !== m.char && x.zh.includes(m.char) && !have.has(x.zh)).slice(0, 3).map((x) => `${x.zh} ${x.py}`),
      // entries that hold the character already: the sentences spell it another way (男孩 for the entry 男孩儿)
      inEntries: composites.filter((x) => x.zh !== m.char && x.zh.includes(m.char)).slice(0, 3).map((x) => `${x.zh} ${x.py}`),
    })),
    examples: yardsticks.sentences?.examples ?? [],
  };

  return { ready: true, words: { items: wordItems, counts: tally(wordItems) }, mandarin: { items: mandarinItems }, sentences };
}

const FIX_NOTES = {
  link: 'the dictionary has a Mandarin word WordNet gives for it, not linked or glossed to it',
  add: 'a common Mandarin word would carry it',
  grammar: 'said by grammar (or WordNet has no sense for it)',
  rare: 'WordNet gives only Mandarin words outside the common list',
  none: 'WordNet has senses but no Mandarin word for them',
};

export function renderFrontier(r, { part, limit = 12 } = {}) {
  if (!r.ready) return 'The English index is not built (npm run wordnet), so there is no frontier to name.';
  const out = [];
  const want = (p) => !part || part === p;
  if (want('words')) {
    const c = r.words.counts;
    out.push(`English words in the common 3000 the dictionary cannot say: ${r.words.items.length} (${Object.entries(c).map(([k, n]) => `${n} ${k}`).join(', ')})`);
    for (const fix of ['link', 'add', 'grammar', 'rare', 'none']) {
      const items = r.words.items.filter((i) => i.fix === fix);
      if (!items.length) continue;
      out.push(`  ${fix}: ${FIX_NOTES[fix]}`);
      for (const i of items.slice(0, limit)) {
        const zh = i.zh.map((x) => `${x.zh}${x.py ? ` ${x.py}` : ''}${x.have ? ' (entry)' : x.rank ? ` (rank ${x.rank})` : ''}`).join(', ');
        out.push(`    ${i.en} (#${i.rank})${zh ? `: ${zh}` : ''}${i.author ? `; the author's Mandarin: ${i.author.join('/')}` : ''}${i.sense && (!zh || fix === 'link') ? `; sense ${i.sense}` : ''}`);
      }
      if (items.length > limit) out.push(`    … ${items.length - limit} more`);
    }
    out.push('');
  }
  if (want('mandarin')) {
    out.push(`Common Mandarin words with no entry (the ${r.mandarin.items.length} missing, most common first), with their English meaning:`);
    for (const i of r.mandarin.items.slice(0, limit)) {
      out.push(`    ${i.zh} ${i.py} (#${i.rank}): ${i.meaning.join('; ') || 'not in WordNet'}${i.saidBy.length ? `; the dictionary already says it: ${i.saidBy.join(', ')}` : ''}`);
    }
    out.push('');
  }
  if (want('sentences')) {
    const s = r.sentences;
    out.push(`Everyday sentences: ${s.said} of ${s.total} are covered character by character, ${s.oneAway} are one character away (grammar not checked; kb_parse checks one sentence). The characters that would unlock the most:`);
    for (const c of s.chars.slice(0, limit)) {
      out.push(`    ${c.char}: ${c.unlocks} sentences alone, ${c.sentences} in all${c.isWord.length ? `; a word exists (${c.isWord.join(', ')}) but no entry` : ''}${c.carriedBy.length ? `; common words that carry it: ${c.carriedBy.join(', ')}` : ''}${c.inEntries.length ? `; already inside the entries ${c.inEntries.join(', ')}` : ''}`);
    }
  }
  return out.join('\n').trimEnd();
}
