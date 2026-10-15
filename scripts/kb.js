// The KB for the command line, the explorer page and the Claude tools
// (KB_PLAN.md phase 1). Shared by all three so they answer the same.
//
//   node scripts/kb.js word dēng  # one word's card: meaning, paraphrase or atom mark, forms, relations
//   node scripts/kb.js remove dēng [fàn …]  # what dropping the words would cost
//   node scripts/kb.js check-form "chī fàn" [--tts 吃饭] [--zh 吃饭 --py chīfàn]  # is a proposed form valid
//   node scripts/kb.js query "<rules>"  # your own clingo rules, run against the facts
//   node scripts/kb.js parse "Wǒ chī fàn." [--lesson 5]  # does a sentence parse; with --lesson, only the patterns taught up to it
//   node scripts/kb.js atoms [word]  # the atoms report, or one word's line
//   node scripts/kb.js relations [kind] [--status proposed|accepted] [--limit N]  # synonyms, opposites, connections and the rest
//   node scripts/kb.js meaning [says|atoms|grounding|<word>] [--limit N]  # what the words say of the NSM primes, Aristotle's categories and grammar
//   node scripts/kb.js candidates [remove|add] [--limit N]  # the cheapest words to drop and the best roots to add
//   node scripts/kb.js add <hanzi>  # what one root would bring
//   node scripts/kb.js swaps [--k N]  # the best trades of K roots in for K words out
//   node scripts/kb.js audit [--stdout]  # writes kb/reports/candidates-audit.md
//   node scripts/kb.js parse-report [--lessons 4] [--stdout]  # parses every sentence; writes kb/reports/lessons-1-N-parse.md
//   node scripts/kb.js parse-diff [--ref HEAD] [--all] [--limit 12]  # sentences that parse differently now than at a git ref
//   node scripts/kb.js classes [--limit 20]  # word classes that would make failing sentences parse
//   node scripts/kb.js patterns [--limit 12] [--seconds 300]  # the minimal-patterns report
//   node scripts/kb.js forms [--pos noun] [--limit 20]  # how the composites' descriptions parse
//   node scripts/kb.js scoreboard [--append] [--label "what changed"] [--no-atoms]  # the language's numbers now, against the stored history
//   node scripts/kb.js move <lesson | lesson/module | pattern:id> <where>  # what a change in the lesson order would do
//   node scripts/kb.js engine  # which clingo is in use
//
// parse-report parses every Hao-shuo-de sentence of the first N lessons and
// writes kb/reports/lessons-1-N-parse.md (--stdout prints it instead). --all
// adds the composite examples, the stories and the phrase book. A lesson's sentences
// are parsed with the patterns taught up to that lesson (the early-patterns rule); one that
// needs a later pattern is listed under "Uses a pattern before it is taught".
//
// move says what a change in the lesson order would do (scripts/move-effects.js): a lesson to place N,
// a module to the end of another lesson, or a pattern taught in another lesson. It prints the words and
// the patterns that would then be used before they are taught, against today. Nothing is changed.
//
// parse-diff compares how every lesson sentence parses at a git ref (HEAD) with the files as they are, so an
// edited rule, a pattern moved to another lesson or a word that changed class shows the sentences that start or
// stop parsing or read another way. --all adds the other texts. The half that runs at the ref is scripts/parse-snapshot.js.
//
// forms reads every description of the composite dictionary with the patterns and with the Word Builder: how many parse,
// the ones that do not (a missing pattern, or a description to reword), and who reads what. The gate is check-forms.
//
// patterns is the minimal-patterns report (phase 4): the smallest set of patterns that carries the grammar items, the
// sentences that stop parsing when a pattern is taken out, the examples that parse without their own pattern, and the
// patterns an example leans on that are taught later. About a minute; --seconds stops the search for needed sentences.
//
// classes lists the word classes the parser proposes (K6): for every sentence of the book that does not parse,
// the words that would make it parse by filling one more class, and the classes already in the data that wait
// for the author. A refactor list (op `classes`) records one.
//
// candidates ranks the words that could go (cheapest first, with how each would be said
// without it) or the roots that would complete the most Mandarin words; add says what one
// root would bring; swaps finds the best trade of K roots in for K words out. The Mandarin
// numbers need the frequency list (scripts/frequency-list.js).
//
// audit writes kb/reports/candidates-audit.md: the words that cost least to drop, the best roots
// to add and the best trades, for the author to read.
//
// scoreboard measures the language now and prints it against the last stored
// row; --append stores the row in kb/scoreboard.csv (refactor --write does
// that after every change). --no-atoms skips the solver.
//
// Add --json to print the data instead of the text.
//
// A long-running process asks `openKb()` each time; the KB is rebuilt when a
// data, content or rule file changed since it was built.

import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Worker } from 'worker_threads';
import { createKb, renderMeaning, renderMeaningWord, renderCard, renderRemoval, renderParse, renderAtoms, renderAtomWord, renderRelations, renderAddition, renderRemovalCandidates, renderRootCandidates, renderSwaps, renderAudit } from '../src/lib/kb/kb.js';
import { loadFrequencyList } from './frequency-list.js';
import { sourceStamp } from './source-cache.js';
import { readCache, writeCache } from './cache.js';
import { parseMemo } from './parse-memo.js';
import { loadDrafts } from './kb-drafts.js';
import { loadLessons } from './lessons.js';
import { moveEffects, parseSpec, renderMove } from './move-effects.js';
import { snapshotAtRef } from './parse-diff.js';
import { formsOf } from './forms.js';
import { renderFormReport } from '../src/lib/kb/form-report.js';
import { bookSentences, patternReport, renderPatternReport } from '../src/lib/kb/pattern-report.js';
import { classProposals, classesWaiting, renderClassProposals } from '../src/lib/kb/class-proposals.js';
import { OTHER_TEXTS, snapshotFor } from './parse-snapshot.js';
import { diffSnapshots, renderParseDiff } from '../src/lib/kb/parse-diff.js';
import { parseReport, renderParseReport, slimReport } from '../src/lib/kb/parse-report.js';
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
  // the relation rules and the decisions made on the relations review page change what kb.relations() says
  for (const f of ['kb/relation-rules.json', 'kb/same-form-sort.json', 'review/decisions/relations-1.json']) {
    try {
      const s = statSync(resolve(ROOT, f));
      sum += s.mtimeMs + s.size;
    } catch {}
  }
  return sum;
}

// -> the source. The first time in a process it is read right here (nothing has been imported yet, so the files are read
// as they are); after that by a fresh worker, so the module cache never goes stale. Either way it takes seconds (every
// data file is imported), so the result is kept in .cache/source.json with a stamp of the files it came from; the next
// script, or the next call after nothing changed, reads that instead.
let sourceRead = false;
export async function reloadSource() {
  const stamp = sourceStamp();
  const kept = readCache('source.json');
  if (kept?.stamp === stamp) return kept.source;
  let source;
  if (!sourceRead) {
    sourceRead = true;
    source = await (await import('./kb-source.js')).loadSource();
  } else {
    source = await new Promise((ok, fail) => {
      const worker = new Worker(new URL('./kb-source-worker.js', import.meta.url));
      worker.once('message', (m) => (m.ok ? ok(m.source) : fail(new Error(m.error))));
      worker.once('error', fail);
    });
  }
  writeCache('source.json', { stamp, source });
  return source;
}

// the rule-found relations the author accepted, and the pairs rejected (kb/relation-rules.json), and Claude's sort of the
// same-form groups (kb/same-form-sort.json: form -> [verdict, note])
function loadRelationRules() {
  const read = (file) => {
    try {
      return JSON.parse(readFileSync(resolve(ROOT, file), "utf8"));
    } catch {
      return {};
    }
  };
  // the author's decisions on the relations review page (/__review/?relations)
  const decided = read("review/decisions/relations-1.json").decisions ?? {};
  return { ...read("kb/relation-rules.json"), sameForm: read("kb/same-form-sort.json"), decided };
}

let cached = null;
let memoStore = null; // the parse memory on disk (scripts/parse-memo.js), made when a caller asks for it
let frequencies; // the Mandarin frequency list, read once (null when there is none)

// -> the KB for the data as it is now. `force` rebuilds. `memo` keeps parse results on disk and gives slim ones
// (no trees; see src/lib/grammar/parser.js): for the gates, which only ask whether a sentence parses.
export async function openKb({ force = false, memo = false } = {}) {
  const stamp = fingerprint();
  if (!force && cached && cached.stamp === stamp && cached.memo === memo) return cached.kb;
  const source = await reloadSource();
  frequencies ??= loadFrequencyList();
  const kb = createKb(source, { freq: frequencies, drafts: await loadDrafts(source), relationRules: loadRelationRules(), parseMemo: memo ? (memoStore ??= parseMemo()) : null });
  cached = { stamp, kb, memo };
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
  // the commands that only ask whether sentences parse read the parse memory (slim results, no trees)
  const kb = await openKb({ memo: ['scoreboard', 'parse-report', 'parse-diff', 'move'].includes(command) });

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
      // --lesson N: only the patterns taught up to lesson N (the early-patterns rule)
      const upTo = option(rest, '--lesson');
      const r = (upTo ? kb.parseUpTo(Number(upTo)) : kb.parse)(rest.join(' '));
      return print(r, renderParse(r, kb.source.words));
    }
    case 'parse-report': {
      const n = Number(option(rest, '--lessons') ?? 4);
      const stdout = rest.includes('--stdout');
      const lessons = kb.source.lessons.filter((l) => l.number <= n).map(({ id, number }) => ({ id, number }));
      // --all adds the other texts of the book (K7): composite examples, stories, the phrase book
      const all = rest.includes('--all');
      const groups = all ? OTHER_TEXTS : [];
      const report = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons, groups });
      const text = renderParseReport(report, kb.source.words, { title: `Parse report: lessons 1-${n}${all ? ' and the other texts' : ''}` });
      if (json) return print(slimReport(report), text);
      if (stdout) return console.log(text);
      const file = resolve(ROOT, 'kb/reports', `lessons-1-${n}${all ? '-all' : ''}-parse.md`);
      mkdirSync(resolve(ROOT, 'kb/reports'), { recursive: true });
      writeFileSync(file, `${text}\n`);
      return console.log(`${report.parsed} of ${report.total} sentences parse (${Math.round(report.rate * 100)}%); written to kb/reports/lessons-1-${n}${all ? '-all' : ''}-parse.md`);
    }
    case 'move': {
      const [what, where] = rest.filter((a) => !a.startsWith('--'));
      const spec = parseSpec(what, where, { lessons: kb.source.lessons, patterns: kb.source.patterns });
      const r = await moveEffects({ kb, lessons: await loadLessons() }, spec);
      return print(r, renderMove(r, kb.source.words));
    }
    case 'parse-diff': {
      const ref = option(rest, '--ref') ?? 'HEAD';
      const all = rest.includes('--all');
      const limit = Number(option(rest, '--limit') ?? 12);
      const before = snapshotAtRef(ref, { all }); // runs in another process while this one parses
      const d = diffSnapshots(await before, snapshotFor(kb, { all }));
      return print(d, renderParseDiff(d, kb.source.words, { limit, title: `Parse changes since ${ref}${all ? ' (all texts)' : ''}` }));
    }
    case 'forms': {
      const report = await formsOf(kb);
      return print(report, renderFormReport(report, kb.source.words, { limit: Number(option(rest, '--limit') ?? 20), pos: option(rest, '--pos') }));
    }
    case 'patterns': {
      const limit = Number(option(rest, '--limit') ?? 12);
      const seconds = Number(option(rest, '--seconds') ?? 300);
      const sentences = bookSentences(kb.facts.sentences, kb.source.words);
      const report = patternReport({ patterns: kb.source.patterns, words: kb.source.words, composites: kb.source.composites, sentences, lessonOf: kb.patternLesson, coverage: kb.source.coverage, lessons: kb.source.lessons.map(({ id, number }) => ({ id, number })), deadlineMs: seconds * 1000 });
      return print(report, renderPatternReport(report, kb.source.words, { limit }));
    }
    case 'classes': {
      const limit = Number(option(rest, '--limit') ?? 20);
      const lessons = kb.source.lessons.map(({ id, number }) => ({ id, number }));
      const report = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons, groups: OTHER_TEXTS });
      const pieces = report.failures.filter((it) => it.piece).map((it) => ({ text: it.piece.text, where: `${it.lesson}${it.module ? `/${it.module}` : ''} ${it.key ?? ''}`.trim() }));
      // the descriptions of the composite dictionary that the patterns do not read (the sentence end of a form is part of it)
      for (const f of (await formsOf(kb)).forms) if (f.kind === 'phrase' && !f.ok) pieces.push({ text: f.form, where: `composite ${f.zh}`, forms: true });
      const r = classProposals({ parser: kb.parser, words: kb.source.words, pieces, rejected: JSON.parse(readFileSync(new URL('../kb/class-rejections.json', import.meta.url), 'utf8')) });
      const waiting = classesWaiting(kb.source.words);
      return print({ ...r, waiting }, renderClassProposals(r, kb.source.words, waiting, { limit }));
    }
    case 'relations': {
      const status = option(rest, '--status');
      const limit = Number(option(rest, '--limit') ?? 8);
      const report = kb.relations();
      return print(report, renderRelations(report, { kind: rest[0], status, limit }));
    }
    case 'meaning': {
      const limit = Number(option(rest, '--limit') ?? 12);
      const what = rest.filter((a, i) => !a.startsWith('--') && rest[i - 1] !== '--limit').join(' ');
      if (what && !['says', 'atoms', 'grounding'].includes(what)) {
        const r = kb.meaning(what);
        return print(r, [r.term, renderMeaningWord(r.line, kb.source.words)].join('\n'));
      }
      const report = kb.meaning();
      return print(report, renderMeaning(report, kb.source.words, { section: what || 'all', limit }));
    }
    case 'candidates': {
      const limit = Number(option(rest, '--limit') ?? 20);
      const which = rest[0] ?? 'remove';
      if (which === 'remove') {
        const rows = kb.candidates().removalCandidates({ drafts: kb.drafts });
        return print(rows, renderRemovalCandidates(rows, { limit }));
      }
      if (which === 'add') {
        const rows = kb.candidates().rootCandidates();
        return print(rows, renderRootCandidates(rows, { limit }));
      }
      throw new Error('usage: kb candidates [remove|add] [--limit N]');
    }
    case 'add': {
      if (!rest.length) throw new Error('usage: kb add <hanzi>');
      const r = kb.candidates().addition(rest[0]);
      return print(r, renderAddition(r));
    }
    case 'swaps': {
      const k = Number(option(rest, '--k') ?? 1);
      const r = kb.candidates().swaps({ k, drafts: kb.drafts });
      return print(r, renderSwaps(r));
    }
    case 'audit': {
      const text = renderAudit(kb.candidates(), { drafts: kb.drafts });
      if (rest.includes('--stdout')) return console.log(text);
      mkdirSync(resolve(ROOT, 'kb/reports'), { recursive: true });
      writeFileSync(resolve(ROOT, 'kb/reports/candidates-audit.md'), text);
      return console.log('written to kb/reports/candidates-audit.md');
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
      console.log('usage: node scripts/kb.js word|remove|check-form|query|parse|atoms|relations|meaning|candidates|add|swaps|scoreboard|parse-report|parse-diff|classes|patterns|forms|move|engine …  (--json for data)');
      process.exitCode = command ? 1 : 0;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
