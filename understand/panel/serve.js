// The side panel for yes/no mode (understand/README.md): a page beside the chat that shows what the person has
// settled so far as a tree they can fold, and how far they have got. The agent writes understand/state.json after
// every reply and the page reads it every second, so the chat can show only what changed. Nothing here changes data.
//
//   node understand/panel/serve.js [--port 5188]   # then open http://localhost:5188
//
// The state file (git-ignored) looks like this; settled points nest at most three deep, and a point added by the
// latest answer carries "new": true (the page opens its branch and marks it; older branches fold). Each open item
// carries its hint, a question that points at the gap without giving the answer. "critic" keeps every question the
// Critic has asked, oldest first, so they can be looked up ("answered" once the person has taken one up). "ladder" is
// the chain of questions behind the page's "I feel stuck" button, wide to narrow, each with a hint:
//   { "topic": "kb english", "turn": 3, "progress": 35, "answer": "No", "cut": "big",
//     "settled": [{ "text": "it works offline" }, { "text": "it reads more than one thing", "children": [{ "text": "…", "new": true }] }],
//     "open": [{ "text": "what else it reads", "hint": "If a word is in no entry's English text, what else could still lead you to an entry?", "new": true }],
//     "critic": [{ "turn": 2, "text": "One answer and you call it settled. What would you have noticed if it did use the internet?", "answered": true },
//                { "turn": 3, "text": "So it reads more than one thing. Suppose they disagree. Which would you trust, and why?", "new": true }],
//     "ladder": [{ "ask": "Does the other thing live inside this project?", "hint": "It works offline. Where does a program keep what it reads when it cannot ask anyone?" }] }

import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const STATE_FILE = resolve(HERE, '..', 'state.json');
export const EMPTY = { topic: null, turn: 0, progress: 0, settled: [], open: [], critic: [], ladder: [] };

// -> a function that gives the state: the file as it reads now, the empty state when there is no file, and the last
// good copy while the file is half written
export function stateReader(file = STATE_FILE) {
  let last = EMPTY;
  return () => {
    try {
      last = JSON.parse(readFileSync(file, 'utf8'));
    } catch (e) {
      if (e.code === 'ENOENT') last = EMPTY;
    }
    return last;
  };
}

// -> { status, type, body } for a path; `state()` and `page()` give the two things it serves
export function respond(path, { state, page }) {
  if (path === '/' || path === '/index.html') return { status: 200, type: 'text/html; charset=utf-8', body: page() };
  if (path === '/state') return { status: 200, type: 'application/json', body: JSON.stringify(state()) };
  return { status: 404, type: 'text/plain; charset=utf-8', body: 'Not found' };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const at = process.argv.indexOf('--port');
  const port = Number(at > 0 ? process.argv[at + 1] : process.env.PORT) || 5188;
  const state = stateReader();
  const page = () => readFileSync(join(HERE, 'index.html'), 'utf8');
  createServer((req, res) => {
    const r = respond(new URL(req.url, 'http://localhost').pathname, { state, page });
    res.writeHead(r.status, { 'Content-Type': r.type, 'Cache-Control': 'no-store' });
    res.end(r.body);
  }).listen(port, '127.0.0.1', () => console.log(`understand panel: http://localhost:${port}`));
}
