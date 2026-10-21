#!/usr/bin/env node
// Rewrites the generated parts of the READMEs from the code itself, so they never go stale: the comment at the
// top of each file (its summary and its usage lines), package.json, the gate list, the Claude tools, the lessons'
// own comments and the data folders. Text outside the markers is hand-written and never touched. A part sits
// between `<!-- generated:NAME -->` and `<!-- /generated:NAME -->`; a marker that is missing is reported, not guessed.
//
// What it reads (every note is optional, and lives in the file it describes):
//   the first comment of a file   `//` lines, a block comment, or `%` lines in a .lp rules file. Its first
//                                 sentence is the summary; an indented line that starts with `node`, `npm run`
//                                 or `bun` is a usage line (text after `#` or three spaces is its note).
//   @summary <text>               in that comment: use this instead of the first sentence
//   @teaches <text>               in a lesson's index.ts comment: what the lesson teaches (else the sentence
//                                 after "(BOOK_PLAN.md ...):", up to the usual closing line)
//   @internal                     in that comment: leave the file out of the tables
//   .about                        a file in a folder: one line saying what the folder holds (the layout table)
//   "scriptNotes" in package.json a summary for an npm script that has no file of its own (dev, build, test)
//
//   npm run readme             rewrite the generated parts
//   npm run readme -- --check  say which parts are out of date, change nothing (exit 1 if any)
//   npm run readme -- --stage  rewrite, then `git add` the READMEs; this is the pre-commit hook (.githooks/pre-commit),
//                              installed by `npm run hooks`. A README whose hand-written text has changes that are
//                              not staged is refreshed but left unstaged, with a warning.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ---- reading a file's own comment -------------------------------------------------------------------------

// -> the lines of the comment at the top of a file, without the comment marks.
export function leadingComment(source) {
  const text = source.replace(/^﻿/, '').replace(/^#!.*\r?\n/, '').trimStart();
  if (text.startsWith('/*')) {
    const end = text.indexOf('*/');
    if (end < 0) return [];
    return text
      .slice(0, end)
      .split(/\r?\n/)
      .map((line) => line.replace(/^\s*\/?\*+\/?\s?/, '').replace(/\s+$/, ''));
  }
  const mark = text.startsWith('%') ? '%' : '//';
  const lines = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.startsWith(mark)) break;
    lines.push(line.slice(mark.length).replace(/^ /, '').replace(/\s+$/, ''));
  }
  return lines;
}

const TAGS = new Set(['summary', 'teaches', 'internal']);
const USAGE = /^ {2,}((?:node|npm run|npm test|bun|npx)\b.*)$/;

// -> { tags, paragraphs, usage, summary }: the notes a file's first comment carries.
export function parseHeader(source) {
  const tags = {};
  const prose = [];
  for (const line of leadingComment(source)) {
    const tag = /^@(\w+)\b[ \t]*(.*)$/.exec(line); // a tag starts the line; an indented one is documentation
    if (tag && TAGS.has(tag[1])) tags[tag[1]] = tag[2].trim() || true;
    else prose.push(line);
  }
  const usage = [];
  for (const line of prose) {
    const m = USAGE.exec(line);
    if (!m) continue;
    const parts = /\s+#\s+/.test(m[1]) ? m[1].split(/\s+#\s+/) : m[1].split(/\s{3,}/);
    usage.push({ cmd: parts[0].trim(), note: parts.slice(1).join(' ').trim() });
  }
  const paragraphs = [];
  let current = [];
  for (const line of prose) {
    if (!line.trim()) {
      if (current.length) paragraphs.push(current);
      current = [];
    } else current.push(line);
  }
  if (current.length) paragraphs.push(current);
  // a paragraph of prose is made of lines that are not indented (the indented ones are usage or code)
  const plain = paragraphs
    .map((p) => p.filter((l) => !/^ {2,}/.test(l)).map((l) => l.trim()).join(' '))
    .filter(Boolean);
  const summary = typeof tags.summary === 'string' ? tags.summary : firstSentences(plain[0] ?? '');
  return { tags, paragraphs: plain, usage, summary };
}

const ABBREVIATIONS = ['e.g.', 'i.e.', 'etc.', 'vs.'];

// -> the first sentence of a text, plus the next if the first is very short (at most `max` characters).
export function sentences(text) {
  let t = text.replace(/\s+/g, ' ').trim();
  ABBREVIATIONS.forEach((a, i) => (t = t.split(a).join(`${a.slice(0, -1)}\u0001${i}`)));
  const parts = t.split(/(?<=[.!?])\s+(?=[A-Z`"(\[])/);
  return parts.map((p) => ABBREVIATIONS.reduce((s, a, i) => s.split(`${a.slice(0, -1)}\u0001${i}`).join(a), p));
}

// -> the text cut at a clause boundary (or a space) before `max` characters, with an ellipsis.
export function clip(text, max) {
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const cut = Math.max(head.lastIndexOf(' -- '), head.lastIndexOf('; '), head.lastIndexOf(', '), head.lastIndexOf(' ('));
  const at = cut > max / 2 ? cut : head.lastIndexOf(' ');
  return `${head.slice(0, at).replace(/[,;(\s-]+$/, '')}…`;
}

export function firstSentences(text, max = 200) {
  const parts = sentences(text);
  let out = parts[0] ?? '';
  if (out.length < 70 && parts[1] && out.length + parts[1].length < max) out += ` ${parts[1]}`;
  return clip(out.replace(/:$/, '.'), max);
}

// the closing lines the lesson comments repeat after saying what the lesson teaches
const LESSON_BOILERPLATE = /^(Only words|Word cards|Plain words|Nothing else|passes every|No new words)/;

// -> what a lesson teaches, from the comment at the top of its index.ts.
export function lessonTeaches(source) {
  const header = parseHeader(source);
  if (typeof header.tags.teaches === 'string') return header.tags.teaches;
  const paragraph = header.paragraphs.find((p) => /\(BOOK_PLAN\.md[^)]*\):/.test(p));
  if (!paragraph) return '';
  const body = paragraph.replace(/^[^:]*\(BOOK_PLAN\.md[^)]*\):\s*/, '');
  const kept = [];
  for (const s of sentences(body)) {
    if (LESSON_BOILERPLATE.test(s)) break;
    kept.push(s);
  }
  const text = kept
    .join(' ')
    .replace(/,\s*D\d+/g, '')
    .replace(/\s*\(D\d+\)/g, '')
    .trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// ---- the generated parts ----------------------------------------------------------------------------------

const open = (name) => `<!-- generated:${name} -->`;
const close = (name) => `<!-- /generated:${name} -->`;
const NOTE = '<!-- Written by scripts/generate-readme.js from the comments in the code. Do not edit between these markers. -->';

// -> the text with one generated part replaced, or null if its markers are not there.
export function replaceBlock(text, name, body) {
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const start = text.indexOf(open(name));
  const end = text.indexOf(close(name));
  if (start < 0 || end < start) return null;
  const inner = [NOTE, '', ...body.trim().split('\n')].join(eol);
  return text.slice(0, start + open(name).length) + eol + inner + eol + text.slice(end);
}

// -> the text with every generated part emptied, to tell hand-written changes from regenerated ones.
export function outsideBlocks(text) {
  return text.replace(/\r\n/g, '\n').replace(/(<!-- generated:([\w-]+) -->)[\s\S]*?(<!-- \/generated:\2 -->)/g, '$1$3');
}

const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

export function table(headers, rows) {
  const line = (cells) => `| ${cells.map(cell).join(' | ')} |`;
  return [line(headers), line(headers.map(() => '---')), ...rows.map(line)].join('\n');
}

const slash = (p) => p.split(sep).join('/');
const read = (path) => readFileSync(join(ROOT, path), 'utf8');
const files = (dir, pattern) => (existsSync(join(ROOT, dir)) ? readdirSync(join(ROOT, dir)).filter((f) => pattern.test(f)).sort() : []);
const SKIP_FOLDERS = new Set(['node_modules', 'dist', 'docs', '.git', 'venv', 'legacy']);

// the notes of the files that have no summary, collected as we go, so the run can say how many
const missing = [];
const summaryOf = (path) => {
  const header = parseHeader(read(path));
  if (header.tags.internal) return null;
  if (!header.summary) missing.push(path);
  return header.summary || '';
};

function lastScoreboardRow() {
  const lines = read('kb/scoreboard.csv').trim().split(/\r?\n/);
  const split = (line) => [...line.matchAll(/("([^"]|"")*"|[^,]*)(,|$)/g)].map((m) => m[1].replace(/^"|"$/g, '').replace(/""/g, '"')).slice(0, -1);
  const names = split(lines[0]);
  const values = split(lines[lines.length - 1]);
  return Object.fromEntries(names.map((n, i) => [n, values[i]]));
}

async function englishStrings() {
  const i18n = read('src/lib/i18n.js');
  const get = (key) => new RegExp(`${key}:\\s*"([^"]*)"`).exec(i18n)?.[1] ?? key;
  return get;
}

// a chapter's title: the label the sidebar uses (src/data/word-usage.json), else the title in its front matter
async function bookParts() {
  const { SECTIONS, BACK_MATTER, lessonNumber } = await import(pathToFileURL(join(ROOT, 'src/content/book.js')).href);
  const usage = JSON.parse(read('src/data/word-usage.json')).chapters ?? {};
  const get = await englishStrings();
  const byId = chapterFiles();
  const titleOf = (id) => {
    if (usage[id]?.label) return usage[id].label.replace(/^Lesson \d+ · /, '');
    const head = byId.has(id) ? read(byId.get(id)).slice(0, 600) : '';
    return /^title:\s*"?([^"\r\n]+?)"?\s*$/m.exec(head)?.[1] ?? id;
  };
  return { SECTIONS, BACK_MATTER, lessonNumber, titleOf, get };
}

// every chapter id -> the file under src/content that declares it
function chapterFiles() {
  const byId = new Map();
  for (const f of files('src/content', /\.(ts|yaml|md)$/)) {
    if (/\.(rus|zh)\.md$/.test(f)) continue;
    const m = /\bid:\s*["']?([\w-]+)/.exec(read(`src/content/${f}`).slice(0, 600));
    if (m) byId.set(m[1], `src/content/${f}`);
  }
  return byId;
}

const PARTS = {
  'README.md': {
    async facts() {
      const { SECTIONS, BACK_MATTER } = await bookParts();
      const row = lastScoreboardRow();
      const lessons = SECTIONS.flatMap((s) => s.lessons).length;
      const tests = ['scripts', 'src', 'vite-plugin-chapter.test.js'].reduce((n, p) => n + countTests(p), 0);
      const { GATES } = await import(pathToFileURL(join(ROOT, 'scripts/gates.js')).href);
      return table(
        ['What', 'Now'],
        [
          ['Lessons', `${lessons}, in ${SECTIONS.length} sections (${SECTIONS.map((s) => s.lessons.length).join(' / ')}), then ${BACK_MATTER.flatMap((g) => g.chapters).length} chapters to read, look things up in or build with`],
          ['Core words', `${row.words}: ${row.marked_atoms} atoms (no honest description) and ${row.paraphrased} with a paraphrase, so potentially removable`],
          ['Composite words', `${row.composites}, with ${row.forms} ways to say them (${row.built} built from their parts, ${row.spelled} spelled whole, ${row.undecided_forms} waiting for the author to say which)`],
          ['Grammar patterns', `${row.patterns}, one file each in \`src/data/grammar/\``],
          ['Things the language must say', `${row.items}: 65 atoms of meaning, 10 categories, 38 grammar points`],
          ['Lesson sentences that parse', `${(Number(row.parse_rate) * 100).toFixed(1)} %`],
          ['Smallest set the others can be said from', `${row.smallest_set} words; the other ${row.secondary} have a fine paraphrase`],
          ['Gates (`npm run check`)', `${GATES.length}`],
          ['Test files (`npm test`)', `${tests}`],
        ],
      ) + `\n\nThe language numbers are the last row of \`kb/scoreboard.csv\` (${row.date}, ${row.label}); a refactor adds a new row.`;
    },

    async book() {
      const { SECTIONS, BACK_MATTER, lessonNumber, titleOf, get } = await bookParts();
      const out = [];
      SECTIONS.forEach((section, i) => {
        out.push(`#### Section ${i + 1} — ${get(section.key)}`, '');
        out.push(
          table(
            ['#', 'Lesson', 'What it teaches'],
            section.lessons.map((id) => [lessonNumber(id), titleOf(id), lessonTeaches(read(`src/content/lessons/${id}/index.ts`))]),
          ),
          '',
        );
      });
      const byId = chapterFiles();
      out.push('#### After the lessons', '');
      out.push(
        table(
          ['Group', 'Chapter', 'Source'],
          BACK_MATTER.flatMap((g) => g.chapters.map((id) => [get(g.key), titleOf(id), `\`${byId.get(id) ?? `src/content/${id}`}\``])),
        ),
      );
      return out.join('\n');
    },

    async commands() {
      const pkg = JSON.parse(read('package.json'));
      const notes = pkg.scriptNotes ?? {};
      const { GATES } = await import(pathToFileURL(join(ROOT, 'scripts/gates.js')).href);
      const gates = new Set(GATES.map(([name]) => name));
      // the gates have their own table, and `prepare` is `hooks` run by the package manager
      const shown = Object.entries(pkg.scripts).filter(([name]) => !gates.has(name) && name !== 'prepare');
      const rows = shown.map(([name, command]) => {
        const file = /scripts\/([\w./-]+\.js)/.exec(command)?.[1];
        const summary = notes[name] ?? (file ? summaryOf(`scripts/${file}`) : '');
        if (!summary) missing.push(`package.json script "${name}"`);
        return [`\`npm run ${name}\``, summary ?? ''];
      });
      return table(['Command', 'What it does'], rows);
    },

    async gates() {
      const { GATES } = await import(pathToFileURL(join(ROOT, 'scripts/gates.js')).href);
      const { scripts } = JSON.parse(read('package.json'));
      // a gate with no npm script of its own is run as `node scripts/NAME.js`
      const how = (name) => (scripts[name] ? `npm run ${name}` : `node scripts/${name}.js`);
      return table(['Gate', 'What it checks'], GATES.map(([name]) => [`\`${how(name)}\``, summaryOf(`scripts/${name}.js`) ?? '']));
    },

    async layout() {
      const rows = [];
      const walk = (dir) => {
        for (const name of readdirSync(join(ROOT, dir))) {
          if (SKIP_FOLDERS.has(name)) continue;
          const path = dir ? `${dir}/${name}` : name;
          if (!statSync(join(ROOT, path)).isDirectory()) continue;
          const about = join(ROOT, path, '.about');
          if (existsSync(about)) rows.push([`\`${path}/\``, readFileSync(about, 'utf8').trim().replace(/\s+/g, ' ')]);
          walk(path);
        }
      };
      walk('');
      rows.sort((a, b) => a[0].localeCompare(b[0]));
      return table(['Folder', 'What is in it'], rows);
    },

    async shapes() {
      const rows = files('src/lib', /\.ts$/)
        .filter((f) => !/\.test\./.test(f))
        .map((f) => [`\`src/lib/${f}\``, summaryOf(`src/lib/${f}`)])
        .filter(([, s]) => s);
      return table(['File', 'What it defines'], rows);
    },
  },

  'kb/README.md': {
    async 'kb-commands'() {
      const { usage } = parseHeader(read('scripts/kb.js'));
      const width = Math.min(70, Math.max(...usage.map((u) => u.cmd.length)));
      const lines = usage.map((u) => (u.note ? `${u.cmd.padEnd(width)}  # ${u.note}` : u.cmd));
      return ['```', ...lines, '```'].join('\n');
    },

    async 'kb-tools'() {
      const { TOOLS } = await import(pathToFileURL(join(ROOT, 'src/lib/kb/tools.js')).href);
      return table(['Tool', 'What it answers'], TOOLS.map((t) => [`\`${t.name}\``, firstSentences(t.description, 220)]));
    },

    async 'kb-modules'() {
      const code = files('src/lib/kb', /\.js$/)
        .filter((f) => !/\.test\.js$/.test(f))
        .map((f) => [`\`src/lib/kb/${f}\``, summaryOf(`src/lib/kb/${f}`)])
        .filter(([, s]) => s !== null);
      const rules = files('kb/rules', /\.lp$/).map((f) => [`\`kb/rules/${f}\``, summaryOf(`kb/rules/${f}`)]);
      return table(['File', 'What it does'], [...code, ...rules]);
    },

    async 'kb-reports'() {
      const rows = files('kb/reports', /\.md$/).map((f) => {
        const title = /^#\s+(.+)$/m.exec(read(`kb/reports/${f}`))?.[1] ?? '';
        return [`\`kb/reports/${f}\``, title];
      });
      rows.push(['`kb/scoreboard.csv`', 'The language\'s numbers after each change; the Scoreboard tab charts it.']);
      return table(['File', 'What it is'], rows);
    },
  },

  'BOOK_STRUCTURE.md': {
    async 'book-tree'() {
      const { SECTIONS, BACK_MATTER, lessonNumber, titleOf, get } = await bookParts();
      const byId = chapterFiles();
      const intros = files('src/content/intros', /^intro-\d+$/).sort((a, b) => a.slice(6) - b.slice(6));
      const groups = [
        { title: 'Introduction', items: intros.map((id, i) => [`${i + 1}. ${titleOf(id)}`, `intros/${id}/`]) },
        ...SECTIONS.map((s, i) => ({
          title: `Section ${i + 1} — ${get(s.key)}`,
          items: s.lessons.map((id) => [`${lessonNumber(id)}. ${titleOf(id)}`, `lessons/${id}/`]),
        })),
        ...BACK_MATTER.map((g) => ({
          title: get(g.key),
          items: g.chapters.map((id) => [titleOf(id), (byId.get(id) ?? id).replace('src/content/', '')]),
        })),
      ];
      const lines = ['```', 'Hǎo-shuō-de'];
      groups.forEach((group, g) => {
        const lastGroup = g === groups.length - 1;
        lines.push(`${lastGroup ? '└──' : '├──'} ${group.title}`);
        const trunk = lastGroup ? '    ' : '│   ';
        group.items.forEach(([label, file], i) => {
          lines.push(`${trunk}${i === group.items.length - 1 ? '└──' : '├──'} ${label.padEnd(50)}  ${file}`);
        });
        if (!lastGroup) lines.push('│');
      });
      lines.push('```');
      return lines.join('\n');
    },
  },
};

// ---- counting ---------------------------------------------------------------------------------------------

function countTests(path) {
  const full = join(ROOT, path);
  if (!existsSync(full)) return 0;
  if (!statSync(full).isDirectory()) return /\.test\./.test(path) ? 1 : 0;
  return readdirSync(full).reduce((n, name) => (SKIP_FOLDERS.has(name) ? n : n + countTests(`${path}/${name}`)), 0);
}

// ---- running ----------------------------------------------------------------------------------------------

// -> [{ path, before, after, absent }]: each README as it is and as it would be.
export async function build() {
  const results = [];
  for (const [path, parts] of Object.entries(PARTS)) {
    const before = read(path);
    let after = before;
    const absent = [];
    for (const [name, make] of Object.entries(parts)) {
      const next = replaceBlock(after, name, await make());
      if (next === null) absent.push(name);
      else after = next;
    }
    results.push({ path, before, after, absent });
  }
  return results;
}

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

// Stages a README when it differs from what is staged and the difference is only the generated parts; a README
// with hand-written changes that are not staged is left alone, because the commit would then carry text nobody staged.
function stage(path, text) {
  let indexed = null;
  try {
    indexed = git('show', `:${path}`).replace(/\r\n/g, '\n');
  } catch {
    // not in the index yet: nothing hand-written to protect
  }
  if (indexed !== null && indexed === text.replace(/\r\n/g, '\n')) return;
  if (indexed !== null && outsideBlocks(indexed) !== outsideBlocks(text)) {
    console.warn(`readme: ${path} has hand-written changes that are not staged; its generated parts are fresh, but it is left out of this commit.`);
    return;
  }
  git('add', '--', path);
  console.log(`readme: refreshed and staged ${path}`);
}

async function main() {
  const args = process.argv.slice(2);
  const results = await build();
  const stale = results.filter((r) => r.after !== r.before);
  for (const r of results) for (const name of r.absent) console.warn(`readme: ${r.path} has no "${open(name)}" marker; add one where the part should go.`);
  if (args.includes('--check')) {
    for (const r of stale) console.log(`readme: ${r.path} is out of date.`);
    if (stale.length) console.log('Run: npm run readme');
    process.exit(stale.length ? 1 : 0);
  }
  for (const r of stale) {
    writeFileSync(join(ROOT, r.path), r.after);
    if (!args.includes('--stage')) console.log(`readme: rewrote ${r.path}`);
  }
  if (args.includes('--stage')) for (const r of results) stage(r.path, r.after);
  else if (!stale.length) console.log('readme: nothing to change.');
  if (missing.length && !args.includes('--stage')) {
    console.warn(`readme: ${missing.length} file(s) have no comment to read a summary from:\n  ${[...new Set(missing)].join('\n  ')}`);
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  main().catch((error) => {
    console.error(error.stack ?? error);
    process.exit(1);
  });
}
