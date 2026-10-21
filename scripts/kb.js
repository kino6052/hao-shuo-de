// The command line of the KB. The explorer page and the Claude tools use the same code, so all three answer the same.
// KB_PLAN.md phase 1.
//
//   node scripts/kb.js word dēng  # one word's card: meaning, paraphrase or atom mark, forms, relations
//   node scripts/kb.js remove dēng [fàn …]  # what dropping the words would cost
//   node scripts/kb.js check-form "chī fàn" [--tts 吃饭] [--zh 吃饭 --py chīfàn]  # is a proposed form valid
//   node scripts/kb.js query "<rules>"  # your own clingo rules, run against the facts
//   node scripts/kb.js parse "Wǒ chī fàn." [--lesson 5]  # does a sentence parse; with --lesson, only the patterns taught up to it
//   node scripts/kb.js atoms [word]  # the atoms report, or one word's line
//   node scripts/kb.js relations [kind] [--status proposed|accepted] [--limit N]  # synonyms, opposites, connections and the rest
//   node scripts/kb.js relations tree [word] [--limit N]  # what hangs under what: the kind-of tree of every word, or of one
//   node scripts/kb.js tags [--kinds] [--depth N]  # the topic net (or the kind net) as a tree, with counts
//   node scripts/kb.js tags <tag> [--limit N]  # one tag: its parents, subtags and members (a tag under two parents is under both)
//   node scripts/kb.js tags --of <entry>  # every path from an entry up to a top tag, on both axes
//   node scripts/kb.js tags --common <a> <b>  # the closest tags two entries share
//   node scripts/kb.js tags --find <text>  # the tags whose name has the text, and the entries an English word leads to
//   node scripts/kb.js tags --check  # cycles, unknown tags, extra, empty, too big and too small leaves, vague and untagged entries
//   node scripts/kb.js tags --proposed [tag]  # the tags waiting for review, and why each was proposed
//   node scripts/kb.js built [<composite>] [--pattern ba-handle] [--theme compare] [--word bǎ] [--form chain|phrase|unread] [--made built|spelled] [--reach <lesson>] [--up-to N] [--limit N]  # what each composite's description is made from: the patterns, words and lesson (A5); a composite by name gives its whole build, filters join
//   node scripts/kb.js lesson [<id or number>] [--kind words|patterns|composites|sentences] [--limit N]  # what a lesson teaches: new words, patterns, composites that become readable, sentences; no lesson lists them all (W21)
//   node scripts/kb.js grammar [<id>] [--tag compare|cat:action|lesson:comparing] [--lesson L] [--up-to N] [--limit N]  # the grammar patterns: all, by tag, by lesson; an id gives one in full with its examples and users
//   node scripts/kb.js uses <word> [--limit N]  # the sentences and composite descriptions that use a core word, by lesson (its senses: kb word)
//   node scripts/kb.js similar <sentence id or some of its text> [--limit N]  # sentences like one, by shared words and patterns
//   node scripts/kb.js pool  # what the Akinator searches: items by type and source, features by family (A3)
//   node scripts/kb.js selfplay [--mode sure|soft|noisy] [--per N]  # the Akinator plays against the pool: how often it finds each target (B7)
//   node scripts/kb.js akinator [--start doing|when|situation|food|kitchen ... (a kind, topic or theme name)] [--hint "I am hungrier than you"] [--finish] [--limit N] [kind:doing=yes theme:compare=probably ...]  # find how to say an idea by questions (W27): the answers so far in, the next question or what fits out; nothing is kept between calls, to take an answer back leave it out
//   node scripts/kb.js english <word> [--json]  # which entries say an English word: by gloss, by WordNet sense, as a kind of
//   node scripts/kb.js hints <word> [--limit N]  # WordNet hints for drafting a description of a word with no entry (English or Mandarin)
//   node scripts/kb.js export [--all] [--base IRI] [--out FILE] [--stdout]   # the dictionary as OntoLex Turtle (to kb/cache/export/hao-shuo-de.ttl); --all adds the proposed relations
//   node scripts/kb.js cross-check [kindOf|opposites|parts|missing|headless] [--limit N]  # the dictionary's kind-of, opposite and part-of relations against WordNet's
//   node scripts/kb.js frontier [words|mandarin|sentences] [--limit N]  # what the dictionary cannot say yet and the word that would fix each
//   node scripts/kb.js yardsticks [--limit N]  # how much of the Mandarin and English word lists and Basic English the dictionary can say
//   node scripts/kb.js meaning [says|atoms|grounding|<word>] [--limit N]  # what the words say of the NSM primes, Aristotle's categories and grammar
//   node scripts/kb.js candidates [remove|add] [--limit N]  # the cheapest words to drop and the best roots to add
//   node scripts/kb.js add <hanzi>  # what one root would bring
//   node scripts/kb.js gains [alone] [--target N] [--limit N] | gains <word>  # the Chinese words to make core entries when growing to about 1000, best first; or what one word would bring
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
//   node scripts/kb.js tool <kb_name> ['{"text": "..."}']  # any of the MCP server's tools (kb_check_text, kb_lookup, kb_constructions ...), with its arguments as JSON; no name lists them
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
// gains is for growing from 230 words to about 1000 core entries (the follow-up project): it ranks Chinese words by
// what making each a core entry would bring, in order, each measured after the earlier ones (alone: each against
// today's core only); gains <word> says what one word would bring and what it needs first.
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
import { dirname, resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Worker } from 'worker_threads';
import { createKb, renderMeaning, renderMeaningWord, renderCard, renderRemoval, renderParse, renderAtoms, renderAtomWord, renderRelations, renderKindTree, renderEnglish, renderHints, exportTurtle, renderExportSummary, renderCrossCheck, renderFrontier, renderYardsticks, renderAddition, renderRemovalCandidates, renderRootCandidates, renderSwaps, renderAudit, renderGains, renderGainExplain } from '../src/lib/kb/kb.js';
import { askTags } from '../src/lib/kb/tags.js';
import { askBuilt } from '../src/lib/kb/build-tags.js';
import { askAkinator } from '../src/lib/kb/akinator-ask.js';
import { askLesson, askPatterns, askSimilar, askUses } from '../src/lib/kb/lesson-lookup.js';
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
import { renderCheckForm, TOOLS, callTool } from '../src/lib/kb/tools.js';
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
  for (const f of ['kb/relation-rules.json', 'kb/same-form-sort.json', 'kb/wordnet/links.json', 'kb/cross-check-notes.json', 'kb/yardsticks/mandarin-frequency.json', 'kb/yardsticks/basic-english.json', 'kb/yardsticks/english-top3000.json', 'kb/yardsticks/sentences.json', 'review/decisions/relations-1.json']) {
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

// the WordNet links (committed) and the English index (built by scripts/python/link_wordnet.py, gitignored); the index is
// 17 MB, so both are read only when English is asked. Either may be missing: english.js then answers with what it has.
function loadEnglishData() {
  const read = (file) => {
    try {
      return JSON.parse(readFileSync(resolve(ROOT, file), 'utf8'));
    } catch {
      return null;
    }
  };
  // kb/cross-check-notes.json: what the cross-check already understands about a disagreement with WordNet, each with its reason
  return { links: read('kb/wordnet/links.json') ?? {}, index: read('kb/cache/english-index.json'), notes: read('kb/cross-check-notes.json') ?? {} };
}

// the word lists the language is measured against (kb/yardsticks/, committed); a list that is missing is left out
function loadYardsticks() {
  const read = (file) => {
    try {
      return JSON.parse(readFileSync(resolve(ROOT, 'kb/yardsticks', file), 'utf8'));
    } catch {
      return undefined;
    }
  };
  return { mandarin: read('mandarin-frequency.json'), basic: read('basic-english.json'), top: read('english-top3000.json'), sentences: read('sentences.json') };
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
  const kb = createKb(source, { freq: frequencies, drafts: await loadDrafts(source), relationRules: loadRelationRules(), englishData: loadEnglishData, yardstickData: loadYardsticks, parseMemo: memo ? (memoStore ??= parseMemo()) : null });
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
  const kb = await openKb({ memo: ['scoreboard', 'parse-report', 'parse-diff', 'move', 'built', 'akinator', 'pool', 'selfplay', 'lesson', 'grammar', 'uses', 'similar'].includes(command) });

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
      // `relations tree [word]`: what hangs under what, as a tree
      if (rest[0] === 'tree') return print(report.relations.filter((r) => r.kind === 'kind-of'), renderKindTree(report, kb.source, { root: rest[1], limit: limit === 8 ? 10 : limit }));
      return print(report, renderRelations(report, { kind: rest[0], status, limit }));
    }
    case 'yardsticks': {
      const limit = Number(option(rest, '--limit') ?? 15);
      const r = kb.yardsticks();
      return print(r, renderYardsticks(r, { limit }));
    }
    case 'tags': {
      const flag = (name) => rest.includes(name);
      const take = (name, n) => { const i = rest.indexOf(name); return i < 0 ? undefined : rest.splice(i, 1 + n).slice(1); };
      const limit = option(rest, '--limit');
      const depth = option(rest, '--depth');
      const ask = { limit, depth, kinds: flag('--kinds'), check: flag('--check') };
      const of = take('--of', 1);
      const common = take('--common', 2);
      const find = take('--find', 1);
      const ands = [];
      for (let a = take('--and', 1); a; a = take('--and', 1)) ands.push(a[0]);
      const pi = rest.indexOf('--proposed');
      if (of) ask.of = of[0];
      else if (common) ask.common = common;
      else if (find) ask.find = find[0];
      if (pi >= 0) ask.proposed = rest[pi + 1] && !rest[pi + 1].startsWith('--') ? rest[pi + 1] : true;
      else ask.tag = rest.find((a) => !a.startsWith('--'));
      if (ands.length) ask.and = ands;
      const r = askTags(kb.tags(), ask);
      return print(r.data, r.text);
    }
    case 'built': {
      const ask = {};
      for (const [flag, key] of [['--pattern', 'pattern'], ['--theme', 'theme'], ['--word', 'word'], ['--form', 'form'], ['--made', 'made'], ['--reach', 'reach'], ['--up-to', 'upTo'], ['--tag', 'tag'], ['--limit', 'limit']]) {
        const v = option(rest, flag);
        if (v !== undefined) ask[key] = v;
      }
      const name = rest.filter((a) => !a.startsWith('--')).join(' ');
      if (name) ask.name = name;
      const r = askBuilt(kb.built(), ask);
      return print(r.data, r.text);
    }
    case 'lesson': {
      // option() takes its flag out of rest, so read every flag first, then the plain arguments
      const kind = option(rest, '--kind');
      const limit = option(rest, '--limit');
      const r = askLesson(kb.pool(), kb.lessons(), { lesson: rest.find((a) => !a.startsWith('--')), kind, limit });
      return print(r.data, r.text);
    }
    case 'grammar': {
      const tag = option(rest, '--tag');
      const lesson = option(rest, '--lesson');
      const upTo = option(rest, '--up-to');
      const limit = option(rest, '--limit');
      const r = askPatterns(kb.pool(), kb.lessons(), { id: rest.find((a) => !a.startsWith('--')), tag, lesson, upTo, limit });
      return print(r.data, r.text);
    }
    case 'uses': {
      const limit = option(rest, '--limit');
      const r = askUses(kb.pool(), kb.lessons(), { word: rest.find((a) => !a.startsWith('--')), limit });
      return print(r.data, r.text);
    }
    case 'similar': {
      const limit = option(rest, '--limit');
      const r = askSimilar(kb.pool(), kb.lessons(), { sentence: rest.filter((a) => !a.startsWith('--')).join(' '), limit });
      return print(r.data, r.text);
    }
    case 'pool': {
      // what the Akinator searches: the items by type and source, the features by family (A3)
      const pool = kb.pool();
      const count = (list, key) => list.reduce((m, x) => m.set(key(x), (m.get(key(x)) ?? 0) + 1), new Map());
      const types = count(pool.items, (i) => i.type);
      const sources = count(pool.items, (i) => `${i.type}/${i.source}`);
      const families = count([...pool.byFeature.keys()], (f) => f.slice(0, f.indexOf(':')));
      const big = [...pool.byFeature].map(([f, list]) => [f, list.length]).sort((a, b) => b[1] - a[1]).slice(0, 12);
      const data = { items: pool.items.length, types: Object.fromEntries(types), sources: Object.fromEntries(sources), featureFamilies: Object.fromEntries(families), features: pool.byFeature.size, biggest: big };
      const text = [`${data.items} items, ${data.features} features`, `  by type: ${[...types].map(([k, v]) => `${k} ${v}`).join(', ')}`, `  by source: ${[...sources].map(([k, v]) => `${k} ${v}`).join(', ')}`, `  features by family: ${[...families].map(([k, v]) => `${k} ${v}`).join(', ')}`, `  on the most items: ${big.map(([f, n]) => `${f} (${n})`).join(', ')}`].join('\n');
      return print(data, text);
    }
    case 'selfplay': {
      // the Akinator plays against the pool: every target answered for it, see how often it is found (B7)
      const { selfPlay, pickTargets } = await import('../src/lib/kb/akinator-selfplay.js');
      const mode = option(rest, '--mode');
      const per = Number(option(rest, '--per')) || undefined;
      const ak = kb.akinator();
      const targets = pickTargets(kb.pool(), per ? { sentence: per, composite: Math.ceil(per / 3), word: Math.ceil(per / 6), pattern: Math.ceil(per / 6) } : undefined);
      const modes = mode ? [mode] : ['sure', 'soft', 'noisy'];
      const runs = modes.map((m) => selfPlay(ak, { targets, mode: m }));
      const text = runs.map((r) => `${r.mode}: ${r.found} of ${r.targets} found (${Math.round(r.foundRate * 100)}%), ${r.near} near, ${r.asked} answers on average${Object.entries(r.byType).map(([t, v]) => `; ${t} ${v.found}/${v.targets}`).join('')}`).join('\n');
      return print(runs.map(({ rows, ...rest2 }) => rest2), text);
    }
    case 'akinator': {
      // answers are the arguments that look like feature=answer; nothing is kept between calls (B6)
      const r = askAkinator(kb, { answers: rest.filter((a) => /^[a-z]+:[^=\s]+=/.test(a)), start: option(rest, '--start'), hint: option(rest, '--hint'), finish: rest.includes('--finish'), limit: option(rest, '--limit') });
      return print(r.data, r.text);
    }
    case 'english': {
      const r = kb.english(rest.filter((a) => !a.startsWith('--')).join(' '));
      return print(r, renderEnglish(r));
    }
    case 'hints': {
      const limit = Number(option(rest, '--limit') ?? 4);
      const r = kb.hints(rest.filter((a, i) => !a.startsWith('--') && rest[i - 1] !== '--limit').join(' '), { limit });
      return print(r, renderHints(r));
    }
    case 'export': {
      const model = kb.exportModel({ includeProposed: rest.includes('--all'), ...(option(rest, '--base') ? { base: option(rest, '--base') } : {}) });
      const turtle = exportTurtle(model);
      if (rest.includes('--stdout')) return console.log(turtle);
      const file = resolve(ROOT, option(rest, '--out') ?? 'kb/cache/export/hao-shuo-de.ttl');
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, turtle);
      return print({ file, counts: model.counts }, `${renderExportSummary(model.counts)}
Written to ${file} (${Math.round(turtle.length / 1024)} KB).`);
    }
    case 'cross-check': {
      const limit = Number(option(rest, '--limit') ?? 10);
      const r = kb.crossCheck();
      return print(r, renderCrossCheck(r, { section: rest.find((a, i) => !a.startsWith('--') && rest[i - 1] !== '--limit'), limit }));
    }
    case 'frontier': {
      const limit = Number(option(rest, '--limit') ?? 12);
      const r = kb.frontier();
      return print(r, renderFrontier(r, { part: rest.find((a, i) => !a.startsWith('--') && rest[i - 1] !== '--limit'), limit }));
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
    case 'gains': {
      const limit = Number(option(rest, '--limit') ?? 30);
      const target = Number(option(rest, '--target') ?? 1000);
      const word = rest.find((a) => !a.startsWith('--') && a !== 'alone');
      if (word) {
        const r = kb.gains().explain(word);
        return print(r, renderGainExplain(r));
      }
      const r = kb.gains().rank({ target, mode: rest.includes('alone') ? 'alone' : 'path', limit });
      return print(r, renderGains(r, { limit }));
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
    case 'tool': {
      // the MCP server's own tools, for a script, a subagent or a session that has no MCP connection
      const [name, given] = rest;
      if (!name) return print(TOOLS.map((t) => t.name), TOOLS.map((t) => `${t.name}  ${t.description.split('. ')[0]}`).join('\n'));
      if (!TOOLS.some((t) => t.name === name)) throw new Error(`no tool ${name}; node scripts/kb.js tool lists them`);
      return console.log(await callTool(kb, name, given ? JSON.parse(given) : {}));
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
      console.log('usage: node scripts/kb.js tool|word|remove|check-form|query|parse|atoms|relations|english|hints|export|cross-check|frontier|yardsticks|meaning|candidates|add|gains|swaps|scoreboard|parse-report|parse-diff|classes|patterns|forms|move|engine …  (--json for data)');
      process.exitCode = command ? 1 : 0;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
