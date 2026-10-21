// The live plan page, served by the dev server only (`npm run dev`, then /__plan/). It shows a checklist
// file (AKINATOR_PLAN.md by default, or any *_PLAN.md at the top of the app) as a tree with its progress,
// and reads the file again every two seconds, so the author sees each step Claude ticks while it works.
// The parser is src/lib/plan-tree.js; the page is review/plan.html.
//
//   GET /__plan/                          the page (?file=KB_PLAN.md for another plan)
//   GET /__plan/files                     the plan files: [name]
//   GET /__plan/data?file=&since=         { file, mtime, tree }, or { file, mtime, same: true } when the file's
//                                         time is still `since`

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { planTree } from './src/lib/plan-tree.js';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PAGE = resolve(ROOT, 'review', 'plan.html');
const DEFAULT_FILE = 'AKINATOR_PLAN.md';
// only a plan file at the top of the app, never a path
const PLAN_FILE = /^[A-Z0-9_]+_PLAN\.md$/;

function send(res, status, type, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', type);
  res.setHeader('Cache-Control', 'no-store');
  res.end(body);
}

const json = (res, value, status = 200) => send(res, status, 'application/json; charset=utf-8', JSON.stringify(value));

export const planFiles = () => readdirSync(ROOT).filter((f) => PLAN_FILE.test(f)).sort();

export default function planPlugin() {
  return {
    name: 'live-plan',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__plan', (req, res) => {
        try {
          const url = new URL(req.url ?? '/', 'http://localhost');
          if (req.method !== 'GET') return json(res, { error: 'not found' }, 404);
          if (url.pathname === '/' || url.pathname === '') return send(res, 200, 'text/html; charset=utf-8', readFileSync(PAGE, 'utf-8'));
          if (url.pathname === '/files') return json(res, planFiles());
          if (url.pathname === '/data') {
            const file = url.searchParams.get('file') || DEFAULT_FILE;
            const path = resolve(ROOT, file);
            if (!PLAN_FILE.test(file) || !existsSync(path)) return json(res, { error: `no plan file ${file}` }, 404);
            const mtime = statSync(path).mtimeMs;
            if (url.searchParams.get('since') === String(mtime)) return json(res, { file, mtime, same: true });
            return json(res, { file, mtime, tree: planTree(readFileSync(path, 'utf-8')) });
          }
          json(res, { error: 'not found' }, 404);
        } catch (e) {
          server.config.logger.error(`plan: ${e.stack ?? e}`);
          json(res, { error: String(e.message ?? e) }, 500);
        }
      });
    },
  };
}
