// Keeps the generated index files of src/data/ (words/, composites/,
// coverage/, grammar/) in step with their folders while `npm run dev` runs: adding or
// deleting a word or composite file rewrites its index, which Vite then
// hot-reloads like any edit. Also rewrites them once at startup and before a
// build, so a fresh file never needs a manual `npm run data`.
//
// It also hands out the composites as one module: composites/index.ts with
// every entry file bundled in by esbuild (about a second, then kept until a
// file in the folder changes). Fetched one by one, the 5,490 files took a
// browser about 17 s to open any page in dev. The helpers the entries import
// from src/lib stay ordinary modules, shared with the rest of the app.
import { relative, resolve, sep } from 'path';
import { build } from 'esbuild';
import { buildData } from './scripts/build-data.js';

const FOLDERS = ['words', 'composites', 'coverage', 'grammar'].map((f) => `${sep}src${sep}data${sep}${f}${sep}`);
const COMPOSITES = resolve('src/data/composites');
const INDEX = resolve(COMPOSITES, 'index.ts');
const same = (a, b) => resolve(a).toLowerCase() === b.toLowerCase();

// composite-units.ts waits for `npm run data` (check-data says when): finding
// the roles reads every composite file.
function rebuild(log) {
  const wrote = buildData({ unitFiles: false });
  if (wrote.length && log) log(`data: rewrote ${wrote.map((p) => p.split(`${sep}src${sep}`)[1]).join(', ')}`);
}

// -> the source of composites/index.ts with the entry files inside it; an
// import that leaves the folder becomes a path from the app's root.
let bundled = null;
function compositesModule(root) {
  bundled ??= build({
    entryPoints: [INDEX],
    bundle: true,
    write: false,
    format: 'esm',
    target: 'es2022',
    logLevel: 'silent',
    plugins: [{
      name: 'outside-the-folder',
      setup(b) {
        b.onResolve({ filter: /^\./ }, ({ path, resolveDir }) => {
          const file = resolve(resolveDir, path);
          if (file.startsWith(COMPOSITES + sep)) return null;
          return { path: `/${relative(root, file).split(sep).join('/')}`, external: true };
        });
      },
    }],
  }).then((r) => r.outputFiles[0].text);
  return bundled;
}

export default function dataPlugin() {
  let root = process.cwd();
  return {
    name: 'data-indexes',
    configResolved(config) {
      root = config.root;
    },
    buildStart() {
      rebuild();
    },
    async load(id) {
      if (!same(id.split('?')[0], INDEX)) return null;
      try {
        return { code: await compositesModule(root), map: null };
      } catch (e) {
        bundled = null;
        throw e;
      }
    },
    // An entry file is not a module of its own inside the index, so its
    // change reloads the index (and the file's own module, for a unit).
    handleHotUpdate({ file, server, modules }) {
      if (!resolve(file).startsWith(COMPOSITES + sep)) return;
      bundled = null;
      const index = server.moduleGraph.getModulesByFile(INDEX.split(sep).join('/'));
      return [...(index ?? []), ...modules];
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
