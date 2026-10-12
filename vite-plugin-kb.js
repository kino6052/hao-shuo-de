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
          const { renderCard, renderRemoval, renderParse, viewParse, renderAtoms, renderAtomWord } = await load('src/lib/kb/kb.js');
          const kb = await openKb();
          switch (url.pathname) {
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
              const hidden = { spelled: report.hidden.spelled.length, undecided: report.hidden.undecided.length };
              if (!get('name')) return json(res, { counts, hidden, text: renderAtoms(report) });
              const line = await kb.atoms(get('name'));
              return json(res, { counts, hidden, line, text: renderAtomWord(report, line) });
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
          const known = /no word|could be|usage|nothing|unknown/i.test(String(e.message));
          if (!known) server.config.logger.error(`kb: ${e.stack ?? e}`);
          json(res, { error: String(e.message ?? e) }, known ? 400 : 500);
        }
      });
    },
  };
}
