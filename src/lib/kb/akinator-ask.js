// One Akinator question as the command line and the Claude tool both ask it (AKINATOR_PLAN.md C1, C2): the answers so far in,
// the next question or the result out, as { data, text }. Nothing is kept between calls (B6): to take an answer back, leave it
// out of the list.
//
//   askAkinator(kb, { answers, start, hint, finish, limit }) -> { data, text }
//     answers   ["kind:doing=yes", "theme:compare=probably-not", ...] or [{ feature, answer }]; the order they were given
//     start     the first question's choice as a word instead of a feature: "doing", "when", "situation" ...
//     hint      an optional English hint ("I am hungrier than you"): sets the starting weights (Q3)
//     finish    true: show what fits now
//     limit     how many items to show per group in the result (default 6)
//   askData({ pool, makeEngine, zhsFor, lessons }, the same options) -> { data, step }   the same, without a knowledge base: the
//                         core of askAkinator, and what the book page asks in the browser (akinator-browser.js)

import { normalizeAnswer } from './akinator.js';
import { plainAnswer, STRINGS } from './akinator-questions.js';

const STOP = new Set(['am', 'is', 'to', 'by', 'in', 'of', 'on', 'at', 'it', 'my', 'we', 'me', 'he', 'be', 'an', 'as', 'so', 'if', 'or', 'up', 'us', 'i', 'a','the', 'and', 'for', 'are', 'was', 'you', 'your', 'with', 'that', 'this', 'than', 'have', 'has', 'not', 'but', 'how', 'what', 'who', 'when', 'where', 'why', 'from', 'into', 'they', 'them', 'its', 'our']);
// words with no meaning of their own in a pattern's English; "than" stays out of STOP's English lookup but is a good pattern clue
const EMPTY = new Set(['the', 'and', 'for', 'are', 'was', 'you', 'your', 'with', 'that', 'this', 'have', 'has', 'not', 'but', 'how', 'what', 'who', 'when', 'where', 'why', 'from', 'into', 'they', 'them', 'its', 'our', 'one', 'can', 'goes', 'say', 'says', 'then']);
// the hint's weight is below 1/0.05, so an item the author answered "no" to still sinks under the unhinted ones
const BOOST = 10;

// "kind:doing=yes" -> { feature: "kind:doing", answer: "yes" }
export function parseAnswers(list) {
  return [].concat(list ?? []).flatMap((a) => {
    if (a && typeof a === 'object') return [{ feature: String(a.feature), answer: normalizeAnswer(a.answer) }];
    return String(a).split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean).map((s) => {
      const at = s.lastIndexOf('=');
      if (at < 0) throw new Error(`"${s}" is not an answer: write feature=answer, like kind:doing=yes`);
      return { feature: s.slice(0, at).trim(), answer: normalizeAnswer(s.slice(at + 1)) };
    });
  });
}

// -> Map(item id -> weight) for the items an English hint leads to: the composites and core words that say it, and the
// sentences that use those words. The caller keeps the Map out of anything saved (B6).
// everyday words said two ways in English; a hint tries both ("father" finds bàba, whose definition says "dad")
const SAME = [['father', 'dad', 'daddy'], ['mother', 'mom', 'mum', 'mommy'], ['child', 'kid'], ['car', 'automobile'], ['big', 'large'], ['small', 'little'], ['house', 'home'], ['buy', 'purchase'], ['begin', 'start'], ['end', 'finish'], ['talk', 'speak'], ['look', 'watch'], ['fast', 'quick'], ['money', 'cash']];
const withSame = (text) => {
  const tokens = String(text).toLowerCase().split(/[^a-z']+/).filter(Boolean);
  const extra = SAME.filter((g) => g.some((w) => tokens.includes(w))).flatMap((g) => g.filter((w) => !tokens.includes(w)));
  return extra.length ? `${text} ${extra.join(' ')}` : String(text);
};

// The glosses of the words and composites in the pool, for a page with no knowledge base behind it: an English phrase or word ->
// the hanzi whose English says it. "nose, snout" says nose and snout; a leading "to", "a" or "the" and a note in brackets do not count.
export function glossLookup(pool) {
  const byGloss = new Map();
  for (const it of pool.items) {
    if (it.type !== 'word' && it.type !== 'composite') continue;
    for (const part of String(it.text.en ?? '').split(/[,;]/)) {
      const gloss = part.replace(/\([^)]*\)/g, '').trim().toLowerCase().replace(/^(to|a|an|the)\s+/, '');
      if (!gloss) continue;
      const list = byGloss.get(gloss) ?? byGloss.set(gloss, []).get(gloss);
      if (!list.includes(it.text.zh)) list.push(it.text.zh);
    }
  }
  return (q) => byGloss.get(String(q).trim().toLowerCase()) ?? [];
}

// the knowledge base's English lookup as a zhsFor: the hanzi of the entries that say the English word or phrase q
const kbZhsFor = (kb) => (q) => {
  const r = kb.english(q);
  return [...r.glosses, ...r.sameSense.flatMap((s) => s.entries)].map((e) => e.zh);
};

export const priorFromHint = (kb, hint) => hintPrior(kb.pool(), kbZhsFor(kb), hint);

// zhsFor(q) -> the hanzi of the words and composites that say the English word or phrase q (kbZhsFor, or glossLookup)
export function hintPrior(pool, zhsFor, hint) {
  const text = withSame(String(hint ?? '').trim());
  const zhs = new Set();
  if (text) {
    const asks = new Set([text, ...text.toLowerCase().split(/[^a-z']+/).filter((t) => t.length >= 2 && !STOP.has(t))]);
    for (const q of asks) for (const zh of zhsFor(q)) zhs.add(zh);
  }
  const prior = new Map();
  const matched = [];
  // a pattern is found by a rare word of its English meaning ("than" -> bǐ): a word that is in at most three meanings
  const lower = text.toLowerCase();
  const wordsOf = (s) => new Set(String(s ?? '').toLowerCase().split(/[^a-z']+/).filter((t) => t.length >= 3 && !EMPTY.has(t)));
  const patternWords = pool.items.filter((i) => i.type === 'pattern').map((p) => ({ p, words: wordsOf(String(p.text.en ?? '').split(':')[0]) })); // the meaning, not the example after the colon
  const spread = new Map();
  for (const { words } of patternWords) for (const w of words) spread.set(w, (spread.get(w) ?? 0) + 1);
  const asked = wordsOf(lower);
  // a core word is also found by a rare word of its English definition ("food" -> 吃, "meal, food")
  const wordDefs = pool.items.filter((i) => i.type === 'word').map((w) => ({ w, words: wordsOf(w.text.en) }));
  const defSpread = new Map();
  for (const { words } of wordDefs) for (const t of words) defSpread.set(t, (defSpread.get(t) ?? 0) + 1);
  for (const { w, words } of wordDefs) {
    if (![...asked].some((t) => words.has(t) && defSpread.get(t) <= 5)) continue;
    matched.push(w.text.zh);
    for (const s of pool.members([`word:${w.words[0]}`])) if (!prior.has(s.id)) prior.set(s.id, BOOST);
  }
  for (const { p, words } of patternWords) {
    const hit = [...asked].filter((w) => words.has(w) && spread.get(w) <= 3);
    if (!hit.length) continue;
    matched.push(p.id.slice('pattern:'.length));
    for (const s of pool.members([p.id])) if (!prior.has(s.id)) prior.set(s.id, BOOST);
  }
  for (const it of pool.items) {
    if (it.type === 'composite' && zhs.has(it.text.zh)) {
      prior.set(it.id, BOOST);
      matched.push(it.text.zh);
    }
  }
  // the example sentences written for a found composite
  for (const it of pool.items) if (it.about && zhs.has(it.about) && !prior.has(it.id)) prior.set(it.id, BOOST);
  for (const it of pool.items) {
    if (it.type === 'word' && zhs.has(it.text.zh)) {
      matched.push(it.text.zh);
      for (const s of pool.members([`word:${it.words[0]}`])) prior.set(s.id, BOOST);
    }
  }
  return { prior: prior.size ? prior : null, matched: [...new Set(matched)] };
}

const lessonLabel = (lessons, it) => {
  if (it.lesson) return `lesson ${it.lesson}`;
  if (it.number !== null && it.number !== undefined) return `by lesson ${lessons.find((l) => l.number === it.number)?.id ?? it.number}`;
  return 'outside the lessons';
};
const say = (it) => [it.text.zh, it.text.py, it.text.en && `(${it.text.en})`].filter(Boolean).join(' ');

function line(lessons, it) {
  const note = it.disagrees.length ? `  — not: ${it.disagrees.join(', ')}` : '';
  return `  ${say(it)}  [${lessonLabel(lessons, it)}]${it.fit < 1 ? `  fit ${it.fit}` : ''}${note}`;
}

function render(step, lessons, strings, extra = '') {
  const out = [];
  if (step.stage === 'first') {
    out.push(strings.firstQuestion, ...step.question.choices.map((c, i) => `  ${i + 1}. ${c.label}   (${c.feature}=yes)`));
    out.push('', 'Answer with one of these, as `feature=yes`, or start with `start: <word>` (doing, when, where, situation ...).');
  } else if (step.stage === 'question') {
    const q = step.question;
    out.push(`Question ${step.asked + 1} (${Math.round(step.effective)} items still count): ${q.text}`);
    if (q.hint) out.push(`  (${q.hint})`);
    out.push(`  Answer: ${Object.values(strings.answers).join(', ')}.  Pass it as ${q.feature}=yes, =probably, =unknown, =probably-not or =no`);
    out.push('Leading now:', ...step.leaders.map((it) => line(lessons, it)));
  } else {
    const r = step.result;
    out.push(r.verdict.gap ? `Nothing fits well yet (best fit ${r.verdict.fit}). The closest:` : `What fits (after ${step.asked} answer${step.asked === 1 ? '' : 's'}; best fit ${r.verdict.fit}):`);
    if (r.verdict.gap) {
      out.push(...r.closest.map((it) => line(lessons, it)));
      if (r.missing.length) out.push('No close item agrees with:', ...r.missing.map((m) => `  ${plainAnswer(m.answer, strings)}: ${m.text}`));
    } else {
      for (const [title, key] of [['Example sentences', 'sentences'], ['Patterns', 'patterns'], ['Words', 'words'], ['Composites', 'composites']]) {
        if (r[key].length) out.push('', `${title}:`, ...r[key].map((it) => line(lessons, it)));
      }
    }
  }
  if (extra) out.push('', extra);
  return out.join('\n');
}

// a start word is a plain name: "situation", a kind (doing), a topic (food, kitchen), a theme (compare) or part of one of their names
export function startFeature(pool, start) {
  const word = String(start).trim().toLowerCase().replace(/\s+/g, '-');
  if (word === 'situation' || word === 'sentence') return 'type:sentence';
  for (const family of ['kind', 'topic', 'theme', 'cat']) if (pool.byFeature.has(`${family}:${word}`)) return `${family}:${word}`;
  const partial = [...pool.byFeature.keys()].filter((f) => /^(kind|topic):/.test(f) && f.slice(f.indexOf(':') + 1).includes(word)).sort((a, b) => a.length - b.length || (a < b ? -1 : 1));
  if (partial.length) return partial[0];
  throw new Error(`no start "${start}": say situation, a kind such as doing, a topic such as food or kitchen, or a theme such as compare`);
}

// One question with no knowledge base behind it: everything comes in as arguments, so a page can ask in the browser (D2).
//   pool        the Akinator's pool (akinator-pool.js, or importPool of the exported file)
//   makeEngine  (prior) -> createAkinator(pool, { describe, first, prior })
//   zhsFor      English word or phrase -> hanzi (kb.english, or glossLookup(pool))
//   lessons     [{ id, number }] in teaching order
// -> { data, step }: data is the step with a label on every item, the hint's matches and, on the first screen, what the hint found
export function askData({ pool, makeEngine, zhsFor, lessons }, { answers = [], start, hint, finish = false, limit = 6 } = {}) {
  const list = parseAnswers(answers);
  if (start) list.unshift({ feature: startFeature(pool, start), answer: 'yes' });
  const { prior, matched } = hintPrior(pool, zhsFor, hint);
  const ak = makeEngine(prior);
  const step = ak.step(list, { finish, limit: Number(limit) || 6 });
  // the same label the text shows, for a page that draws the items itself
  const labelled = (list) => (list ?? []).map((it) => ({ ...it, label: lessonLabel(lessons, it) }));
  const data = { ...step, hintMatched: matched };
  // the first screen with a hint already shows what the hint found, so a plain word ("food") needs no question at all
  let found = null;
  if (step.stage === 'first' && prior) {
    const r = ak.step([], { finish: true, limit: Number(limit) || 6 }).result;
    found = Object.fromEntries(['sentences', 'patterns', 'words', 'composites'].map((k) => [k, labelled(r[k])]));
    if (Object.values(found).every((g) => !g.length)) found = null;
  }
  if (found) data.found = found;
  if (data.leaders) data.leaders = labelled(data.leaders);
  if (data.result) data.result = { ...data.result, ...Object.fromEntries(['sentences', 'patterns', 'words', 'composites', 'closest'].map((k) => [k, labelled(data.result[k])])) };
  return { data, step };
}

export function askAkinator(kb, { answers = [], start, hint, finish = false, limit = 6 } = {}) {
  const lessons = (kb.source.lessons ?? []).map(({ id, number }) => ({ id, number }));
  const { data, step } = askData({ pool: kb.pool(), makeEngine: (prior) => kb.akinator({ prior }), zhsFor: kbZhsFor(kb), lessons }, { answers, start, hint, finish, limit });
  const matched = data.hintMatched;
  const found = data.found ?? null;
  const extra = hint ? (matched.length ? `The hint "${hint}" starts with: ${matched.slice(0, 8).join(' ')}` : `The hint "${hint}" matched nothing; no head start.`) : '';
  let foundText = '';
  if (found) {
    const lines = [];
    for (const [title, key] of [['Example sentences', 'sentences'], ['Patterns', 'patterns'], ['Words', 'words'], ['Composites', 'composites']]) {
      if (found[key].length) lines.push('', `${title}:`, ...found[key].map((it) => line(lessons, { ...it, disagrees: it.disagrees ?? [] })));
    }
    foundText = ['Found from the hint alone (answer the questions to narrow it down):', ...lines].join('\n');
  }
  return { data, text: render(step, lessons, STRINGS.en, [foundText, extra].filter(Boolean).join('\n\n')) };
}
