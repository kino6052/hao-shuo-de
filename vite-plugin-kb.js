// The knowledge-base explorer, served by the dev server only (`npm run dev`,
// then /__kb/). It asks the same KB the command line and the Claude tools ask
// (scripts/kb.js), so the three always agree; the KB is rebuilt when a data,
// content or rule file changes. The page is kb/page.html.
//
//   GET /__kb/                    the page
//   GET /__kb/find?q=             words matching a name: [{ id, term, hanzi, pos }]
//   GET /__kb/word?name=          { card, text }
//   GET /__kb/remove?names=a,b    { report, text }: what happens if we drop them
//   GET /__kb/parse?text=         { view, text }: does it parse, and how
//   GET /__kb/atoms?name=         { counts, hidden, line?, text }: which words are atoms; with a
//                                 name, that word's line (its sort and how it is said)
//   GET /__kb/candidates          { remove, roots, swaps, text }: the cheapest words to drop, the best roots to add
//                                 and the best trades of 1, 2 and 3 (the audit, as data)
//   GET /__kb/add?root=           { report, text }: what one hanzi would bring as a root
//   GET /__kb/relations?kind=     { counts, kinds, text }: the relations the data states or implies
//   GET /__kb/meaning?name=       { groups, atoms, text }: what the words say of the primes, categories and grammar items, and what
//                                 their descriptions reach; a name is a word, or says / atoms / grounding for one part
//   GET /__kb/tags?tag=|of=|common=a,b|find=|check=1|kinds=1   { text, ids }: the tag nets (topic and kind): the tree, one tag's
//                                 members, where an entry sits, what two share; ids are every tag id, to make links
//   GET /__kb/akinator?answers=a=yes,b=no&hint=&finish=1   the Akinator (src/lib/kb/akinator-ask.js): the stage (first, question
//                                 or result), the question with its choices, the leaders or the result, and the text
//   GET /__kb/lessons?cmd=lesson|grammar|uses|similar|built&arg=   { cmd, text }: the lesson lookups (A2) and the build tags (A5)
//   GET /__kb/scoreboard          { now, rows, columns, text }: the language's numbers now, and the stored
//                                 rows (kb/scoreboard.csv) to chart them against
//
// The KB code is loaded by Node itself (not bundled with this config) so it
// reads the .ts data files the way the command line does.

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PAGE = resolve(ROOT, 'kb', 'page.html');
const SCOREBOARD = resolve(ROOT, 'kb', 'scoreboard.csv');

const load = (file) => import(/* @vite-ignore */ pathToFileURL(resolve(ROOT, file)).href);

function send(res, status, type, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', type);
  res.setHeader('Cache-Control', 'no-store');
  res.end(body);
}

const json = (res, value, status = 200) => send(res, status, 'application/json; charset=utf-8', JSON.stringify(value));

export default function kbPlugin() {
  return {
    name: 'knowledge-base',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__kb', async (req, res) => {
        try {
          const url = new URL(req.url ?? '/', 'http://localhost');
          const get = (k) => url.searchParams.get(k) ?? '';
          if (req.method !== 'GET') return json(res, { error: 'not found' }, 404);
          if (url.pathname === '/' || url.pathname === '') return send(res, 200, 'text/html; charset=utf-8', readFileSync(PAGE, 'utf-8'));

          const { openKb } = await load('scripts/kb.js');
          const { renderCard, renderRemoval, renderParse, viewParse, renderAtoms, renderAtomWord, renderRelations, renderAddition, renderRemovalCandidates, renderRootCandidates, renderSwaps } = await load('src/lib/kb/kb.js');
          // the Akinator and the lesson lookups read sentences by the thousand, so they use the parse memory (slim parses);
          // the cache is kept per mode, so switching between these tabs and the others rebuilds once
          const kb = await openKb({ memo: url.pathname === '/akinator' || url.pathname === '/lessons' });
          switch (url.pathname) {
            case '/akinator': {
              const { askAkinator } = await load('src/lib/kb/akinator-ask.js');
              const r = askAkinator(kb, { answers: get('answers'), hint: get('hint') || undefined, finish: get('finish') === '1', limit: Number(get('limit')) || 6 });
              return json(res, { ...r.data, text: r.text });
            }
            case '/lessons': {
              const { askLesson, askPatterns, askSimilar, askUses } = await load('src/lib/kb/lesson-lookup.js');
              const { askBuilt } = await load('src/lib/kb/build-tags.js');
              const cmd = get('cmd') || 'lesson';
              const arg = get('arg').trim() || undefined;
              const limit = Number(get('limit')) || undefined;
              const pool = () => kb.pool();
              const r = cmd === 'lesson' ? askLesson(pool(), kb.lessons(), { lesson: arg, limit })
                : cmd === 'grammar' ? askPatterns(pool(), kb.lessons(), arg && /^(cat|theme|lesson|grammar):/.test(arg) ? { tag: arg, limit } : { id: arg, limit })
                : cmd === 'uses' ? askUses(pool(), kb.lessons(), { word: arg, limit })
                : cmd === 'similar' ? askSimilar(pool(), kb.lessons(), { sentence: arg, limit })
                : cmd === 'built' ? askBuilt(kb.built(), arg ? { name: arg, limit } : { limit })
                : null;
              if (!r) return json(res, { error: `unknown command "${cmd}" (lesson, grammar, uses, similar or built)` }, 400);
              return json(res, { cmd, text: r.text });
            }
            case '/find':
              return json(res, kb.find(get('q')).slice(0, 12));
            case '/word': {
              const card = kb.word(get('name'));
              return json(res, { card, text: renderCard(card) });
            }
            case '/remove': {
              const report = await kb.remove(get('names'));
              return json(res, { report, text: renderRemoval(report) });
            }
            case '/atoms': {
              const report = await kb.atoms();
              const counts = { ...report.counts, smallest: report.smallest };
              const hidden = { spelled: report.hidden.spelled.length, undecided: report.hidden.undecided.length, bare: report.hidden.bare.length };
              if (!get('name')) return json(res, { counts, hidden, text: renderAtoms(report) });
              const line = await kb.atoms(get('name'));
              return json(res, { counts, hidden, line, text: renderAtomWord(report, line) });
            }
            case '/candidates': {
              const model = kb.candidates();
              const remove = model.removalCandidates({ drafts: kb.drafts });
              const roots = model.rootCandidates();
              const swaps = roots ? [1, 2, 3].map((k) => model.swaps({ k, drafts: kb.drafts })) : [];
              const text = [renderRemovalCandidates(remove, { limit: 30 }), renderRootCandidates(roots, { limit: 30 }), ...swaps.map(renderSwaps)].join('\n\n');
              return json(res, { remove: remove.slice(0, 60), total: remove.length, roots: roots?.slice(0, 60) ?? null, swaps, text });
            }
            case '/add': {
              const report = kb.candidates().addition(get('root'));
              return json(res, { report, text: renderAddition(report) });
            }
            case '/relations': {
              const report = kb.relations();
              const limit = Number(get('limit')) > 0 ? Number(get('limit')) : 12;
              const text = renderRelations(report, { kind: get('kind') || undefined, status: get('status') || undefined, limit });
              return json(res, { counts: report.counts, kinds: report.kinds, text });
            }
            case '/meaning': {
              const { renderMeaning, renderMeaningWord } = await load('src/lib/kb/meaning.js');
              const name = get('name');
              const words = kb.source.words;
              const limit = Number(get('limit')) > 0 ? Number(get('limit')) : 12;
              const report = kb.meaning();
              const summary = { groups: report.groups, atoms: { marked: report.atoms.marked, markedPrime: report.atoms.markedPrime.length, primeNotMarked: report.atoms.primeNotMarked.length, primeDescribed: report.atoms.primeDescribed.length }, traced: report.totals.words - report.grounding.unreached.length - report.grounding.unreachedAtoms.length, words: report.totals.words };
              if (name && !['says', 'atoms', 'grounding'].includes(name)) {
                const one = kb.meaning(name);
                return json(res, { ...summary, line: one.line, text: [one.term, renderMeaningWord(one.line, words)].join('\n') });
              }
              return json(res, { ...summary, text: renderMeaning(report, words, { section: name || 'all', limit }) });
            }
            case '/tags': {
              const { askTags } = await load('src/lib/kb/tags.js');
              const m = kb.tags();
              const ask = { tag: get('tag') || undefined, of: get('of') || undefined, common: get('common') ? get('common').split(',') : undefined, find: get('find') || undefined, check: get('check') === '1', kinds: get('kinds') === '1', limit: Number(get('limit')) || 100 };
              const { text } = askTags(m, ask);
              return json(res, { text, ids: [...m.nets.topic.ids, ...m.nets.kind.ids] });
            }
            case '/scoreboard': {
              const { scoreboardRow, readScoreboard, renderScoreboard, COLUMNS } = await load('src/lib/kb/scoreboard.js');
              const rows = readScoreboard(SCOREBOARD);
              const now = await scoreboardRow(kb, { atomsTimeoutMs: 45_000 });
              return json(res, { now, rows, columns: COLUMNS, text: renderScoreboard(now, rows) });
            }
            case '/parse': {
              const result = kb.parse(get('text'));
              return json(res, { view: viewParse(result, kb.source.words), text: renderParse(result, kb.source.words) });
            }
          }
          json(res, { error: 'not found' }, 404);
        } catch (e) {
          // a mistyped word is a 400 with its message; anything else is logged
          const known = /no word|no entry|no (topic|kind) tag|could be|usage|nothing|unknown|two entries/i.test(String(e.message));
          if (!known) server.config.logger.error(`kb: ${e.stack ?? e}`);
          json(res, { error: String(e.message ?? e) }, known ? 400 : 500);
        }
      });
    },
  };
}
