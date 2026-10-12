// Runs loadSource() in a worker thread. Each worker has its own module cache,
// so a new worker reads the data files as they are now; the process that
// started it keeps running with no restart (scripts/kb.js, `reloadSource`).

import { parentPort } from 'worker_threads';
import { loadSource } from './kb-source.js';

try {
  parentPort.postMessage({ ok: true, source: await loadSource() });
} catch (e) {
  parentPort.postMessage({ ok: false, error: String(e?.stack ?? e) });
}
