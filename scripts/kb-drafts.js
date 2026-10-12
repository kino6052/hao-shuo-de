// How the words that have no stored paraphrase yet would be said, from Claude's
// proposals (review/proposals/words-N.mjs) and the author's decisions
// (review/decisions/words-N.json). Read-only; the KB uses them only to draft
// replacements in the lists of words that could go.
//
//   loadDrafts(source) -> { id: { forms: ['plain pinyin', …], verdict: 'fine'|'clumsy' } }
//                         or { id: { atom: true } }  (proposed as an atom)

import { existsSync, readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const list = (v) => (Array.isArray(v) ? v : v ? String(v).split(' / ') : []);

export async function loadDrafts(source) {
  const dir = resolve(ROOT, 'review/proposals');
  const out = {};
  if (!existsSync(dir)) return out;
  for (const file of readdirSync(dir).filter((f) => /^words-\d+\.mjs$/.test(f))) {
    const n = file.match(/\d+/)[0];
    const proposals = (await import(pathToFileURL(resolve(dir, file)).href)).default ?? {};
    const decided = resolve(ROOT, 'review/decisions', `words-${n}.json`);
    const decisions = existsSync(decided) ? JSON.parse(readFileSync(decided, 'utf-8')).decisions ?? {} : {};
    for (const [id, p] of Object.entries(proposals)) {
      const w = source.words[id];
      if (!w || w.atom || w.paraphrase) continue; // already stored
      const d = decisions[id];
      if (d?.status === 'atom' || (!d && p.atom)) out[id] = { atom: true };
      else if (d?.status === 'edit' && d.forms) out[id] = { forms: list(d.forms), verdict: d.verdict ?? 'fine' };
      else if (p.forms?.length) out[id] = { forms: list(p.forms), verdict: d?.status === 'clumsy' ? 'clumsy' : p.verdict ?? 'fine' };
    }
  }
  return out;
}
