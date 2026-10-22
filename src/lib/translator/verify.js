// What the tools say about a session's answer (TRANSLATOR_PLAN.md steps 6 and 7), run by the pipeline after the session,
// not by Claude: the person sees these checks, not Claude's word for them. For each sentence: the words that are not
// Hao-shuo-de words, whether it parses at the level and in how many readings, whether the reading meant is among them,
// the words taught after the lesson, the readability warnings, the hanzi and the word-by-word gloss. Then the cast list's
// rule (D4) and what is wrong with the answer itself.
//
//   levelOf(kb, lesson) -> { lesson: { id, number } | null } or throws a plain-language Error (userMessage)
//   verifyAnswer(kb, answer, { lesson }) -> { lesson, sentences: [{ refs, hanzi, gloss, check }], castProblems, problems, ok }
//
// check = { unknown: [string], parses, readings, means: 'yes' | 'yes-with-others' | 'no' | null, words, depth, late:
// [string], warnings: [string] }. means is null when the answer gives no reading. ok: every sentence Hao-shuo-de words
// only, parsing, with its reading found when one is given, and no cast or answer problem.

import { pinyinProblems } from '../pinyin-refs.js';
import { wordRefIds } from '../word-refs.js';
import { askCheckText } from '../kb/check-text.js';
import { askReading } from '../kb/check-reading.js';
import { askGloss } from '../kb/gloss.js';
import { lessonOf } from '../kb/lesson-lookup.js';
import { answerProblems, castProblems } from './output.js';

const given = (v) => v !== undefined && v !== null && String(v).trim() !== '';

// The lesson a request names (a number or an id), or none. A lesson that does not exist is the person's mistake, so it
// fails with a sentence for them.
export function levelOf(kb, lesson) {
  if (!given(lesson)) return { lesson: null };
  const want = String(lesson).trim().replace(/^lesson\s+/i, '');
  try {
    const l = lessonOf(kb.lessons(), want);
    return { lesson: { id: l.id, number: l.number } };
  } catch {
    const e = new Error(`no lesson "${lesson}"`);
    e.userMessage = `There is no lesson "${String(lesson).slice(0, 40)}". Give a lesson number from 1 to ${kb.lessons().length}, or leave it empty for the whole dictionary.`;
    throw e;
  }
}

const sayUnknown = (p) => (p.suggestion ? `${p.message} (try ${p.suggestion.form})` : p.message);

function checkOne(kb, s, lesson) {
  const pinyin = String(s?.pinyin ?? '').trim();
  const checked = askCheckText(kb, { text: pinyin, lesson: lesson?.id }).data.sentences;
  const gloss = askGloss(kb, { text: pinyin }).data.sentences.map((g) => g.gloss).join(' ');
  const unknown = checked.flatMap((c) => c.unknown.map(sayUnknown));
  const parses = checked.length > 0 && checked.every((c) => c.ok);
  let means = null;
  // the reading is checked on one sentence only: an item that holds two has no single bracket string
  if (!unknown.length && given(s?.reading)) {
    if (checked.length !== 1) means = 'no';
    else means = askReading(kb, { text: pinyin, reading: s.reading, lesson: lesson?.id }).data.means ?? 'no';
  }
  const late = checked.flatMap((c) => [
    ...c.lateWords.map((w) => `${w.term} (lesson ${w.lesson ?? 'none'})`),
    ...c.patterns.filter((p) => p.late).map((p) => `the pattern ${p.id} (lesson ${p.lesson ?? 'none'})`),
  ]);
  const readability = checked.map((c) => c.readability).filter(Boolean);
  // the sentence as the book stores it, with word references (Q5); none while a word is not Hao-shuo-de
  const refs = unknown.length ? '' : pinyinProblems(pinyin, kb.source.words, { composites: kb.source.composites }).refs;
  return {
    refs,
    hanzi: checked.map((c) => c.hanzi).join(' '),
    gloss,
    check: {
      unknown,
      parses,
      readings: checked.reduce((sum, c) => sum + (c.readingCount ?? 0), 0),
      means,
      words: readability.reduce((sum, r) => sum + r.words, 0),
      depth: readability.length ? Math.max(...readability.map((r) => r.depth ?? 0)) : null,
      late,
      warnings: readability.flatMap((r) => r.warnings),
    },
  };
}

export function verifyAnswer(kb, answer, { lesson = null } = {}) {
  const words = kb.source.words;
  const wordsOf = (pinyin) => wordRefIds(pinyinProblems(String(pinyin), words, { composites: kb.source.composites }).refs).length;
  const sentences = (answer?.sentences ?? []).map((s) => checkOne(kb, s, lesson));
  const cast = castProblems(answer, wordsOf);
  const problems = [...answerProblems(answer)];
  sentences.forEach(({ check }, i) => {
    const n = i + 1;
    if (check.unknown.length) problems.push(`sentence ${n} uses what is not a Hao-shuo-de word: ${check.unknown.join('; ')}`);
    else if (!check.parses) problems.push(`sentence ${n} does not parse${lesson ? ` at lesson ${lesson.number}` : ''}`);
    else if (check.means === 'no') problems.push(`sentence ${n} cannot mean the reading given`);
    for (const l of check.late) problems.push(`sentence ${n} uses ${l}, taught after lesson ${lesson?.number}`);
  });
  return { lesson, sentences, castProblems: cast, problems, ok: problems.length === 0 && cast.length === 0 };
}
