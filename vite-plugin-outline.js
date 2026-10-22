// Serves `virtual:book-outline`: the book's outline from scripts/book-outline.js (every chapter's id, type,
// title, number and file, per language), which is all of the book the app's first chunk carries; a chapter's
// text is its own chunk, fetched when it opens (src/lib/content-registry.js).
//
// It is worked out in a child process (about 2 s), so a chapter edited while the dev server runs is read fresh:
// Node keeps a module it has imported once. The dev server works it out again only when a title can have
// changed: a file directly in src/content/, a lesson's or an intro's index.ts, or one added or removed there.

import { execFile } from 'node:child_process';
import { resolve } from 'node:path';

const ID = 'virtual:book-outline';
const RESOLVED = '\0' + ID;
const TITLED = /[\\/]src[\\/]content[\\/](?:[^\\/]+|(?:lessons|intros)[\\/][^\\/]+[\\/]index\.ts)$/;

export default function outlinePlugin() {
  let root = process.cwd();
  let outline = null; // a promise of the outline's JSON

  const work = () =>
    (outline ??= new Promise((done, fail) => {
      execFile(process.execPath, [resolve(root, 'scripts/book-outline.js')], { cwd: root, maxBuffer: 64 << 20 }, (error, stdout, stderr) =>
        error ? fail(new Error(`scripts/book-outline.js failed:\n${stderr || error.message}`)) : done(stdout),
      );
    }).catch((e) => {
      outline = null;
      throw e;
    }));

  // drops the outline and hands back its module, so the page that shows it updates
  const stale = (server) => {
    outline = null;
    const mod = server.moduleGraph.getModuleById(RESOLVED);
    if (mod) server.moduleGraph.invalidateModule(mod);
    return mod;
  };

  return {
    name: 'book-outline',
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      return id === ID ? RESOLVED : null;
    },
    async load(id) {
      if (id === RESOLVED) return `export default ${await work()};`;
    },
    handleHotUpdate({ file, server, modules }) {
      if (!TITLED.test(file)) return;
      const mod = stale(server);
      return mod ? [...modules, mod] : undefined;
    },
    configureServer(server) {
      const changed = (file) => {
        if (TITLED.test(file) && stale(server)) server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', changed);
      server.watcher.on('unlink', changed);
    },
  };
}
