// The composite dictionary against the grammar (KB_PLAN.md phase 4, K7): every description of a composite
// (src/data/composites) is a piece of Hao-shuo-de, so the patterns should read it. Pure; never changes data.
//
//   formReport({ composites, parse, builderReads, words }) -> { total, counts, byPos, builder, forms }
//     parse(form)          the parse of one description (parser.parse(form, { maxTrees: 1, forms: true }))
//     builderReads(form)   true when the Word Builder can read it (src/lib/word-builder-parse.js)
//     forms                [{ zh, en, pos, fit, form, kind, ok?, why?, builder }], one per description
//       kind               'word'   one word or a hyphen chain (zhēn, zhòng-yào): a word standing for the word, not a phrase
//                          'phrase' more than one piece; ok tells whether the patterns read it, why says where they stop
//     counts               { word, parses, fails }
//     builder              the phrases by who reads them: { both, grammarOnly, builderOnly, neither }; builderOnly is a gap
//                          in the patterns, grammarOnly a form the Word Builder cannot build yet
//   renderFormReport(report, words, { limit, pos }) -> text
//   formText(form, words) -> the description as a person reads it

import { explainFailure } from '../grammar/parser.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';

// a description of one word or one hyphen chain of words: no space, comma, slot or ellipsis once the refs are taken out
export const isWordForm = (form) => !/[\s,…A-CX-Z"]/.test(String(form).replace(/\{\{[^}]*\}\}/g, 'w'));

export const formText = (form, words = {}) => replaceWordRefs(form, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export function formReport({ composites, parse, builderReads = () => false, words = {} }) {
  const forms = [];
  for (const c of composites) {
    if (c.fit === 'word' || !c.hsd) continue;
    for (const form of c.hsd.split(' / ')) {
      const row = { zh: c.zh, en: c.en, pos: c.pos, fit: c.fit, form, builder: Boolean(builderReads(form)) };
      if (isWordForm(form)) {
        row.kind = 'word';
      } else {
        const r = parse(form);
        row.kind = 'phrase';
        row.ok = r.ok;
        // where it stops, without the list of what could come next
        if (!r.ok) row.why = r.problems.length ? r.problems[0] : explainFailure(r, words).split('; a pattern could continue')[0];
      }
      forms.push(row);
    }
  }
  const counts = { word: 0, parses: 0, fails: 0 };
  const byPos = {};
  const builder = { both: 0, grammarOnly: 0, builderOnly: 0, neither: 0 };
  for (const f of forms) {
    const p = (byPos[f.pos] ??= { forms: 0, word: 0, parses: 0, fails: 0 });
    p.forms++;
    if (f.kind === 'word') {
      counts.word++;
      p.word++;
      continue;
    }
    if (f.ok) {
      counts.parses++;
      p.parses++;
    } else {
      counts.fails++;
      p.fails++;
    }
    builder[f.ok ? (f.builder ? 'both' : 'grammarOnly') : f.builder ? 'builderOnly' : 'neither']++;
  }
  return { total: forms.length, counts, byPos, builder, forms };
}

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

export function renderFormReport(report, words = {}, { limit = 20, pos = null } = {}) {
  const c = report.counts;
  const phrases = c.parses + c.fails;
  const out = [`Composite descriptions against the grammar: ${plural(report.total, 'description')}. ${c.word} are one word or a chain of words (a word standing for the word, not read as a phrase); ${phrases} are phrases: ${c.parses} parse, ${c.fails} do not.`];
  out.push('', 'By part of speech (phrases that parse / phrases that do not)');
  for (const [p, n] of Object.entries(report.byPos).sort((a, b) => b[1].forms - a[1].forms)) {
    out.push(`  ${p}: ${n.parses} / ${n.fails}${n.word ? `  (+${n.word} one-word)` : ''}`);
  }
  const b = report.builder;
  out.push('', 'The Word Builder (src/lib/word-builder-parse.js) against the patterns, over the phrases', `  both read it: ${b.both}; only the patterns: ${b.grammarOnly} (the Word Builder cannot build these yet); only the Word Builder: ${b.builderOnly} (a gap in the patterns); neither: ${b.neither}.`);
  const only = report.forms.filter((f) => f.kind === 'phrase' && !f.ok && f.builder);
  for (const f of only.slice(0, limit)) out.push(`    ${f.zh}  ${formText(f.form, words)}`);
  const fails = report.forms.filter((f) => f.kind === 'phrase' && !f.ok && (!pos || f.pos === pos));
  if (fails.length) {
    out.push('', `Descriptions that do not parse${pos ? ` (${pos})` : ''}: ${fails.length}`);
    for (const f of fails.slice(0, limit)) out.push(`  ${f.pos.slice(0, 4)} ${f.zh}  ${formText(f.form, words)}  -- ${f.why}`);
    if (fails.length > limit) out.push(`  … and ${fails.length - limit} more (--limit N, --pos noun)`);
  }
  return out.join('\n');
}
