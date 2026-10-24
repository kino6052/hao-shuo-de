#!/usr/bin/env node
// The browser translator's steps 0 to 5 from the command line (BROWSER_TRANSLATOR_PLAN.md B4, Q1 c), through headless
// Claude sessions (scripts/tree-setup.js).
//
//   node scripts/tree-translate.js "I eat rice."     the corrected English, then for each sentence the Hao-shuo-de,
//                                                    its readback and the tries it took (or why it went to the fallback)
//   node scripts/tree-translate.js --json "..."      the whole result as JSON
//   --any-reading     accept a tree that is a later reading of the built sentence (Q7 turns that off by default)
//   --model M (default sonnet) --effort E --claude PATH
//
// Exit 1 when the text is refused, a question is asked, or a sentence needs the full translator.

import { parseArgs } from 'node:util';
import { openTreeTranslator, loginMessage } from './tree-setup.js';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { json: { type: 'boolean' }, 'any-reading': { type: 'boolean' }, model: { type: 'string', default: 'sonnet' }, effort: { type: 'string' }, claude: { type: 'string' } },
});
const english = positionals.join(' ').trim();
if (!english) {
  console.error('Usage: node scripts/tree-translate.js [--json] [--any-reading] "English text"');
  process.exit(2);
}

const setup = await openTreeTranslator({ model: values.model, effort: values.effort, claude: values.claude, firstReading: !values['any-reading'] });
let result;
try {
  result = await setup.translator((s) => process.stderr.write(`  ${s}\n`)).run(english);
} catch (e) {
  console.error(e.login ? loginMessage(setup.token) : (e.userMessage ?? e.stack ?? String(e)));
  process.exit(1);
}

if (values.json) console.log(JSON.stringify(result, null, 2));
else {
  const { correction } = result;
  console.log(`English: ${correction.sentences.join(' ') || '(none)'}`);
  for (const c of correction.changes ?? []) console.log(`  changed "${c.from}" -> "${c.to}" (${c.why})`);
  if (result.status === 'refused') console.log(`Refused: ${correction.reason}`);
  for (const q of result.status === 'ask' ? correction.questions : []) console.log(`Question: ${q.about}${q.options.length ? ` [${q.options.join(' / ')}]` : ''}`);
  for (const r of result.results) {
    if (r.ok) console.log(`\n${r.sentence}\n  ${r.refs}\n  reads back: ${r.readback}\n  ${r.tries} ${r.tries === 1 ? 'try' : 'tries'}; reading ${r.at + 1} of ${r.readings}${r.messages.map((m) => `\n  - ${m}`).join('')}`);
    else console.log(`\n${r.sentence}\n  needs the full translator after ${r.tries} tries:\n${r.messages.map((m) => `  - ${m}`).join('\n')}`);
  }
  console.log(`\n$${setup.cost()}`);
}
process.exit(result.status === 'ok' ? 0 : 1);
