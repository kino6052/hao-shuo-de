// The composite review, served by the dev server only (`npm run dev`, then
// /__review/?batch=1). The composites are reviewed by hand in batches of 100
// by rank: Claude's proposals for a batch are review/proposals/batch-<n>.mjs
// and its example sentences review/examples/batch-<n>.mjs; the page
// (review/page.html) shows each entry's current forms, the proposal with how
// close each is to Mandarin, and the examples; every decision the author
// makes is written at once to review/decisions/batch-<n>.json, which Claude
// reads to apply the batch. A proposals file may also export `extras` (rank ->
// why), entries of earlier batches that were never decided or reviewed; they
// are shown with the batch, marked "carried over".
//
//   GET  /__review/                 the page
//   GET  /__review/data?batch=n     the batch: entries, proposals, decisions
//   POST /__review/decide           { batch, rank, zh, status, form?, note? }
//                                   (status null clears the decision)

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIR = resolve(ROOT, 'review');
export const BATCH_SIZE = 100;
// the review covers the frequency phases (ranks up to 1600)
const LAST_RANK = 1600;

const decisionsPath = (n) => resolve(DIR, 'decisions', `batch-${n}.json`);

function readDecisions(n) {
  const p = decisionsPath(n);
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf-8')).decisions ?? {} : {};
}

function writeDecisions(n, decisions) {
  mkdirSync(dirname(decisionsPath(n)), { recursive: true });
  const sorted = Object.fromEntries(Object.entries(decisions).sort((a, b) => Number(a[0]) - Number(b[0])));
  writeFileSync(decisionsPath(n), JSON.stringify({ batch: n, decisions: sorted }, null, 2) + '\n');
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
  const from = (n - 1) * BATCH_SIZE + 1;
  const to = n * BATCH_SIZE;
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
    batches: Math.ceil(LAST_RANK / BATCH_SIZE),
    scale: Object.fromEntries(Object.entries(NATURALNESS).map(([k, v]) => [k, v.eng])),
    entries,
    decisions: readDecisions(n),
  };
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
            return send(res, 200, 'text/html; charset=utf-8', readFileSync(resolve(DIR, 'page.html'), 'utf-8'));
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
