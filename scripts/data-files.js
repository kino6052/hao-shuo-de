// Writing the data files back: the scripts that change data (the word CLI,
// composites-builder-forms, refactor lists) write one small TS file per word
// or composite through these helpers, in the same layout the files are
// written in by hand, so a change shows up as a small diff.

import { writeFileSync, unlinkSync, existsSync } from 'fs';
import { resolve } from 'path';
import { DATA_DIR } from './build-data.js';

// -> a value as a TS literal: identifier keys unquoted, 2-space indent,
// short objects and arrays kept on one line.
export function tsLiteral(v, ind = '') {
  const key = (k) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k));
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    const one = '[' + v.map((x) => tsLiteral(x, ind)).join(', ') + ']';
    if (one.length + ind.length < 100 && !one.includes('\n')) return one;
    return '[\n' + v.map((x) => `${ind}  ${tsLiteral(x, ind + '  ')},`).join('\n') + `\n${ind}]`;
  }
  if (v && typeof v === 'object') {
    const ks = Object.keys(v).filter((k) => v[k] !== undefined);
    if (!ks.length) return '{}';
    const one = '{ ' + ks.map((k) => `${key(k)}: ${tsLiteral(v[k], ind)}`).join(', ') + ' }';
    if (one.length + ind.length < 100 && !one.includes('\n')) return one;
    return '{\n' + ks.map((k) => `${ind}  ${key(k)}: ${tsLiteral(v[k], ind + '  ')},`).join('\n') + `\n${ind}}`;
  }
  return JSON.stringify(v);
}

// -- words -------------------------------------------------------------------

export const wordPath = (id) => resolve(DATA_DIR, 'words', `${id}.ts`);

// data: { term, hanzi, pos, definition, necessity, maps?, senses? }
export function writeWord(id, data) {
  const { term, hanzi, pos, definition, necessity, maps, senses } = data;
  const body = tsLiteral({ term, hanzi, pos, definition, necessity, maps, senses });
  writeFileSync(wordPath(id), `import { word } from "../../lib/word.ts";\n\nexport default word(${JSON.stringify(id)}, ${body});\n`);
}

export function deleteWord(id) {
  if (existsSync(wordPath(id))) unlinkSync(wordPath(id));
}

// -- composites ----------------------------------------------------------------

const slug = (py) =>
  py.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ü/g, 'v').toLowerCase().replace(/[^a-z0-9]/g, '');

// -> the file an entry lives in: <toneless pinyin>-<hanzi>.ts
export const compositeFileName = (entry) => `${slug(entry.py)}-${entry.zh}.ts`;
export const compositePath = (entry) => resolve(DATA_DIR, 'composites', compositeFileName(entry));

// Writes an entry given in the assembled shape (src/data/composites.ts:
// forms and hanzi as " / "-joined strings) back to its own file.
export function writeComposite(entry) {
  const c = { ...entry };
  if (typeof c.hsd === 'string') c.hsd = c.hsd.split(' / ');
  if (typeof c.tts === 'string') c.tts = c.tts.split(' / ');
  writeFileSync(compositePath(entry), compositeSource(c));
}

// A composite file's text, its keys in the usual order (undefined ones left out).
export function compositeSource(c) {
  const order = ['rank', 'phase', 'zh', 'py', 'en', 'ru', 'pos', 'head', 'hsd', 'tts', 'literal', 'fit', 'transparent', 'role', 'note', 'examples', 'proposed'];
  const out = {};
  for (const k of [...order, ...Object.keys(c).filter((k) => !order.includes(k))]) if (c[k] !== undefined) out[k] = c[k];
  return `import { composite } from "../../lib/composite.ts";\n\nexport default composite(${tsLiteral(out)});\n`;
}
