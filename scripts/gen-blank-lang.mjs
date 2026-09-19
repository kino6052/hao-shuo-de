#!/usr/bin/env node
// One-off dev helper (not part of the build): given a lesson folder's
// shape.ts, prints ru.ts/zh.ts source with the correct blank placeholder
// for every slot (string[] -> [], prose -> {text:[]}, info -> {items:[]}).
// Usage: node scripts/gen-blank-lang.mjs src/content/lesson-03 ru
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const [, , dir, lang] = process.argv;
const shapePath = resolve(process.cwd(), dir, 'shape.ts');
const { default: shape } = await import(pathToFileURL(shapePath));

const label = { ru: 'Russian', zh: 'Chinese' }[lang];
const varName = lang;

function blankFor(slot) {
  if (slot.type === 'prose') return '{ text: [] }';
  if (slot.type === 'info' || slot.type === 'warning') return '{ items: [] }';
  return '[]';
}

function hintFor(slot) {
  if (slot.type === 'vocab') return `vocab: ${slot.term}`;
  if (slot.type === 'example' || slot.type === 'story') return `${slot.type}: ${slot.pinyin}`;
  return slot.type;
}

const lines = [];
lines.push(`// ${label} text, positionally matching shape.ts.`);
lines.push(`// Not translated yet -- every slot is the empty-array placeholder.`);
lines.push(`import type { LangContent } from "../../lib/chapter-shape-types.ts";`);
lines.push('');
lines.push(`const ${varName}: LangContent = [`);
for (const slot of shape) {
  lines.push(`  /** ${hintFor(slot)} */`);
  lines.push(`  ${blankFor(slot)},`);
}
lines.push('];');
lines.push('');
lines.push(`export default ${varName};`);

console.log(lines.join('\n'));
