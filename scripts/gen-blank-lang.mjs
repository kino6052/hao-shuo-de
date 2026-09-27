#!/usr/bin/env node
// One-off dev helper (not part of the build): given a lesson folder's
// shape.ts, prints a blank ru.ts/zh.ts in the LessonShape/PartialByKey
// pattern -- one key per shape.ts key, with the right blank placeholder
// shape for that block's type (vocab/example/exercise/answer/title/
// summary -> {lang:[]}; prose -> {lang:[]} plus tldr/necessity only if
// shape's own value analog needs it -- left for the author to fill in;
// info -> {title:{lang:[]}, items:[{lang:[]}, ...]} with the right item
// count read straight off shape's own items array).
// Usage: node scripts/gen-blank-lang.mjs src/content/lesson-01 ru
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const [, , dir, lang] = process.argv;
const shapePath = resolve(process.cwd(), dir, 'shape.ts');
const { default: shape } = await import(pathToFileURL(shapePath));

const label = { ru: 'Russian', zh: 'Chinese' }[lang];

function blankItems(items) {
  return items.map((item) => {
    const out = { [lang]: [] };
    if (item.items) out.items = blankItems(item.items);
    return out;
  });
}

function blankFor(slot) {
  if (slot.type === 'prose') {
    const extra = [];
    if (slot.tldr !== undefined) extra.push(`tldr: { ${lang}: [] }`);
    if (slot.necessity !== undefined) extra.push(`necessity: { ${lang}: [] }`);
    return `{ ${lang}: []${extra.length ? ', ' + extra.join(', ') : ''} }`;
  }
  if (slot.type === 'info' || slot.type === 'warning') {
    const items = blankItems(slot.items);
    const itemsSrc = JSON.stringify(items).replace(/"([a-z]+)":/g, '$1:');
    const titlePart = slot.title !== undefined ? `title: { ${lang}: [] }, ` : '';
    return `{ ${titlePart}items: ${itemsSrc} }`;
  }
  return `{ ${lang}: [] }`;
}

const lines = [];
lines.push(`// ${label} text for ${dir.split(/[\/]/).pop()}, matching shape.ts's keys. Typed as`);
lines.push(`// \`PartialByKey<LessonShape>\`. Not translated yet -- every \`${lang}\` is the`);
lines.push(`// empty-array placeholder.`);
lines.push(`import type { PartialByKey } from "../../lib/chapter-shape-types.ts";`);
lines.push(`import type { LessonShape } from "./shape.ts";`);
lines.push('');
lines.push(`const ${lang}: PartialByKey<LessonShape> = {`);
for (const [key, slot] of Object.entries(shape)) {
  lines.push(`  ${key}: ${blankFor(slot)},`);
}
lines.push('};');
lines.push('');
lines.push(`export default ${lang};`);

console.log(lines.join('\n'));
