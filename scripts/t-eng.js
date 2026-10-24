#!/usr/bin/env node
// T-eng (BROWSER_TRANSLATOR_PLAN.md §3): English through steps 0 to 5 in Claude sessions (scripts/tree-setup.js), and
// what was built read back the way the full translator's text is: a sketch of the ideas, the blind reader and the judge
// (src/lib/translator/t-eng.js readBackMany). Three parts, each saved in its own file, all in one report:
//   book        one lesson example per lesson and 5 composite examples, scored against the book's own Hao-shuo-de too
//   stories     the full translator's test set (TRANSLATOR_PLAN.md F1, Q8): the ten stories
//   sentences   and its everyday sentences, the first 100
// Both LLM steps go many at a time, with no tool (tree-translate.js correctMany, translateMany): step 0 for `--batch`
// texts in one call, then the tree step for `--batch` sentences across the texts, the words looked up in code
// (tree-words.js); `--jobs` calls at a time. Only what failed goes back. Every answer is kept by its prompt in
// .cache/t-eng-answers.json, so a run asks again only what changed, and --replay checks the kept answers with the code
// as it is now, with no session at all.
//
//   node scripts/t-eng.js           the book sample -> .cache/t-eng.json and kb/reports/t-eng.md
//   node scripts/t-eng.js --set     the stories, then the sentences -> .cache/t-eng-stories.json, t-eng-sentences.json
//   --stories, --sentences   with --set, only that part
//   --limit N                the first N items (with --set, of the everyday sentences; 100 when not given)
//   --reuse                  read back the runs already saved, with no new tree step
//   --report                 write the report from the saved files only
//   --sample                 the items only, with no session
//   --replay                 only the kept answers, no session: a prompt not kept is a failed try
//   --fresh                  ask every prompt again, not the kept answers (to time a run)
//   --batch N (default 8)  --jobs N (default 4)  --any-reading  --model M (default sonnet)  --effort E  --claude PATH

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { openTreeTranslator, mapJobs, loginMessage, ROOT } from './tree-setup.js';
import { groupsOf, readBackMany, readBackScore, sampleBook, scoreOne, summarizeEng } from '../src/lib/translator/t-eng.js';
import { STORY_LINES, overlap, sentenceItems, setScore, storyItems } from '../src/lib/translator/test-set.js';
import { loadPrompts } from '../src/lib/translator/pipeline.js';
import { verifyAnswer } from '../src/lib/translator/verify.js';
import { MEMORY_SKIP_ENV } from '../src/lib/kb/memory.js';
import { pinyinProblems } from '../src/lib/pinyin-refs.js';
import { splitSentences } from '../src/lib/kb/parse.js';
import { wordRefIds } from '../src/lib/word-refs.js';
import { openKb } from './kb.js';

const { values } = parseArgs({
  options: {
    set: { type: 'boolean' },
    stories: { type: 'boolean' },
    sentences: { type: 'boolean' },
    sample: { type: 'boolean' },
    report: { type: 'boolean' },
    reuse: { type: 'boolean' },
    replay: { type: 'boolean' },
    fresh: { type: 'boolean' },
    batch: { type: 'string', default: '8' },
    limit: { type: 'string' },
    jobs: { type: 'string', default: '4' },
    'any-reading': { type: 'boolean' },
    model: { type: 'string', default: 'sonnet' },
    effort: { type: 'string' },
    claude: { type: 'string' },
  },
});

const PARTS = {
  book: { file: '.cache/t-eng.json', title: 'The book sample', about: "One lesson example per lesson and five composite examples; kb_memory hid them while it ran." },
  stories: { file: '.cache/t-eng-stories.json', title: 'The test set: the ten stories', about: "The full translator's test set (TRANSLATOR_PLAN.md F1, Q8); kb_memory hid the stories' own lines while it ran." },
  sentences: { file: '.cache/t-eng-sentences.json', title: 'The test set: the everyday sentences', about: 'The first of the everyday sentences of the test set (`kb/yardsticks/sentences.json`), as the full translator\'s test takes them.' },
};
const HAND = join(ROOT, 'review/translations/hand');
// a file from before the read-back is the list of records alone
const load = (part) => {
  const file = join(ROOT, PARTS[part].file);
  if (!existsSync(file)) return null;
  const saved = JSON.parse(readFileSync(file, 'utf8'));
  return Array.isArray(saved) ? { records: saved } : saved;
};
const save = (part, data) => {
  mkdirSync(join(ROOT, '.cache'), { recursive: true });
  writeFileSync(join(ROOT, PARTS[part].file), JSON.stringify(data, null, 1));
};

if (values.report) {
  writeReport();
  process.exit(0);
}

const parts = !values.set ? ['book'] : values.stories || values.sentences ? ['stories', 'sentences'].filter((p) => values[p]) : ['stories', 'sentences'];
const kb = await openKb();
const { words, composites } = kb.source;
const jobs = Math.max(1, Number.parseInt(values.jobs, 10) || 4);
const batch = Math.max(1, Number.parseInt(values.batch, 10) || 8);
// step 0 takes at most 300 English words a call, so a few long stories make calls of their own
const wordCount = (s) => (String(s).match(/[A-Za-z]+/g) ?? []).length;
const textGroups = (items) => groupsOf(items, { batch, most: 300, weight: (item) => wordCount(item.english) });
const limit = values.limit ? Number.parseInt(values.limit, 10) : null;

async function itemsOf(part) {
  if (part === 'stories') {
    const stories = storyItems((await import(pathToFileURL(join(ROOT, 'src/content/appendix-stories.ts')).href)).default);
    return stories.map((s) => ({ ...s, refs: s.book.includes('{{') ? s.book : pinyinProblems(s.book, words, { composites }).refs }));
  }
  if (part === 'sentences') return sentenceItems(JSON.parse(readFileSync(join(ROOT, 'kb/yardsticks/sentences.json'), 'utf8')), { limit: limit ?? 100 });
  const refsOf = (s) => {
    let refs = String(s.pinyin ?? '');
    if (!refs.includes('{{')) {
      const converted = pinyinProblems(refs, kb.parse.words, { composites });
      if (converted.problems.length) return null;
      refs = converted.refs;
    }
    return splitSentences(refs).length === 1 ? refs : null;
  };
  const items = sampleBook(kb.facts.sentences, kb.lessons(), { refsOf, parses: (refs) => kb.parse.parser.parse(refs, { maxTrees: 1 }).ok });
  const poolIds = new Set(kb.pool().items.map((i) => i.id));
  const missing = items.filter((i) => !poolIds.has(i.poolId));
  if (missing.length) console.error(`not in the kb pool, so kb_memory cannot hide them: ${missing.map((i) => i.poolId).join(', ')}`);
  return limit ? items.slice(0, limit) : items;
}

const saved = Object.fromEntries(parts.map((p) => [p, values.reuse ? load(p) : null]));
if (values.reuse && parts.every((p) => !saved[p])) {
  console.error(`Nothing saved to read back in ${parts.map((p) => PARTS[p].file).join(', ')}: run it without --reuse first.`);
  process.exit(1);
}
const itemsByPart = {};
for (const p of parts) itemsByPart[p] = saved[p] ? saved[p].records.map((r) => r.item) : values.reuse ? [] : await itemsOf(p);

if (values.sample) {
  for (const p of parts) for (const i of itemsByPart[p]) console.log(`${i.title ?? i.lesson ?? i.kind}: ${i.english}${i.refs && i.kind !== 'story' ? `\n  ${i.refs}` : ''}`);
  console.log(`${parts.map((p) => itemsByPart[p].length).join(' + ')} items`);
  process.exit(0);
}

// the stories' lines stay hidden for the whole test set, as in the full translator's test (for a session with the kb
// tools; the batched steps have none)
const hide = values.set ? [STORY_LINES] : itemsByPart.book.map((i) => i.poolId);
const setup = await openTreeTranslator({
  kb,
  model: values.model,
  effort: values.effort,
  claude: values.claude,
  firstReading: !values['any-reading'],
  env: { [MEMORY_SKIP_ENV]: hide.join(',') },
  cache: join(ROOT, '.cache/t-eng-answers.json'),
  replay: values.replay,
  fresh: values.fresh,
});
// a broken session is that text's or sentence's failure; a login problem ends the run
const broke = (e) => {
  if (e.login) throw e;
  return e.userMessage ?? e.message ?? String(e);
};

async function steps(items) {
  const started = Date.now();
  const before = setup.cost();
  const t = setup.translator();
  const corrections = (
    await mapJobs(textGroups(items), jobs, async (group) => {
      const out = await t.correctMany(group.map((item) => item.english)).catch((e) => group.map(() => ({ status: 'failed', sentences: [], changes: [], questions: [], reason: `the session broke: ${broke(e)}` })));
      setup.saveAnswers();
      return out;
    })
  ).flat();
  const flat = corrections.flatMap((c, i) => (c.status === 'ok' ? c.sentences.map((english) => ({ i, english })) : []));
  console.error(`step 0 done in ${Math.round((Date.now() - started) / 1000)} s: ${flat.length} sentences from ${items.length} texts`);
  let done = 0;
  const translated = (
    await mapJobs(groupsOf(flat, { batch }), jobs, async (group) => {
      const out = await t.translateMany(group.map((x) => x.english)).catch((e) => group.map(() => ({ ok: false, tries: 0, attempts: [], messages: [`the session broke: ${broke(e)}`], fallback: true })));
      setup.saveAnswers();
      done += group.length;
      console.error(`${done}/${flat.length} sentences: ${out.filter((r) => r.ok).length} of these ${group.length} built`);
      return out;
    })
  ).flat();
  const runs = items.map((_, i) => {
    const correction = corrections[i];
    if (correction.status !== 'ok') return { status: correction.status, correction, results: [] };
    const results = translated.filter((_, j) => flat[j].i === i);
    return { status: results.every((r) => r.ok) ? 'ok' : 'fallback', correction, results };
  });
  const meta = {
    date: new Date().toISOString().slice(0, 10),
    model: values.model,
    firstReading: !values['any-reading'],
    batch,
    ...(values.replay && { replay: true }),
    seconds: { tree: Math.round((Date.now() - started) / 1000) },
    cost: { tree: Math.round((setup.cost() - before) * 100) / 100 },
  };
  return { meta, runs };
}

async function readAll(items, runs) {
  const started = Date.now();
  const before = setup.cost();
  const prompts = loadPrompts();
  const check = (answer) => verifyAnswer(kb, answer);
  // a broken call is the failure of the texts in it
  const ask = (prompt, schema) =>
    setup.ask(prompt, { schema, step: 'read' }).catch((e) => {
      console.error(`a read-back call broke: ${broke(e)}`);
      return null;
    });
  let calls = 0;
  const map = (groups, fn) => mapJobs(groups, jobs, async (g) => (await fn(g), console.error(`read-back calls: ${++calls}`)));
  const results = await readBackMany(runs, { ask, check, prompts, words, model: values.model, batch, map });
  results.forEach((r, i) => {
    if (!r) return;
    const item = items[i];
    r.item = { id: item.id, kind: item.kind, ...(item.title && { title: item.title }) };
    if (item.refs && r.sentences.length) r.book = { overlap: overlap(wordRefIds(item.refs), r.sentences.flatMap((s) => wordRefIds(s.refs || s.pinyin))) };
  });
  return { results, seconds: Math.round((Date.now() - started) / 1000), cost: Math.round((setup.cost() - before) * 100) / 100 };
}

try {
  for (const part of parts) {
    const items = itemsByPart[part];
    if (!items.length) continue;
    let meta;
    let runs;
    // a replay keeps the live run's date, times and costs: its own are those of reading a file
    const live = values.replay ? load(part) : null;
    if (saved[part]) {
      ({ records: runs, ...meta } = saved[part]);
      runs = runs.map((r) => r.run);
    } else {
      console.error(`${PARTS[part].title}: ${items.length} texts`);
      ({ meta, runs } = await steps(items));
      // kept before the read-back, so --reuse can pick up from here
      save(part, { ...meta, records: items.map((item, i) => ({ item, run: runs[i] })) });
    }
    const read = await readAll(items, runs);
    setup.saveAnswers();
    const records = items.map((item, i) => ({ item, run: runs[i], score: scoreOne(item, runs[i], { parser: setup.parser, trees: setup.trees }), result: read.results[i] }));
    const data = live
      ? { ...meta, date: live.date ?? meta.date, readModel: values.model, seconds: live.seconds, cost: live.cost, replayed: meta.date, records }
      : { ...meta, readModel: values.model, seconds: { ...meta.seconds, read: read.seconds }, cost: { ...meta.cost, read: read.cost }, records };
    delete data.replay;
    save(part, data);
    writeReport();
    const t = summarizeEng(records.map((r) => r.score));
    const s = readBackScore(read.results);
    console.log(`T-eng, ${PARTS[part].title.toLowerCase()}: ${t.sentencesBuilt} of ${t.sentences} sentences built; needed ideas kept ${pct(s.kept)}, sentences keeping all theirs ${pct(s.sentencesKept)}; ${data.seconds.tree ?? '?'} + ${data.seconds.read} s, $${data.cost.tree ?? '?'} + $${data.cost.read} -> kb/reports/t-eng.md`);
  }
} catch (e) {
  console.error(e.login ? loginMessage(setup.token) : (e.userMessage ?? e.stack ?? String(e)));
  process.exit(1);
}
process.exit(0);

function pct(x) {
  return x === null || x === undefined ? '–' : `${Math.round(x * 100)}%`;
}

function mean(xs) {
  return xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 1000) / 1000 : null;
}

// one row of the table: the read-back's numbers (setScore's) and the tree translator's own
function rowOf(records) {
  const t = summarizeEng(records.map((r) => r.score).filter(Boolean));
  const results = records.map((r) => r.result ?? null);
  const s = readBackScore(results);
  const read = s.texts > 0;
  return {
    texts: records.length,
    sentences: t.sentences,
    built: t.sentencesBuilt,
    kept: s.kept,
    sentencesKept: s.sentencesKept,
    keptWithLeft: s.keptWithLeft,
    added: read ? s.added : null,
    hsdOnly: read ? s.hsdOnly : null,
    meant: read ? s.meant : null,
    book: mean(results.filter((r) => r?.book).map((r) => r.book.overlap)),
  };
}

function handRow() {
  if (!existsSync(HAND)) return null;
  const results = readdirSync(HAND).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(readFileSync(join(HAND, f), 'utf8')));
  if (!results.length) return null;
  const s = setScore(results);
  return { texts: s.texts, sentences: s.sentences, built: s.sentences, kept: s.kept, sentencesKept: s.sentencesKept, keptWithLeft: s.kept, added: s.added, hsdOnly: s.hsdOnly, meant: s.meant, book: mean(results.filter((r) => r.book).map((r) => r.book.overlap)) };
}

function tableRow(name, r) {
  return `| ${name} | ${r.texts} | ${r.built} of ${r.sentences} | ${pct(r.kept)} | ${pct(r.sentencesKept)} | ${pct(r.keptWithLeft)} | ${r.added ?? '–'} | ${pct(r.hsdOnly)} | ${pct(r.meant)} | ${pct(r.book)} |`;
}

function verdicts(result) {
  const off = (result?.sketch ?? []).filter((s) => s.verdict && s.verdict !== 'kept');
  return [
    ...off.map((s) => `  - ${s.verdict}${s.needed ? '' : ' (colour)'}: ${s.id} "${s.idea}"${s.why ? `: ${s.why}` : ''}`),
    ...(result?.added ?? []).map((a) => `  - added: ${a}`),
  ];
}

function itemLines({ item, run, score, result }) {
  const name = item.title ? `${item.id}, ${item.title}` : (item.lesson ?? item.kind);
  const needed = (result?.sketch ?? []).filter((s) => s.needed);
  const keptLine = result?.sentences?.length ? `; needed ideas kept ${needed.filter((s) => s.verdict === 'kept').length} of ${needed.length}${result.left?.needed ? ` (and ${result.left.needed} in sentences not built)` : ''}` : '';
  const stopped = !(run.correction?.sentences ?? []).length && run.correction ? [`  - step 0: ${run.correction.reason || (run.correction.questions ?? []).map((q) => q.about).join('; ')}`] : [];
  if (item.kind === 'story') {
    return [
      `- **${name}**: ${score.status}, ${score.sentencesBuilt} of ${score.sentences} sentences built${keptLine}`,
      ...stopped,
      ...(run.results ?? []).map((r, k) => [r, k]).filter(([r]) => !r.ok).map(([r, k]) => `  - not built: "${run.correction.sentences[k]}" (${r.messages.at(-1) ?? 'no message'})`),
      ...verdicts(result),
    ];
  }
  const english = (run.correction?.sentences ?? []).join(' ');
  return [
    `- **${score.status}**${score.built ? ` in ${score.tries} ${score.tries === 1 ? 'try' : 'tries'}` : ''}${score.sameTree ? ", the book's tree" : ''} (${name}): "${item.english}"${keptLine}`,
    ...(item.refs ? [`  - book: ${item.refs}`] : []),
    ...(english && english !== item.english ? [`  - step 0: ${(run.correction?.sentences ?? []).map((s) => `"${s}"`).join(' ')}`] : []),
    ...stopped,
    ...(score.built ? [`  - built: ${score.refs}`, `  - reads back: ${score.readback}`] : []),
    ...(result?.sentences?.length ? [`  - the blind reader: "${result.sentences.map((s) => s.blind).join(' ')}"`] : []),
    ...verdicts(result),
    ...(run.results ?? []).filter((r) => !r.ok).flatMap((r) => r.messages.map((m) => `  - failed: ${m}`)),
  ];
}

function partLines(part, data) {
  const t = summarizeEng(data.records.map((r) => r.score).filter(Boolean));
  const read = data.records.filter((r) => r.result?.sentences?.length);
  const s = readBackScore(data.records.map((r) => r.result ?? null));
  const p = (k, of = t.items) => `${k} (${of ? Math.round((100 * k) / of) : 0}%)`;
  return [
    `## ${PARTS[part].title}`,
    '',
    PARTS[part].about,
    '',
    `Run ${data.date ?? '2026-10-24'} with ${data.model ?? 'sonnet'}, the first-reading check (Q7) ${data.firstReading === false ? 'off' : 'on'}${data.batch ? `, ${data.batch} texts or sentences a call` : ', one sentence a session'}; read back with ${data.readModel ?? '–'}. ${data.seconds?.tree ?? '?'} s and $${data.cost?.tree ?? '?'} for steps 0 to 4, ${data.seconds?.read ?? '–'} s and $${data.cost?.read ?? '–'} for the read-back${data.replayed ? `; checked again ${data.replayed} from the kept answers, with no session` : ''}.`,
    '',
    `- Texts: ${t.items}; built whole: ${p(t.built)}, right the first time: ${p(t.firstTry)}; with a sentence for the full translator: ${t.fallback}; asked: ${t.asked}; refused: ${t.refused}${t.failed ? `; a session broke: ${t.failed}` : ''}`,
    `- Sentences after step 0: ${t.sentences}; built: ${p(t.sentencesBuilt, t.sentences)}`,
    `- Read back: ${read.length} texts with a built sentence; texts passing on their own: ${s.passes}; the bar (Q8) over what was built: ${s.pass ? 'passes' : 'does not pass'}; readings per sentence ${s.readings}, words per sentence ${s.words}`,
    ...(part === 'book' ? [`- The same tree as the book's first reading: ${p(t.sameTree, t.oneSentence)} of the ${t.oneSentence} built as one sentence`] : []),
    `- Extras: the readback's English words shared with the English, ${t.readbackShared ?? '–'} on average${t.wordsShared !== null ? `; words shared with the book's Hao-shuo-de, ${t.wordsShared} (Jaccard over word ids, of those built)` : ''}`,
    ...(data.firstReading === false
      ? []
      : [`- The first-reading check (Q7): a later reading came up in ${p(t.laterSeen)} texts. Without the check ${p(t.builtWithoutCheck)} would have built, ${p(t.firstTryWithoutCheck)} on the first try; the check alone sent ${t.onlyByCheck} to the full translator.`]),
    '',
  ];
}

function writeReport() {
  const data = Object.fromEntries(Object.keys(PARTS).map((p) => [p, load(p)]).filter(([, d]) => d));
  const hand = handRow();
  const lines = [
    '# T-eng: English through the tree translator',
    '',
    'Generated by `node scripts/t-eng.js` (BROWSER_TRANSLATOR_PLAN.md §3). Each English text goes through step 0 (the English corrected) and each of its sentences through the tree step, up to three tries; a sentence that does not build goes to the full translator (step 5), which is not run here. What was built is then read back the way the full translator\'s text is (TRANSLATOR_PLAN.md step 7): a sketch session with no tools writes the ideas of the English after step 0, in the full translator\'s sketch shape and with the translate skill\'s own step 1, each idea tied to its sentence; the blind reader (`.claude/agents/blind-reader.md`) gets only the built sentences and their gloss; the judge (`prompts/translator-judge.md`) compares its reading with the ideas of those sentences. The saved sketches of the hand translations (`review/translations/hand/`) belong to those translations\' own sentences, so they are not reused.',
    '',
    '**Needed ideas kept** is the judge\'s count over the sentences built: the score to read. "With the ideas not built as lost" counts the needed ideas of the sentences left to the full translator as lost: the tree translator alone. The columns after it are setScore\'s (`src/lib/translator/test-set.js`), as the full translator\'s test reports them; the shares of words are extras.',
    '',
    '| | texts | sentences built | needed ideas kept | sentences keeping all theirs (bar 90%) | with the ideas not built as lost | meanings added | Hao-shuo-de words only | the meant reading | words shared with the book |',
    '|---|---|---|---|---|---|---|---|---|---|',
    ...Object.entries(data).map(([p, d]) => tableRow(PARTS[p].title, rowOf(d.records))),
    ...(hand ? [tableRow('The full translator: the ten stories, by hand (2026-10-22)', hand)] : []),
    '',
    ...Object.entries(data).flatMap(([p, d]) => partLines(p, d)),
    ...Object.entries(data).flatMap(([p, d]) => [`## ${PARTS[p].title}, ${p === 'stories' ? 'story by story' : 'sentence by sentence'}`, '', ...d.records.filter((r) => r.score).flatMap(itemLines), '']),
  ];
  writeFileSync(join(ROOT, 'kb/reports/t-eng.md'), lines.join('\n'));
}
