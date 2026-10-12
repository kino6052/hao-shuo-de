// "Does this sentence parse?" for the CLI, the explorer and the Claude tools
// (KB_PLAN.md phase 1, kb_parse). The parser itself is src/lib/grammar/; this
// takes what a person types, plain pinyin ("Wǒ shì rén.") or text with word
// refs, cuts it into sentences and parses each.
//
//   const parseText = makeParseText({ patterns, words, composites });
//   parseText("Wǒ shì rén. Nǐ ma?")
//     -> { text, refs, ok, sentences: [parse result of grammar/parser.js] }
//   renderParse(result, words) -> text
//   viewParse(result, words)   -> plain JSON for the explorer page and the Claude tool

import { createParser, outline, bracket, explainFailure } from '../grammar/parser.js';
import { pinyinToRefs } from '../pinyin-refs.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';

// "A b. C d?" -> ["A b.", "C d?"]; refs and quotes contain no sentence ends
export const splitSentences = (text) =>
  String(text)
    .trim()
    .split(/(?<=[.!?…])\s+/)
    .filter(Boolean);

export function makeParseText({ patterns, words, composites }) {
  const parser = createParser({ patterns, words, composites });
  const parseText = (text) => {
    let refs = String(text);
    if (!refs.includes('{{')) {
      try {
        refs = pinyinToRefs(refs, words);
      } catch (e) {
        return { text, refs: null, ok: false, error: String(e.message), sentences: [] };
      }
    }
    const sentences = splitSentences(refs).map((s) => parser.parse(s));
    return { text, refs, ok: sentences.length > 0 && sentences.every((s) => s.ok), sentences };
  };
  parseText.parser = parser;
  parseText.words = words;
  return parseText;
}

const pin = (words) => (t) => replaceWordRefs(t, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export function renderParse(result, words = {}) {
  if (result.error) return `Can't read it: ${result.error}`;
  const say = pin(words);
  const out = [];
  for (const s of result.sentences) {
    out.push(say(s.text));
    if (s.ok) {
      out.push(`  parses${s.treeCount > 1 ? ` in ${s.treeCount > 20 ? 'many' : s.treeCount} ways` : ''}; patterns: ${s.patterns.join(', ')}`);
      s.trees.slice(0, 3).forEach((_, k) => {
        out.push(`  ${bracket(s, k)}`);
        if (k === 0) out.push(...outline(s, 0).split('\n').map((l) => `    ${l}`));
      });
    } else {
      out.push(`  does not parse: ${explainFailure(s, words)}`);
      if (s.problems.length) out.push(`  ${s.problems.join('; ')}`);
      if (s.failure) out.push(`  pieces that do: ${s.failure.pieces.map((p) => `[${p.sym} ${p.text}]`).join(' ')}`);
    }
  }
  return out.join('\n');
}

// -> the result as plain data (no sets or trees), for JSON.
export function viewParse(result, words = {}) {
  if (result.error) return { ok: false, error: result.error, sentences: [] };
  const say = pin(words);
  return {
    ok: result.ok,
    sentences: result.sentences.map((s) => ({
      text: say(s.text),
      ok: s.ok,
      treeCount: s.treeCount,
      patterns: s.patterns,
      readings: s.trees.slice(0, 3).map((_, k) => ({ bracket: bracket(s, k), outline: outline(s, k) })),
      explain: s.ok ? null : explainFailure(s, words),
      problems: s.problems,
      pieces: (s.failure?.pieces ?? []).map((p) => ({ sym: p.sym, text: p.text })),
    })),
  };
}
