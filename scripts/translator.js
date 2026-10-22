#!/usr/bin/env node
// The translator from the command line (TRANSLATOR_PLAN.md D3, E2, F1-F3, S3). The same pipeline the online daemon runs
// (src/lib/translator/pipeline.js): a session translates with the kb tools only, the tools check it, a blind reader reads it
// back without the English, a judge compares. Each session is a `claude -p` with its own login (the daemon's `set-token`).
//
//   npm run translator -- translate "<English>" [--lesson N] [--no-blind] [--repairs 1] [--save] [--json]
//   npm run translator -- test [--stories] [--sentences] [--limit 100] [--round-trip] [--fresh]
//   npm run translator -- score [--dir review/translations/test]
//   npm run translator -- gaps
//   npm run translator -- allow <email> [note] [--owner] | remove <email> | list
//
//   --model opus --effort high --claude PATH   for every command that runs a session
//
// translate --save writes review/translations/<date>-<first words>.md (to review) and .json (the result).
// test runs the test set (Q8: the ten stories and the first 100 everyday sentences; both when neither is named) into
// review/translations/test/<id>.json, skipping the ones already there unless --fresh (the stories' own lines hidden from
// kb_memory while it runs), and stores the set's numbers in
// kb/translation-score.json (the scoreboard's translator columns). --round-trip translates the blind reader's English back
// and says how many words the two Hao-shuo-de texts share (F3); a story also says how many it shares with the book's own.
// score prints those numbers again from the saved results; gaps gathers their gaps into kb/translation-gaps.json (E2).
// allow, remove and list change the list of people who may use the online translator (Firestore `allowed`, Q11), with the
// service-account key setup put in %USERPROFILE%\.haoshuode-translator.

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { findClaude, sessionRunner } from '../src/lib/translator/claude.js';
import { translate } from '../src/lib/translator/pipeline.js';
import { renderMarkdown, scoreOf, slugOf } from '../src/lib/translator/output.js';
import { STORY_LINES, overlap, sentenceItems, setScore, storyItems, wordIdsOf } from '../src/lib/translator/test-set.js';
import { MEMORY_SKIP_ENV } from '../src/lib/kb/memory.js';
import { collectGaps, renderGaps } from '../src/lib/translator/gaps.js';
import { CLAUDE_TOKEN_ENV, homeFile, readClaudeToken } from '../src/lib/translator/home.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const SAVED = join(ROOT, 'review', 'translations');
const TEST_DIR = join(SAVED, 'test');
const SCORE_FILE = join(ROOT, 'kb', 'translation-score.json');
const GAPS_FILE = join(ROOT, 'kb', 'translation-gaps.json');

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    lesson: { type: 'string' },
    'no-blind': { type: 'boolean' },
    repairs: { type: 'string', default: '1' },
    save: { type: 'boolean' },
    json: { type: 'boolean' },
    stories: { type: 'boolean' },
    sentences: { type: 'boolean' },
    limit: { type: 'string', default: '100' },
    'round-trip': { type: 'boolean' },
    fresh: { type: 'boolean' },
    dir: { type: 'string' },
    owner: { type: 'boolean' },
    model: { type: 'string', default: 'opus' },
    effort: { type: 'string', default: 'high' },
    claude: { type: 'string' },
  },
});
const [command, ...args] = positionals;

const rel = (file) => relative(ROOT, file).replaceAll('\\', '/');
const fail = (message) => {
  console.error(message);
  process.exit(1);
};
const writeJson = (file, data) => {
  mkdirSync(resolve(file, '..'), { recursive: true });
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
};
const readJsonFiles = (dir) => {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) out.push(...readJsonFiles(file));
    else if (name.endsWith('.json')) out.push({ file: rel(file), result: JSON.parse(readFileSync(file, 'utf8')) });
  }
  return out;
};

// One runner for every session of a command: the kb, claude and the login are looked up once. extraEnv reaches the
// sessions and the kb server they start.
async function pipeline(extraEnv = {}) {
  const { openKb } = await import('./kb.js');
  const kb = await openKb();
  const claude = findClaude({ given: values.claude });
  const token = readClaudeToken();
  const env = { ...process.env, ...extraEnv, ...(token && { [CLAUDE_TOKEN_ENV]: token }) };
  const run = sessionRunner({ claude, cwd: ROOT, model: values.model, effort: values.effort, env });
  const repairs = Number.parseInt(values.repairs, 10) || 0;
  return (request, over = {}) =>
    translate(request, {
      kb,
      run,
      onStep: (step) => process.stderr.write(`  ${step}\n`),
      blind: !values['no-blind'],
      repairs,
      model: values.model,
      ...over,
    }).catch((e) => {
      if (e.login) fail(`Claude is not logged in for the translator${token ? ' (the saved token was refused)' : ''}: run \`claude setup-token\`, then \`node scripts/translator-daemon.js set-token\`.`);
      fail(e.userMessage ?? e.stack ?? String(e));
    });
}

const pinyinOf = (result) => (result.sentences ?? []).map((s) => s.pinyin).join(' ');

function sayScore(s) {
  const pct = (x) => (x === null ? 'no blind reader' : `${Math.round(x * 100)}%`);
  return [
    `${s.texts} texts, ${s.sentences} sentences`,
    `- Hao-shuo-de words only: ${pct(s.hsdOnly)} of the sentences; they parse: ${pct(s.parses)}; the meant reading found: ${pct(s.meant)}`,
    `- readings per sentence: ${s.readings}; words per sentence: ${s.words}`,
    `- needed ideas kept: ${pct(s.kept)}; sentences keeping all theirs: ${pct(s.sentencesKept)} (the bar is 90%); meanings added: ${s.added}`,
    ...(s.roundTrip !== undefined ? [`- round trip: the two Hao-shuo-de texts share ${pct(s.roundTrip)} of their words`] : []),
    ...(s.book !== undefined ? [`- the stories share ${pct(s.book)} of their words with the book's own`] : []),
    `- texts passing on their own: ${s.passes}; the set passes the bar (Q8): ${s.pass ? 'yes' : 'no'}`,
  ].join('\n');
}

// the set's numbers, with the round trip and the book's overlap averaged over the texts that have them
function fullScore(results) {
  const s = setScore(results);
  const mean = (xs) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 1000) / 1000 : undefined);
  const roundTrip = mean(results.filter((r) => r.roundTrip).map((r) => r.roundTrip.overlap));
  const book = mean(results.filter((r) => r.book).map((r) => r.book.overlap));
  return { ...s, ...(roundTrip !== undefined && { roundTrip }), ...(book !== undefined && { book }) };
}

async function allowList() {
  const { connectFirestore } = await import('../src/lib/translator/firestore-store.js');
  const path = homeFile('serviceAccount');
  if (!existsSync(path)) fail(`No service-account key at ${path}: run scripts/translator-setup.js first (TRANSLATOR_PLAN.md S0a).`);
  return connectFirestore({ serviceAccountPath: path, name: 'translator-cli' });
}

switch (command) {
  case 'translate': {
    const text = args.join(' ').trim();
    if (!text) fail('usage: npm run translator -- translate "<English>" [--lesson N] [--save]');
    const run = await pipeline();
    const result = await run({ id: 'cli', text, lesson: values.lesson ?? '' });
    if (values.save) {
      const slug = slugOf(text);
      writeJson(join(SAVED, `${slug}.json`), result);
      writeFileSync(join(SAVED, `${slug}.md`), renderMarkdown(result));
      console.error(`Saved to review/translations/${slug}.md and .json`);
    }
    console.log(values.json ? JSON.stringify(result, null, 2) : renderMarkdown(result));
    break;
  }

  case 'test': {
    const both = !values.stories && !values.sentences;
    const limit = Number.parseInt(values.limit, 10) || 100;
    const items = [];
    if (values.stories || both) items.push(...storyItems((await import(pathToFileURL(join(ROOT, 'src/content/appendix-stories.ts')).href)).default));
    if (values.sentences || both) items.push(...sentenceItems(JSON.parse(readFileSync(join(ROOT, 'kb/yardsticks/sentences.json'), 'utf8')), { limit }));
    const run = await pipeline(values.stories || both ? { [MEMORY_SKIP_ENV]: STORY_LINES } : {});
    const { openKb } = await import('./kb.js');
    const { source } = await openKb();
    const idsOf = (text) => wordIdsOf(text, source.words, source.composites);
    const results = [];
    for (const [i, item] of items.entries()) {
      const file = join(TEST_DIR, `${item.id}.json`);
      if (existsSync(file) && !values.fresh) {
        results.push(JSON.parse(readFileSync(file, 'utf8')));
        continue;
      }
      console.error(`[${i + 1}/${items.length}] ${item.id}${item.title ? ` (${item.title})` : ''}`);
      const result = await run({ id: item.id, text: item.english, lesson: '' });
      result.item = { id: item.id, kind: item.kind, ...(item.title && { title: item.title }), ...(item.zh && { zh: item.zh }) };
      if (item.book) result.book = { overlap: overlap(idsOf(item.book), idsOf(pinyinOf(result))) };
      const back = result.blind && values['round-trip'] ? [result.blind.whole].filter(Boolean).join(' ') : '';
      if (back) {
        const again = await run({ id: `${item.id}-back`, text: back, lesson: '' }, { blind: false, repairs: 0 });
        result.roundTrip = { english: back, pinyin: pinyinOf(again), overlap: overlap(idsOf(pinyinOf(result)), idsOf(pinyinOf(again))) };
      }
      writeJson(file, result);
      writeFileSync(file.replace(/\.json$/, '.md'), renderMarkdown(result));
      results.push(result);
      const s = scoreOf(result);
      console.error(`  ${s.pass ? 'passes' : 'does not pass'}: ${s.sentences} sentences, kept ${s.kept === null ? '-' : `${Math.round(s.kept * 100)}%`}`);
    }
    const score = { date: new Date().toISOString().slice(0, 10), model: values.model, ...fullScore(results) };
    writeJson(SCORE_FILE, score);
    console.log(sayScore(score));
    console.log(`\nStored in ${rel(SCORE_FILE)}; each text in ${rel(TEST_DIR)}.`);
    break;
  }

  case 'score': {
    const dir = values.dir ? resolve(ROOT, values.dir) : TEST_DIR;
    const results = readJsonFiles(dir).map((r) => r.result);
    if (!results.length) fail(`No saved translations in ${rel(dir) || '.'}: run \`npm run translator -- test\` first.`);
    console.log(values.json ? JSON.stringify(fullScore(results), null, 2) : sayScore(fullScore(results)));
    break;
  }

  case 'gaps': {
    const gaps = collectGaps(readJsonFiles(SAVED));
    writeJson(GAPS_FILE, gaps);
    console.log(values.json ? JSON.stringify(gaps, null, 2) : `${renderGaps(gaps)}\n\nStored in ${rel(GAPS_FILE)}.`);
    break;
  }

  case 'allow':
  case 'remove':
  case 'list': {
    const store = await allowList();
    try {
      if (command === 'list') {
        const rows = await store.listAllowed();
        console.log(rows.length ? rows.map((r) => `${r.email}${r.owner ? ' (owner)' : ''}${r.note ? ` -- ${r.note}` : ''}`).join('\n') : 'Nobody is on the list yet.');
      } else {
        const [email, ...note] = args;
        if (!email?.includes('@')) fail(`usage: npm run translator -- ${command} <email>${command === 'allow' ? ' [note] [--owner]' : ''}`);
        const key = email.trim().toLowerCase();
        if (command === 'allow') {
          await store.allow(email, { note: note.join(' '), owner: Boolean(values.owner) });
          console.log(`Added ${key}${values.owner ? ' as the owner' : ''} (project ${store.projectId}). It takes effect at once.`);
        } else {
          console.log((await store.remove(email)) ? `Removed ${key} (project ${store.projectId}). It takes effect at once.` : `${key} was not on the list.`);
        }
      }
    } finally {
      await store.close().catch(() => {});
    }
    break;
  }

  default:
    fail('usage: npm run translator -- translate "<English>" | test | score | gaps | allow <email> [note] | remove <email> | list');
}
