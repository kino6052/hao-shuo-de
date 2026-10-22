// What a translation is, from the session's answer to the stored file (TRANSLATOR_PLAN.md D3, D4). Pure: no data, no
// Claude. The session answers in ANSWER_SCHEMA (claude -p --json-schema checks the shape); the pipeline adds what only
// the tools can say (verify.js: the word references, hanzi, the checks, the gloss) and what the blind reader and the
// judge said, and the result is shown on the page, stored in Firestore and saved as review/translations/<slug>.md and .json.
//
//   ANSWER_SCHEMA, BLIND_SCHEMA, JUDGE_SCHEMA      the JSON shapes the three sessions answer in
//   answerProblems(answer) -> [string]             what is missing or wrong in an answer, beyond its shape
//   castProblems(answer, wordsOf) -> [string]      the cast list's rule (Q4): a long description once, the short name after
//   assemble({ request, answer, verified, blind, judge, model, timing }) -> result
//   scoreOf(result) -> { sentences, hsdOnly, parses, meant, readings, words, needed, kept, added, pass }
//   renderMarkdown(result) -> string               the file the author reviews
//   slugOf(text, date) -> '2026-10-22-i-forgot-my-umbrella'
//
// A result holds only plain values (no undefined), so Firestore takes it as it is.

export const RESULT_VERSION = 1;

// Q4 (Claude's pick): a description over this many words gets a sentence of its own first, then its short name.
export const CAST_LONG = 6;

const str = (description) => ({ type: 'string', description });
const list = (items, description) => ({ type: 'array', items, description });
const obj = (properties, required, description) => ({ type: 'object', properties, required, additionalProperties: false, description });

export const ANSWER_SCHEMA = obj(
  {
    sketch: list(
      obj(
        {
          id: str('i1, i2, ... in order'),
          idea: str('one simple idea in plain English'),
          needed: { type: 'boolean', description: 'true if the text loses its point without it; false for colour' },
          links: str('how it joins the others: because i1, but, then, if ... ("" when none)'),
        },
        ['id', 'idea', 'needed', 'links'],
      ),
      'step 1: the meaning sketch',
    ),
    sentences: list(
      obj(
        {
          pinyin: str('the Hao-shuo-de sentence in plain pinyin with tone marks, dictionary words only'),
          english: str('what the sentence says, in natural English'),
          literally: str('word for word, in English'),
          reading: str("the reading meant, as kb_parse's bracket string (\"\" if kb_check_reading was not asked)"),
          source: str('where it came from: the book sentence it adapts (kb_memory) or "built from the grammar"'),
          ideas: list(str('a sketch id'), 'the ideas this sentence carries'),
        },
        ['pinyin', 'english', 'literally', 'reading', 'source', 'ideas'],
      ),
      'step 5: the text, one sentence per item',
    ),
    cast: list(
      obj(
        {
          thing: str('what it is, in English'),
          description: str('the full Hao-shuo-de description, as written the first time'),
          short: str('the short name used after, e.g. zhè-ge dōng-xi ("" if it is named only once)'),
        },
        ['thing', 'description', 'short'],
      ),
      'things described in more than one word',
    ),
    structures: list(
      obj({ idea: str('a sketch id'), pattern: str('the grammar pattern id'), lesson: str('its lesson id ("" if none)') }, ['idea', 'pattern', 'lesson']),
      "step 4: the structures list (W15)",
    ),
    gaps: list(
      obj(
        { idea: str('the English word or idea'), description: str('the description used instead ("" if none was found)'), note: str('why it is a gap') },
        ['idea', 'description', 'note'],
      ),
      'ideas the dictionary has no short way to say (W9)',
    ),
    notes: str('anything the author should know ("" if nothing)'),
  },
  ['sketch', 'sentences', 'cast', 'structures', 'gaps', 'notes'],
);

export const BLIND_SCHEMA = obj(
  {
    sentences: list(obj({ english: str('what this sentence says') }, ['english']), 'one per Hao-shuo-de sentence, in order'),
    whole: str('what the whole text says, in a few plain English sentences'),
    unsure: str('anything you could not make out ("" if nothing)'),
  },
  ['sentences', 'whole', 'unsure'],
);

export const VERDICTS = ['kept', 'weaker', 'lost'];

export const JUDGE_SCHEMA = obj(
  {
    ideas: list(obj({ id: str('a sketch id'), verdict: { type: 'string', enum: VERDICTS }, note: str('why ("" when kept)') }, ['id', 'verdict', 'note']), 'every sketch idea, in order'),
    added: list(str('something the reader understood that the English does not say'), 'meanings added'),
  },
  ['ideas', 'added'],
);

const text = (v) => (typeof v === 'string' ? v.trim() : '');

// -> what is wrong with an answer beyond its shape: no sentences, a sentence with no pinyin, an idea id that is not in
// the sketch, a needed idea no sentence carries
export function answerProblems(answer) {
  if (!answer || typeof answer !== 'object') return ['the answer is not an object'];
  const out = [];
  const sketch = Array.isArray(answer.sketch) ? answer.sketch : [];
  const sentences = Array.isArray(answer.sentences) ? answer.sentences : [];
  if (!sentences.length) out.push('there are no sentences');
  const ids = new Set(sketch.map((s) => text(s?.id)));
  sentences.forEach((s, i) => {
    if (!text(s?.pinyin)) out.push(`sentence ${i + 1} has no pinyin`);
    for (const id of s?.ideas ?? []) if (!ids.has(text(id))) out.push(`sentence ${i + 1} names the idea "${id}", which is not in the sketch`);
  });
  const carried = new Set(sentences.flatMap((s) => (s?.ideas ?? []).map(text)));
  for (const s of sketch) if (s?.needed && !carried.has(text(s.id))) out.push(`the needed idea ${s.id} ("${s.idea}") is in no sentence`);
  return out;
}

// what two spellings of a phrase share: lowercase, no punctuation, one space between words
const plain = (s) => String(s ?? '').normalize('NFC').toLowerCase().replace(/[.,!?;:"“”…]/g, ' ').replace(/\s+/g, ' ').trim();

const timesIn = (haystack, needle) => {
  if (!needle) return 0;
  let n = 0;
  for (let at = haystack.indexOf(needle); at >= 0; at = haystack.indexOf(needle, at + needle.length)) n++;
  return n;
};

// The cast list's rule (Q4, D4). wordsOf(description) counts its dictionary words (verify.js passes one that parses it;
// the default counts the syllables between spaces and hyphens). Each problem names the thing.
export function castProblems(answer, wordsOf = (s) => plain(s).split(/[\s-]+/).filter(Boolean).length) {
  const sentences = (answer?.sentences ?? []).map((s) => plain(s?.pinyin));
  const whole = sentences.join(' ');
  const out = [];
  for (const c of answer?.cast ?? []) {
    const description = plain(c?.description);
    const short = plain(c?.short);
    if (!description) continue;
    const times = timesIn(whole, description);
    const n = wordsOf(c.description);
    if (!times) out.push(`${c.thing}: its description "${c.description}" is not in the text`);
    if (times > 1 && n > CAST_LONG) out.push(`${c.thing}: the ${n}-word description comes ${times} times; after the first, say "${c.short || 'zhè-ge …'}"`);
    if (times && short && short !== description) {
      const first = sentences.findIndex((s) => s.includes(description));
      const before = sentences.slice(0, first).findIndex((s) => timesIn(s, short) > 0);
      if (before >= 0) out.push(`${c.thing}: its short name "${c.short}" comes in sentence ${before + 1}, before the description (sentence ${first + 1})`);
    }
  }
  return out;
}

// Drops undefined (Firestore refuses it) and keeps everything else as it is.
const clean = (v) => JSON.parse(JSON.stringify(v ?? null));

// The result: the session's answer, each sentence with what the tools found (verified.sentences[i]), and the loss report
// from the judge (each sketch idea with its verdict; an idea the judge skipped is "unknown").
export function assemble({ request, answer, verified, blind = null, judge = null, model = null, timing = {} }) {
  const verdicts = new Map((judge?.ideas ?? []).map((v) => [text(v.id), v]));
  const sketch = (answer.sketch ?? []).map((s) => ({ ...s, verdict: verdicts.get(text(s.id))?.verdict ?? (judge ? 'unknown' : null), why: verdicts.get(text(s.id))?.note ?? '' }));
  const sentences = (answer.sentences ?? []).map((s, i) => ({ ...s, ...verified.sentences[i], blind: blind?.sentences?.[i]?.english ?? null }));
  return clean({
    version: RESULT_VERSION,
    text: request.text,
    lesson: verified.lesson ?? null,
    model,
    sentences,
    sketch,
    cast: answer.cast ?? [],
    castProblems: verified.castProblems ?? [],
    structures: answer.structures ?? [],
    gaps: answer.gaps ?? [],
    added: judge?.added ?? [],
    blind: blind ? { whole: blind.whole, unsure: blind.unsure } : null,
    notes: answer.notes ?? '',
    problems: verified.problems ?? [],
    timing,
  });
}

const share = (n, of) => (of ? Math.round((n / of) * 1000) / 1000 : 0);

// The numbers of one result (F2). meant counts a sentence whose meant reading the parser found; one with no reading
// given does not count. pass is Q8's bar for one text: every sentence Hao-shuo-de words only, parsing and with its
// reading; every needed idea kept, nothing added.
export function scoreOf(result) {
  const sentences = result.sentences ?? [];
  const n = sentences.length;
  const count = (fn) => sentences.filter(fn).length;
  const needed = (result.sketch ?? []).filter((s) => s.needed);
  const kept = needed.filter((s) => s.verdict === 'kept').length;
  const judged = (result.sketch ?? []).some((s) => s.verdict);
  const hsdOnly = count((s) => !(s.check?.unknown ?? []).length);
  const parses = count((s) => s.check?.parses);
  const meant = count((s) => s.check?.means === 'yes' || s.check?.means === 'yes-with-others');
  const totalReadings = sentences.reduce((sum, s) => sum + (s.check?.readings ?? 0), 0);
  const totalWords = sentences.reduce((sum, s) => sum + (s.check?.words ?? 0), 0);
  return {
    sentences: n,
    hsdOnly: share(hsdOnly, n),
    parses: share(parses, n),
    meant: share(meant, n),
    readings: n ? Math.round((totalReadings / n) * 10) / 10 : 0,
    words: n ? Math.round((totalWords / n) * 10) / 10 : 0,
    needed: needed.length,
    kept: judged ? share(kept, needed.length) : null,
    added: (result.added ?? []).length,
    pass: n > 0 && hsdOnly === n && parses === n && meant === n && judged && kept === needed.length && !(result.added ?? []).length,
  };
}

export function slugOf(english, date = new Date()) {
  const words = plain(english).replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 6).join('-');
  return `${date.toISOString().slice(0, 10)}-${words || 'text'}`;
}

const yesNo = (ok) => (ok ? 'yes' : 'no');

function sayCheck(c) {
  if (!c) return 'not checked';
  if ((c.unknown ?? []).length) return `not Hao-shuo-de words: ${c.unknown.join('; ')}`;
  const parts = [c.parses ? `parses (${c.readings} reading${c.readings === 1 ? '' : 's'})` : 'does not parse'];
  if (c.means === 'yes') parts.push('the meant reading is the only one');
  else if (c.means === 'yes-with-others') parts.push('the meant reading is one of them');
  else if (c.means === 'no') parts.push("the meant reading isn't one of them");
  else parts.push('no meant reading given');
  if (c.words) parts.push(`${c.words} words`);
  for (const w of c.late ?? []) parts.push(`late: ${w}`);
  for (const w of c.warnings ?? []) parts.push(w);
  return parts.join('; ');
}

// The file the author reviews (review/translations/<slug>.md): lists only, no tables, as the plan pages are.
export function renderMarkdown(result) {
  const s = scoreOf(result);
  const out = [`# ${plain(result.text).split(' ').slice(0, 8).join(' ')}`, ''];
  out.push(`- **English:** ${result.text.replace(/\s+/g, ' ').trim()}`);
  out.push(`- **Level:** ${result.lesson ? `lesson ${result.lesson.number} (${result.lesson.id})` : 'the whole dictionary'}`);
  if (result.model) out.push(`- **Model:** ${result.model}`);
  out.push(`- **Form:** Hao-shuo-de words only in ${Math.round(s.hsdOnly * s.sentences)} of ${s.sentences} sentences; ${Math.round(s.parses * s.sentences)} parse; the meant reading found in ${Math.round(s.meant * s.sentences)}`);
  out.push(`- **Meaning:** ${s.kept === null ? 'no blind reader' : `${Math.round(s.kept * s.needed)} of ${s.needed} needed ideas kept, ${s.added} added`}`);
  out.push(`- **Passes the bar (Q8):** ${yesNo(s.pass)}`);
  for (const p of result.problems ?? []) out.push(`- **Problem:** ${p}`);
  out.push('', '## The text', '', result.sentences.map((x) => x.pinyin).join(' '), '', result.sentences.map((x) => x.hanzi ?? '').join(' '), '');
  out.push('## Sentence by sentence', '');
  result.sentences.forEach((x, i) => {
    out.push(`${i + 1}. **${x.pinyin}**`);
    out.push(`   - Hanzi: ${x.hanzi ?? ''}`, `   - English: ${x.english}`, `   - Literally: ${x.literally}`);
    if (x.source) out.push(`   - Source: ${x.source}`);
    out.push(`   - Ideas: ${(x.ideas ?? []).join(', ') || 'none'}`, `   - Check: ${sayCheck(x.check)}`);
    if (x.gloss) out.push(`   - Gloss: ${x.gloss}`);
    if (x.blind) out.push(`   - The blind reader: ${x.blind}`);
  });
  out.push('', '## Sketch and loss report', '');
  for (const i of result.sketch) {
    const verdict = i.verdict ? ` -- **${i.verdict}**${i.why ? `: ${i.why}` : ''}` : '';
    out.push(`- ${i.id} (${i.needed ? 'needed' : 'colour'}) ${i.idea}${i.links ? ` [${i.links}]` : ''}${verdict}`);
  }
  for (const a of result.added ?? []) out.push(`- **added:** ${a}`);
  if (result.blind) out.push('', `The blind reader's whole reading: ${result.blind.whole}${result.blind.unsure ? ` (unsure: ${result.blind.unsure})` : ''}`);
  if (result.cast.length || result.castProblems.length) {
    out.push('', '## Cast list', '');
    for (const c of result.cast) out.push(`- ${c.thing}: ${c.description}${c.short ? `, then ${c.short}` : ''}`);
    for (const p of result.castProblems) out.push(`- **Problem:** ${p}`);
  }
  if (result.structures.length) {
    out.push('', '## Structures', '');
    for (const x of result.structures) out.push(`- ${x.idea}: ${x.pattern}${x.lesson ? ` (${x.lesson})` : ''}`);
  }
  if (result.gaps.length) {
    out.push('', '## Gaps', '');
    for (const g of result.gaps) out.push(`- ${g.idea}: ${g.description || 'no description found'}${g.note ? ` -- ${g.note}` : ''}`);
  }
  if (result.notes) out.push('', '## Notes', '', result.notes);
  return `${out.join('\n')}\n`;
}
