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
export function priorFromHint(kb, hint) {
  const pool = kb.pool();
  const text = String(hint ?? '').trim();
  const zhs = new Set();
  if (text) {
    const asks = new Set([text, ...text.toLowerCase().split(/[^a-z']+/).filter((t) => t.length >= 2 && !STOP.has(t))]);
    for (const q of asks) {
      const r = kb.english(q);
      for (const e of [...r.glosses, ...r.sameSense.flatMap((s) => s.entries)]) zhs.add(e.zh);
    }
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

export function askAkinator(kb, { answers = [], start, hint, finish = false, limit = 6 } = {}) {
  const list = parseAnswers(answers);
  if (start) {
    const word = String(start).trim().toLowerCase();
    const feature = word === 'situation' || word === 'sentence' ? 'type:sentence' : `kind:${word}`;
    list.unshift({ feature, answer: 'yes' });
  }
  const { prior, matched } = priorFromHint(kb, hint);
  const ak = kb.akinator({ prior });
  const step = ak.step(list, { finish, limit: Number(limit) || 6 });
  const lessons = (kb.source.lessons ?? []).map(({ id, number }) => ({ id, number }));
  const extra = hint ? (matched.length ? `The hint "${hint}" starts with: ${matched.slice(0, 8).join(' ')}` : `The hint "${hint}" matched nothing; no head start.`) : '';
  // the same label the text shows, for a page that draws the items itself
  const labelled = (list) => (list ?? []).map((it) => ({ ...it, label: lessonLabel(lessons, it) }));
  const data = { ...step, hintMatched: matched };
  if (data.leaders) data.leaders = labelled(data.leaders);
  if (data.result) data.result = { ...data.result, ...Object.fromEntries(['sentences', 'patterns', 'words', 'composites', 'closest'].map((k) => [k, labelled(data.result[k])])) };
  return { data, text: render(step, lessons, STRINGS.en, extra) };
}
