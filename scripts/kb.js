// The KB for the command line, the explorer page and the Claude tools
// (KB_PLAN.md phase 1). Shared by all three so they answer the same.
//
//   node scripts/kb.js word dēng
//   node scripts/kb.js remove dēng [fàn …]
//   node scripts/kb.js check-form "chī fàn" [--tts 吃饭] [--zh 吃饭 --py chīfàn]
//   node scripts/kb.js query "<rules>"
//   node scripts/kb.js parse "Wǒ chī fàn."
//   node scripts/kb.js atoms [word]
//   node scripts/kb.js parse-report [--lessons 4] [--stdout]
//   node scripts/kb.js scoreboard [--append] [--label "what changed"] [--no-atoms]
//   node scripts/kb.js engine
//
// parse-report parses every Hao-shuo-de sentence of the first N lessons and
// writes kb/reports/lessons-1-N-parse.md (--stdout prints it instead).
//
// scoreboard measures the language now and prints it against the last stored
// row; --append stores the row in kb/scoreboard.csv (refactor --write does
// that after every change). --no-atoms skips the solver.
//
// Add --json to print the data instead of the text.
//
// A long-running process asks `openKb()` each time; the KB is rebuilt when a
// data, content or rule file changed since it was built.

import { mkdirSync, readdirSync, statSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Worker } from 'worker_threads';
import { createKb, renderCard, renderRemoval, renderParse, renderAtoms, renderAtomWord } from '../src/lib/kb/kb.js';
import { parseReport, renderParseReport } from '../src/lib/kb/parse-report.js';
import { renderCheckForm } from '../src/lib/kb/tools.js';
import { engine } from '../src/lib/kb/clingo.js';
import { scoreboardRow, appendRow, readScoreboard, renderScoreboard } from '../src/lib/kb/scoreboard.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
// what the answers depend on: the data, the book text, the dictionary helpers, the rules
const WATCHED = ['src/data', 'src/content', 'kb/rules'];

// -> a number that changes when any watched file is added, removed or edited.
export function fingerprint() {
  let sum = 0;
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = resolve(dir, e.name);
      if (e.isDirectory()) walk(p);
      else {
        const s = statSync(p);
        sum += s.mtimeMs + s.size;
      }
    }
  };
  for (const d of WATCHED) walk(resolve(ROOT, d));
  return sum;
}

// -> the source, read by a fresh worker so the module cache never goes stale.
export function reloadSource() {
  return new Promise((ok, fail) => {
    const worker = new Worker(new URL('./kb-source-worker.js', import.meta.url));
    worker.once('message', (m) => (m.ok ? ok(m.source) : fail(new Error(m.error))));
    worker.once('error', fail);
  });
}

let cached = null;

// -> the KB for the data as it is now. `force` rebuilds.
export async function openKb({ force = false } = {}) {
  const stamp = fingerprint();
  if (!force && cached && cached.stamp === stamp) return cached.kb;
  const source = await reloadSource();
  const kb = createKb(source);
  cached = { stamp, kb };
  return kb;
}

// -- command line ----------------------------------------------------------------------------

function option(args, name) {
  const i = args.indexOf(name);
  if (i < 0) return undefined;
  return args.splice(i, 2)[1];
}

async function main(argv) {
  const args = [...argv];
  const json = args.includes('--json');
  if (json) args.splice(args.indexOf('--json'), 1);
  const [command, ...rest] = args;
  const print = (data, text) => console.log(json ? JSON.stringify(data, null, 2) : text);
  const kb = await openKb();

  switch (command) {
    case 'word': {
      if (!rest.length) throw new Error('usage: kb word <word>');
      const card = kb.word(rest.join(' '));
      return print(card, renderCard(card));
    }
    case 'remove': {
      if (!rest.length) throw new Error('usage: kb remove <word> [word …]');
      const r = await kb.remove(rest);
      return print(r, renderRemoval(r));
    }
    case 'check-form': {
      const tts = option(rest, '--tts');
      const zh = option(rest, '--zh');
      const py = option(rest, '--py');
      const r = kb.checkForm({ forms: rest.join(' '), tts, zh, py });
      const text = renderCheckForm(r);
      return print(r, text);
    }
    case 'query': {
      const r = await kb.query(rest.join(' '));
      return print(r, JSON.stringify(r, null, 2));
    }
    case 'parse': {
      const r = kb.parse(rest.join(' '));
      return print(r, renderParse(r, kb.source.words));
    }
    case 'parse-report': {
      const n = Number(option(rest, '--lessons') ?? 4);
      const stdout = rest.includes('--stdout');
      const lessons = kb.source.lessons.filter((l) => l.number <= n).map(({ id, number }) => ({ id, number }));
      const report = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, lessons });
      const text = renderParseReport(report, kb.source.words, { title: `Parse report: lessons 1-${n}` });
      if (json) return print({ ...report, byPattern: Object.fromEntries(report.byPattern) }, text);
      if (stdout) return console.log(text);
      const file = resolve(ROOT, 'kb/reports', `lessons-1-${n}-parse.md`);
      mkdirSync(resolve(ROOT, 'kb/reports'), { recursive: true });
      writeFileSync(file, `${text}\n`);
      return console.log(`${report.parsed} of ${report.total} sentences parse (${Math.round(report.rate * 100)}%); written to kb/reports/lessons-1-${n}-parse.md`);
    }
    case 'scoreboard': {
      const file = resolve(ROOT, 'kb/scoreboard.csv');
      const label = option(rest, '--label') ?? '';
      const append = rest.includes('--append');
      const before = readScoreboard(file);
      const row = await scoreboardRow(kb, { label, atoms: !rest.includes('--no-atoms'), atomsTimeoutMs: 90_000 });
      if (append) appendRow(file, row);
      return print({ row, stored: before.length + (append ? 1 : 0) }, `${renderScoreboard(row, before)}${append ? '\nStored in kb/scoreboard.csv.' : ''}`);
    }
    case 'atoms': {
      // no name: the whole report; a name: that word's line
      if (rest.length) {
        const line = await kb.atoms(rest.join(' '));
        return print(line, renderAtomWord(await kb.atoms(), line));
      }
      const r = await kb.atoms();
      return print(r, renderAtoms(r));
    }
    case 'engine': {
      const e = engine();
      const text =
        e.name === 'native'
          ? `native clingo ${e.version} (${[e.path, ...e.args].join(' ')}): no limit on the program's size`
          : `built-in clingo-wasm: programs over about ${e.limit.toLocaleString('en')} bytes are refused.\nFor no limit, install clingo: python -m venv tools/clingo/venv, then tools/clingo/venv/Scripts/pip install clingo (or put any clingo on the PATH).`;
      return print(e, text);
    }
    default:
      console.log('usage: node scripts/kb.js word|remove|check-form|query|parse|atoms|parse-report|engine …  (--json for data)');
      process.exitCode = command ? 1 : 0;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
