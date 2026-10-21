// The composite review, served by the dev server only (`npm run dev`, then
// /__review/?batch=1). The composites are reviewed by hand in batches of 100
// by rank: Claude's proposals for a batch are review/proposals/batch-<n>.mjs
// and its example sentences review/examples/batch-<n>.mjs; the page
// (review/page.html) shows each entry's current forms, the proposal with how
// close each is to Mandarin, and the examples; every decision the author
// makes is written at once to review/decisions/batch-<n>.json, which Claude
// reads to apply the batch. A proposals file may also export `extras` (rank ->
// why), entries of earlier batches that were never decided or reviewed; they
// are shown with the batch, marked "carried over". A proposals file past the last rank
// window (batch-17.mjs: the new proposed composites) is a batch of its own that holds only
// its `extras`, with its own `title` and `carriedLabel`.
//
//   GET  /__review/                 the page
//   GET  /__review/data?batch=n     the batch: entries, proposals, decisions
//   POST /__review/decide           { batch, rank, zh, status, form?, note? }
//                                   (status null clears the decision)
//
// Phase 2 of the knowledge base adds two more reviews to the same server,
// served by review/words.html (KB_PLAN.md phase 2; the rules are in
// src/lib/kb/review.js, the decisions become refactors/W<n>.ts and K<n>.ts
// through scripts/review-batch.js):
//
//   GET  /__review/?words=n         the paraphrases of the n-th batch of 80 words, in category order
//   GET  /__review/?kinds=n         built or spelled, for the n-th batch of 100 composites
//   GET  /__review/words-data?batch=n    { entries, decisions } (proposals: review/proposals/words-<n>.mjs)
//   GET  /__review/kinds-data?batch=n    (review/proposals/kinds-<n>.mjs)
//   POST /__review/words-check     { id, forms }  plain pinyin -> refs and the problems, for the editor
//   POST /__review/words-decide    { batch, id, status, forms?, verdict?, eng?, rus?, note? }
//   POST /__review/kinds-decide    { batch, zh, status, note? }   (status null clears the decision)
//
// Phase 5 adds the relations review (KB_PLAN.md K18, src/lib/kb/relations.js), served by review/relations.html:
//
//   GET  /__review/?relations       every relation a rule found or Claude drafted, waiting for a yes or a no
//   GET  /__review/relations-data   { kinds, relations } (decisions: review/decisions/relations-1.json)
//   POST /__review/relations-decide { key, status, note? }   (status accept | reject, null clears the decision)
//
// Phase 6 adds the WordNet link review (KB_PLAN.md phase 6, scripts/python/link_wordnet.py), served by review/wordnet.html:
//
//   GET  /__review/?wordnet         the entries the Chinese and English WordNets did not settle, with their candidate synsets
//   GET  /__review/wordnet-data     { counts, review, decisions, proposals, noSense } (review list and the entries WordNet has no sense for: kb/wordnet/links.json;
//                                   decisions: review/decisions/wordnet-1.json; Claude's picks, shown preselected until the author confirms them:
//                                   review/proposals/wordnet-1.mjs)
//   POST /__review/wordnet-decide   { zh, ilis } or { items: [{ zh, ilis }, ...] }   (ilis [] = no synset fits, null clears the decision)
//   A decision takes effect when the linker runs again: npm run wordnet -- --links-only
//   GET  /__review/wordnet-search?q=<English word or phrase>   up to 12 senses of it, [{ ili, pos, def, lemmas }], the shape of a
//                                   candidate; { q, senses, total, note? }. For the right sense when none is offered.
//   GET  /__review/wordnet-search?ili=i1,i2   the same shape for senses already known by id (so a sense picked by hand still shows
//                                   after a reload). Both read kb/cache/english-index.json (npm run wordnet); 503 without it.

import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIR = resolve(ROOT, 'review');
export const BATCH_SIZE = 100;
// the review covers the frequency phases (ranks up to 1600)
const LAST_RANK = 1600;

// A proposals file past the last rank window (review/proposals/batch-17.mjs) makes a batch of its own: the entries the
// frequency phases did not have (the new proposed composites), listed in its `extras`, with an optional `title` and `carriedLabel`.
function lastBatch() {
  const dir = resolve(DIR, 'proposals');
  const named = existsSync(dir) ? readdirSync(dir).map((f) => /^batch-(\d+)\.mjs$/.exec(f)?.[1]).filter(Boolean).map(Number) : [];
  return Math.max(Math.ceil(LAST_RANK / BATCH_SIZE), ...named);
}

// the composite review's files are batch-<n>.json; the words and kinds reviews' are words-<n>.json, kinds-<n>.json
const decisionsPath = (n, prefix = 'batch') => resolve(DIR, 'decisions', `${prefix}-${n}.json`);

function readDecisions(n, prefix = 'batch') {
  const p = decisionsPath(n, prefix);
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf-8')).decisions ?? {} : {};
}

function writeDecisions(n, decisions, prefix = 'batch') {
  mkdirSync(dirname(decisionsPath(n, prefix)), { recursive: true });
  const byKey = prefix === 'batch' ? (a, b) => Number(a[0]) - Number(b[0]) : (a, b) => a[0].localeCompare(b[0]);
  const sorted = Object.fromEntries(Object.entries(decisions).sort(byKey));
  writeFileSync(decisionsPath(n, prefix), JSON.stringify({ batch: n, decisions: sorted }, null, 2) + '\n');
}

// -- the words and kinds reviews --------------------------------------------------------------
// They read the knowledge base's source (scripts/kb.js, rebuilt when the data changes), which
// Node loads itself, not the dev server's module graph.

const loadNode = (file) => import(/* @vite-ignore */ pathToFileURL(resolve(ROOT, file)).href);

async function proposalsFor(mode, n) {
  const file = resolve(DIR, 'proposals', `${mode}-${n}.mjs`);
  return existsSync(file) ? (await import(`${pathToFileURL(file).href}?t=${Date.now()}`)).default ?? {} : {};
}

async function phase2Source() {
  const { openKb } = await loadNode('scripts/kb.js');
  return (await openKb()).source;
}

// -> the decision as it is saved, or throws Error(reason) for a request that can't be (a 400).
async function wordDecision(source, n, body) {
  const { id, status, forms, verdict, eng, rus, note } = body;
  if (!source.words[id]) throw new Error(`no word ${id}`);
  const { wordOp } = await loadNode('src/lib/kb/review.js');
  const d = {
    status,
    ...(forms?.length ? { forms } : {}),
    ...(verdict ? { verdict } : {}),
    ...(eng ? { eng } : {}),
    ...(rus ? { rus } : {}),
    ...(note ? { note } : {}),
    at: new Date().toISOString(),
  };
  // the same check the refactor list makes, so a decision that is saved can always be applied
  wordOp(source.words, id, d, (await proposalsFor('words', n))[id]);
  return d;
}

async function batchData(server, n) {
  const load = (p) => server.ssrLoadModule(p);
  const dictionary = (await load('/src/data/dictionary.ts')).default;
  const composites = (await load('/src/data/composites.ts')).default;
  const { compositeHeads, headHanzi } = await load('/src/lib/heads.js');
  const { naturalness, NATURALNESS } = await load('/src/lib/naturalness.js');
  const { resolveWordRefs } = await load('/src/lib/word-refs.js');
  const { buildWordIndex } = await load('/src/lib/dictionary-stats.js');
  const idx = buildWordIndex(dictionary);
  const words = dictionary.words;
  const { heads } = compositeHeads(dictionary, composites.entries);
  const fresh = async (file) => (existsSync(file) ? (await import(`${pathToFileURL(file).href}?t=${Date.now()}`)).default : {});
  const proposals = await fresh(resolve(DIR, 'proposals', `batch-${n}.mjs`));
  // synonyms Claude marked for this batch: zh -> [zh of the composites it means the same as]
  const proposalFile = resolve(DIR, 'proposals', `batch-${n}.mjs`);
  const proposalModule = existsSync(proposalFile) ? await import(`${pathToFileURL(proposalFile).href}?t=${Date.now()}`) : {};
  const synonyms = proposalModule.synonyms ?? {};
  // antonyms Claude marked for this batch: zh -> [zh of the composites it is the opposite of]
  const antonyms = proposalModule.antonyms ?? {};
  // entries from earlier batches that were never decided (or never reviewed): rank -> why they are here
  const extras = proposalModule.extras ?? {};
  // example sentences waiting to go in (plain pinyin), for entries without any yet
  const exampleDrafts = await fresh(resolve(DIR, 'examples', `batch-${n}.mjs`));
  const py = (f) => resolveWordRefs(f, idx);
  // a batch past the rank windows has only its extras
  const windowed = n <= Math.ceil(LAST_RANK / BATCH_SIZE);
  const from = windowed ? (n - 1) * BATCH_SIZE + 1 : 0;
  const to = windowed ? n * BATCH_SIZE : -1;
  // every composite that says it the same way (any form in common), so the
  // synonyms can be seen and kept consistent: form text -> [entry]
  const byForm = new Map();
  for (const e of composites.entries) {
    for (const f of e.hsd ? e.hsd.split(' / ').map(py) : []) {
      if (!byForm.has(f)) byForm.set(f, []);
      byForm.get(f).push(e);
    }
  }
  const sameAs = (e, forms) => {
    const seen = new Map();
    for (const f of forms) for (const o of byForm.get(f) ?? []) if (o.zh !== e.zh) seen.set(o.zh, { zh: o.zh, rank: o.rank, en: o.en });
    return [...seen.values()].sort((a, b) => a.rank - b.rank);
  };
  const entries = composites.entries
    .filter((e) => (e.rank >= from && e.rank <= to) || extras[e.rank])
    .sort((a, b) => a.rank - b.rank)
    .map((e) => {
      const h = heads.get(e.zh);
      const now = { forms: e.hsd ? e.hsd.split(' / ').map(py) : [], tts: e.tts ? e.tts.split(' / ') : [], score: naturalness(e, headHanzi(h, words)) };
      const p = proposals[e.zh];
      const prop = p
        ? { forms: p.hsd.map(py), tts: p.tts, why: p.why, score: naturalness({ ...e, hsd: p.hsd.join(' / '), tts: p.tts.join(' / ') }, headHanzi(h, words)) }
        : null;
      const drafts = exampleDrafts[e.zh];
      // a proposed new form comes with new draft sentences, which replace the old ones
      const examples = drafts && (p || !e.examples?.length)
        ? { proposed: true, list: drafts.map(([pinyin, hanzi, en]) => ({ pinyin: py(pinyin), hanzi, en })) }
        : e.examples?.length
          ? { proposed: false, list: e.examples.map((x) => ({ pinyin: py(x.pinyin), hanzi: x.hanzi, en: x.en })) }
          : null;
      now.same = sameAs(e, now.forms);
      if (prop) prop.same = sameAs(e, prop.forms);
      const syn = (synonyms[e.zh] ?? [])
        .map((z) => composites.entries.find((o) => o.zh === z))
        .filter(Boolean)
        .map((o) => ({ zh: o.zh, rank: o.rank, en: o.en, forms: o.hsd ? o.hsd.split(' / ').map(py) : [] }));
      const ant = (antonyms[e.zh] ?? [])
        .map((z) => composites.entries.find((o) => o.zh === z))
        .filter(Boolean)
        .map((o) => ({ zh: o.zh, rank: o.rank, en: o.en, forms: o.hsd ? o.hsd.split(' / ').map(py) : [] }));
      return { rank: e.rank, zh: e.zh, py: e.py, en: e.en, ru: e.ru, now, prop, examples, syn, ant, ...(extras[e.rank] ? { carried: extras[e.rank] } : {}) };
    });
  return {
    n,
    from,
    to,
    batches: lastBatch(),
    ...(proposalModule.title ? { title: proposalModule.title } : {}),
    ...(proposalModule.carriedLabel ? { carriedLabel: proposalModule.carriedLabel } : {}),
    scale: Object.fromEntries(Object.entries(NATURALNESS).map(([k, v]) => [k, v.eng])),
    entries,
    decisions: readDecisions(n),
  };
}

// -- the WordNet sense search ------------------------------------------------------------------
// The English index (17 MB) is read on the first search and again only when the file changes (npm run wordnet rebuilds it
// while the dev server runs). Its words list their senses most common first.

const INDEX_PATH = resolve(ROOT, 'kb/cache/english-index.json');
const MAX_FOUND = 12;
let englishIndex = null; // { mtime, index }

function readEnglishIndex() {
  if (!existsSync(INDEX_PATH)) return null;
  const mtime = statSync(INDEX_PATH).mtimeMs;
  if (englishIndex?.mtime !== mtime) englishIndex = { mtime, index: JSON.parse(readFileSync(INDEX_PATH, 'utf-8')) };
  return englishIndex.index;
}

// a sense in the shape of a review candidate, or null for an id the index does not have
function senseOf(index, ili) {
  if (!Object.hasOwn(index.synsets, ili)) return null;
  const s = index.synsets[ili];
  return { ili, pos: s.p, def: s.d, lemmas: s.l.slice(0, 4) };
}

// -> { senses, total, note? } for an English word or phrase: the senses of the word itself (cats finds cat), else of the
// longer phrases that have it as a part ("ice" -> "ice cream"), else of the last word of a phrase ("cooked rice" -> rice)
async function findSenses(index, q) {
  const { baseForms } = await loadNode('src/lib/kb/english.js');
  // the index lowercases its words, so "ICE" (an engine) is also "ice": the senses that have the word as it is written come first
  const own = (word) => {
    for (const form of baseForms(word)) {
      if (!Object.hasOwn(index.lemmas, form)) continue;
      const plain = (i) => index.synsets[i]?.l.includes(form);
      return [...index.lemmas[form]].sort((a, b) => Number(!!plain(b)) - Number(!!plain(a)));
    }
    return [];
  };
  const query = q.trim().toLowerCase().replace(/\s+/g, ' ');
  const words = query.split(' ');
  let ilis = own(query);
  if (!ilis.length && words.length > 1 && /^(to|a|an|the)$/.test(words[0])) ilis = own(words.slice(1).join(' '));
  let note;
  if (!ilis.length) {
    const longer = Object.keys(index.lemmas).filter((k) => (' ' + k + ' ').includes(' ' + query + ' ')).sort((a, b) => a.length - b.length);
    ilis = [...new Set(longer.flatMap((k) => index.lemmas[k]))];
    if (ilis.length) note = `No sense is named "${query}" itself; these are senses of longer phrases that have it in them.`;
  }
  if (!ilis.length && words.length > 1) {
    ilis = own(words.at(-1));
    if (ilis.length) note = `No sense is named "${query}"; these are the senses of its last word, "${words.at(-1)}".`;
  }
  if (!ilis.length) note = `WordNet has no sense for "${query}". Try a simpler word, or the singular.`;
  return { senses: ilis.slice(0, MAX_FOUND).map((i) => senseOf(index, i)).filter(Boolean), total: ilis.length, ...(note ? { note } : {}) };
}

function send(res, status, type, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', type);
  res.end(body);
}

const json = (res, value, status = 200) => send(res, status, 'application/json; charset=utf-8', JSON.stringify(value));

async function readBody(req) {
  let s = '';
  for await (const chunk of req) s += chunk;
  return JSON.parse(s || '{}');
}

export default function reviewPlugin() {
  return {
    name: 'composite-review',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__review', async (req, res) => {
        try {
          const url = new URL(req.url ?? '/', 'http://localhost');
          if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '')) {
            const page = url.searchParams.has('relations') ? 'relations.html' : url.searchParams.has('wordnet') ? 'wordnet.html' : url.searchParams.has('words') || url.searchParams.has('kinds') ? 'words.html' : 'page.html';
            return send(res, 200, 'text/html; charset=utf-8', readFileSync(resolve(DIR, page), 'utf-8'));
          }
          const batchOf = () => Math.max(1, Number(url.searchParams.get('batch')) || 1);
          if (req.method === 'GET' && url.pathname === '/words-data') {
            const n = batchOf();
            const { wordBatch } = await loadNode('src/lib/kb/review.js');
            const batch = wordBatch(await phase2Source(), n, { proposals: await proposalsFor('words', n), decisions: readDecisions(n, 'words') });
            return json(res, batch);
          }
          if (req.method === 'GET' && url.pathname === '/kinds-data') {
            const n = batchOf();
            const { kindsBatch } = await loadNode('src/lib/kb/review.js');
            return json(res, kindsBatch(await phase2Source(), n, { proposals: await proposalsFor('kinds', n), decisions: readDecisions(n, 'kinds') }));
          }
          if (req.method === 'POST' && url.pathname === '/words-check') {
            const { id, forms } = await readBody(req);
            const { checkParaphrase } = await loadNode('src/lib/kb/review.js');
            const source = await phase2Source();
            if (!source.words[id]) return json(res, { error: `no word ${id}` }, 400);
            return json(res, checkParaphrase(source.words, id, forms));
          }
          if (req.method === 'POST' && url.pathname === '/words-decide') {
            const body = await readBody(req);
            const n = Number(body.batch);
            if (!n || !body.id) return json(res, { error: 'batch and id are required' }, 400);
            const decisions = readDecisions(n, 'words');
            if (!body.status) delete decisions[body.id];
            else {
              try {
                decisions[body.id] = await wordDecision(await phase2Source(), n, body);
              } catch (e) {
                return json(res, { error: String(e.message ?? e) }, 400);
              }
            }
            writeDecisions(n, decisions, 'words');
            return json(res, { decisions });
          }
          if (req.method === 'GET' && url.pathname === '/relations-data') {
            const { relationKey, KIND_NOTES } = await loadNode('src/lib/kb/relations.js');
            const { openKb } = await loadNode('scripts/kb.js');
            const report = (await openKb()).relations();
            const decisions = readDecisions(1, 'relations');
            const waiting = report.relations.filter((r) => r.status === 'proposed');
            // a decision made earlier is applied by the next load, so the page shows it as taken (accepted) or dropped
            const decided = [...report.relations.filter((r) => decisions[relationKey(r)]), ...report.rejected.filter((r) => decisions[relationKey(r)])];
            return json(res, { notes: KIND_NOTES, decisions, relations: [...waiting, ...decided].map((r) => ({ key: relationKey(r), ...r })) });
          }
          if (req.method === 'GET' && url.pathname === '/wordnet-data') {
            const links = JSON.parse(readFileSync(resolve(ROOT, 'kb/wordnet/links.json'), 'utf-8'));
            return json(res, { counts: links.counts, review: links.review, decisions: readDecisions(1, 'wordnet'), proposals: await proposalsFor('wordnet', 1), noSense: links.noSense ?? [] });
          }
          if (req.method === 'GET' && url.pathname === '/wordnet-search') {
            const q = (url.searchParams.get('q') ?? '').trim();
            const ilis = (url.searchParams.get('ili') ?? '').split(',').map((s) => s.trim()).filter(Boolean);
            if (!q && !ilis.length) return json(res, { error: 'q or ili is required' }, 400);
            const index = readEnglishIndex();
            if (!index) return json(res, { error: 'The English word list is not built yet, so senses cannot be searched. Build it once with: npm run wordnet' }, 503);
            if (ilis.length) return json(res, { senses: ilis.map((i) => senseOf(index, i)).filter(Boolean) });
            return json(res, { q, ...(await findSenses(index, q)) });
          }
          if (req.method === 'POST' && url.pathname === '/wordnet-decide') {
            const body = await readBody(req);
            const items = body.items ?? [body];
            const decisions = readDecisions(1, 'wordnet');
            for (const { zh, ilis } of items) {
              if (!zh) return json(res, { error: 'zh is required' }, 400);
              if (ilis === null || ilis === undefined) delete decisions[zh];
              else if (!Array.isArray(ilis)) return json(res, { error: 'ilis must be a list' }, 400);
              else decisions[zh] = { ilis, at: new Date().toISOString() };
            }
            writeDecisions(1, decisions, 'wordnet');
            return json(res, { decisions });
          }
          if (req.method === 'POST' && url.pathname === '/relations-decide') {
            const { key, status, note } = await readBody(req);
            if (!key) return json(res, { error: 'key is required' }, 400);
            const decisions = readDecisions(1, 'relations');
            if (!status) delete decisions[key];
            else {
              if (!['accept', 'reject'].includes(status)) return json(res, { error: `unknown status ${status}` }, 400);
              decisions[key] = { status, ...(note ? { note } : {}), at: new Date().toISOString() };
            }
            writeDecisions(1, decisions, 'relations');
            return json(res, { decisions });
          }
          if (req.method === 'POST' && url.pathname === '/kinds-decide') {
            const { batch, zh, status, note } = await readBody(req);
            const n = Number(batch);
            if (!n || !zh) return json(res, { error: 'batch and zh are required' }, 400);
            const decisions = readDecisions(n, 'kinds');
            if (!status) delete decisions[zh];
            else {
              if (!['built', 'spelled'].includes(status)) return json(res, { error: `unknown status ${status}` }, 400);
              decisions[zh] = { status, ...(note ? { note } : {}), at: new Date().toISOString() };
            }
            writeDecisions(n, decisions, 'kinds');
            return json(res, { decisions });
          }
          if (req.method === 'GET' && url.pathname === '/data') {
            const n = Math.max(1, Number(url.searchParams.get('batch')) || 1);
            return json(res, await batchData(server, n));
          }
          if (req.method === 'POST' && url.pathname === '/decide') {
            const { batch, rank, zh, status, form, note } = await readBody(req);
            const n = Number(batch);
            if (!n || !rank) return json(res, { error: 'batch and rank are required' }, 400);
            const decisions = readDecisions(n);
            if (!status) delete decisions[rank];
            else {
              if (!['approve', 'keep', 'edit'].includes(status)) return json(res, { error: `unknown status ${status}` }, 400);
              decisions[rank] = { zh, status, ...(form ? { form } : {}), ...(note ? { note } : {}), at: new Date().toISOString() };
            }
            writeDecisions(n, decisions);
            return json(res, { decisions });
          }
          json(res, { error: 'not found' }, 404);
        } catch (e) {
          server.config.logger.error(`review: ${e.stack ?? e}`);
          json(res, { error: String(e.message ?? e) }, 500);
        }
      });
    },
  };
}
