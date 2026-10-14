// A preload for the scripts that read the whole dictionary: it serves the data files from one bundle.
//
//   node --import ./scripts/fast-data.js scripts/check-sounds.js        (a file:// URL on Windows)
//
// Why: the dictionary is 2,000 small files (231 words, 1,557 composites, the lessons). Reading them takes a script three
// to five seconds, and several scripts at once queue up on the disk. esbuild turns them into one file in about a second
// (scripts/bundle.js); this preload loads that file and makes `import '../src/data/dictionary.ts'` and the other entry
// files (the composites, the grammar, the maps, every lesson) hand out what the bundle holds. The bundle lives in
// .cache/bundle/<stamp>.mjs, named by a stamp of src (scripts/stamp.js), so it is built once per change, by whichever
// script comes first, and thrown away when the files change. If anything goes wrong (a data file with a syntax error),
// nothing is redirected and the script reads the real files and reports the real error.
// HSD_NO_BUNDLE=1 turns this off.
//
// How: a resolve hook sends each entry file to a module named hsd-entry:<id>, and a load hook writes that module's
// source -- one line per export, each taken from the bundle. The bundle holds its own copy of the helpers under
// src/lib that the data uses; they are plain functions.

import { registerHooks } from 'module';
import { pathToFileURL } from 'url';
import { ensureBundle, entries } from './bundle.js';

const SCHEME = 'hsd-entry:';
const NAME = /^[A-Za-z_$][\w$]*$/;

if (process.env.HSD_NO_BUNDLE !== '1') {
  const file = ensureBundle();
  if (file) {
    const bundle = await import(pathToFileURL(file).href);
    globalThis.__hsdBundle = bundle;
    const ids = new Map(entries().map((f, i) => [pathToFileURL(f).href.toLowerCase(), `e${i}`]));
    const source = (id) =>
      Object.keys(bundle[id])
        .map((name) => (name === 'default' ? `export default globalThis.__hsdBundle.${id}.default;` : NAME.test(name) ? `export const ${name} = globalThis.__hsdBundle.${id}.${name};` : ''))
        .join('\n');
    registerHooks({
      resolve(specifier, context, nextResolve) {
        const r = nextResolve(specifier, context);
        const id = ids.get(r.url.toLowerCase());
        return id ? { ...r, url: `${SCHEME}${id}`, format: 'module', shortCircuit: true } : r;
      },
      load(url, context, nextLoad) {
        return url.startsWith(SCHEME) ? { format: 'module', source: source(url.slice(SCHEME.length)), shortCircuit: true } : nextLoad(url, context);
      },
    });
  }
}
