// kb_check_text (TRANSLATOR_PLAN.md B1): a text and an optional lesson, checked in one call -- what the writer
// otherwise does by hand (review/writing/moving-pilot.md): for each sentence, the words that aren't Hao-shuo-de
// words (with a suggestion when one is a composite's own pinyin), the words and patterns used that are taught
// after the lesson, whether it parses at that level and how many readings it has, the hanzi, and the structures
// it uses (W15's list), each flagged late when the lesson does not teach it yet. No lesson: the whole dictionary
// (Q2's default), nothing is "late".
//
//   askCheckText(kb, { text, lesson }) -> { data, text }

import { pinyinProblems } from '../pinyin-refs.js';
import { replaceWordRefs, refTerm, wordRefIds } from '../word-refs.js';
import { splitSentences } from './parse.js';
import { explainFailure } from '../grammar/parser.js';
import { lessonOf } from './lesson-lookup.js';

const sayProblem = (p) => (p.suggestion ? `${p.message} -- try ${p.suggestion.form} (${p.suggestion.zh})` : p.message);

function checkSentence(kb, raw, l) {
  const words = kb.source.words;
  let refs = raw;
  let unknown = [];
  if (!raw.includes('{{')) {
    const r = pinyinProblems(raw, words, { composites: kb.source.composites });
    refs = r.refs;
    unknown = r.problems;
  }
  const atLevel = unknown.length ? null : (l ? kb.parseUpTo(l.number) : kb.parse).parser.parse(refs, { maxTrees: 50 });
  const full = unknown.length ? null : kb.parse.parser.parse(refs, { maxTrees: 1 });
  const patternsById = new Map((kb.source.patterns ?? []).map((p) => [p.id, p]));
  const patterns = (full?.ok ? full.patterns : []).map((id) => {
    const n = kb.patternLesson(id);
    return { id, lesson: n ?? null, meaning: patternsById.get(id)?.meaning?.eng ?? '', late: !!l && (n === undefined || n > l.number) };
  });
  const usedWords = unknown.length ? [] : [...new Set(wordRefIds(refs))];
  const lateWords = l
    ? usedWords.map((id) => ({ id, term: words[id]?.term, lesson: kb.wordLesson(id) ?? null })).filter((w) => w.lesson === null || w.lesson > l.number)
    : [];
  return {
    text: replaceWordRefs(refs, (id, kind) => refTerm(words[id]?.term ?? id, kind)),
    hanzi: replaceWordRefs(refs, (id) => words[id]?.hanzi ?? id),
    unknown,
    lateWords,
    ok: unknown.length === 0 && !!atLevel?.ok,
    readingCount: atLevel?.treeCount ?? 0,
    patterns,
    explain: unknown.length === 0 && atLevel && !atLevel.ok ? explainFailure(atLevel, words) : null,
  };
}

export function askCheckText(kb, { text, lesson } = {}) {
  if (!text) throw new Error('text is required');
  const l = lesson !== undefined && lesson !== '' && lesson !== null ? lessonOf(kb.lessons(), lesson) : null;
  const sentences = splitSentences(text).map((raw) => checkSentence(kb, raw, l));
  const data = { lesson: l ? { id: l.id, number: l.number } : null, sentences, ok: sentences.length > 0 && sentences.every((s) => s.ok) };
  const out = [l ? `Checked at lesson ${l.number} (${l.id}); the whole dictionary's grammar still names a late structure, nothing else is filtered` : "Checked against the whole dictionary -- nothing is 'late'"];
  sentences.forEach((s, i) => {
    out.push('', `${i + 1}. ${s.text}`, `   ${s.hanzi}`);
    if (s.unknown.length) out.push(...s.unknown.map((p) => `   not a word: ${sayProblem(p)}`));
    if (s.lateWords.length) out.push(`   taught later: ${s.lateWords.map((w) => `${w.term} (lesson ${w.lesson ?? 'none'})`).join(', ')}`);
    if (!s.unknown.length) out.push(s.ok ? `   parses at this level, ${s.readingCount} reading(s)` : `   does not parse at this level: ${s.explain}`);
    if (s.patterns.length) out.push(`   structures: ${s.patterns.map((p) => `${p.id}${p.late ? ` [${p.lesson === null ? 'no lesson teaches it' : `lesson ${p.lesson}, too late`}]` : ''}`).join(', ')}`);
  });
  return { data, text: out.join('\n') };
}
