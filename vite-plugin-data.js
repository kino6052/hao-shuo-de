// Keeps the generated index files of src/data/ (words/, composites/,
// coverage/) in step with their folders while `npm run dev` runs: adding or
// deleting a word or composite file rewrites its index, which Vite then
// hot-reloads like any edit. Also rewrites them once at startup and before a
// build, so a fresh file never needs a manual `npm run data`.
import { resolve, sep } from 'path';
import { buildData } from './scripts/build-data.js';

const FOLDERS = ['words', 'composites', 'coverage'].map((f) => `${sep}src${sep}data${sep}${f}${sep}`);

function rebuild(log) {
  const wrote = buildData();
  if (wrote.length && log) log(`data: rewrote ${wrote.map((p) => p.split(`${sep}src${sep}`)[1]).join(', ')}`);
}

export default function dataPlugin() {
  return {
    name: 'data-indexes',
    buildStart() {
      rebuild();
    },
    configureServer(server) {
      const log = (m) => server.config.logger.info(m, { timestamp: true });
      const onChange = (file) => {
        const path = resolve(file);
        if (path.endsWith(`${sep}index.ts`)) return;
        if (FOLDERS.some((f) => path.includes(f))) rebuild(log);
      };
      server.watcher.on('add', onChange);
      server.watcher.on('unlink', onChange);
    },
  };
}
