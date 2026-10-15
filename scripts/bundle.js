// The bundle of the dictionary's data files that scripts/fast-data.js serves: which files it holds, where it lives, how it is built.
//
//   bundleFile()     -> the path of the bundle for the files as they are now (it may not exist yet)
//   ensureBundle()   -> that path, built if need be (null if the build fails)
//   entries()        -> the data entry files it replaces (absolute paths, in a fixed order)
//   entryIds()       -> Map: entry file (normalised) -> its name in the bundle ("e0", "e1", ...)
//
// One file, not one per entry: a file that was just written costs about ten milliseconds the first time it is read
// (the system looks it over), whatever its size, so a bundle of 320 files cost three seconds after every change and a bundle
// of one costs nothing. The file exports each entry as a namespace: `export * as e0 from '<first entry>'`, and so on.

import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'fs';
import { createRequire } from 'module';
import { resolve } from 'path';
import { CACHE_DIR } from './cache.js';
import { ROOT, handedDown, stampOf } from './stamp.js';

export const norm = (p) => p.replace(/\\/g, '/').toLowerCase();

// -> the files a script imports as a whole data set (absolute paths)
export function entries() {
  const out = [];
  const add = (rel) => existsSync(resolve(ROOT, rel)) && out.push(resolve(ROOT, rel));
  for (const f of ['dictionary', 'composites', 'coverage']) add(`src/data/${f}.ts`);
  for (const d of ['words', 'composites', 'coverage', 'grammar']) add(`src/data/${d}/index.ts`);
  for (const f of readdirSync(resolve(ROOT, 'src/data/maps')).sort()) if (f.endsWith('.ts')) add(`src/data/maps/${f}`);
  for (const f of ['phrase-book', 'appendix-stories', 'appendix-grammar']) add(`src/content/${f}.ts`);
  // intros and lessons: one folder each, every .ts file in it
  for (const group of ['intros', 'lessons']) {
    const dir = resolve(ROOT, 'src/content', group);
    for (const d of readdirSync(dir).sort()) {
      if (!statSync(resolve(dir, d)).isDirectory()) continue;
      for (const f of readdirSync(resolve(dir, d)).sort()) if (f.endsWith('.ts')) out.push(resolve(dir, d, f));
    }
  }
  return out;
}

// -> Map: entry file (normalised) -> "e<n>", the name it has in the bundle
export const entryIds = () => new Map(entries().map((f, i) => [norm(f), `e${i}`]));

const bundleRoot = () => resolve(CACHE_DIR, 'bundle');
export const bundleStamp = () => handedDown('bundle', () => stampOf(['src/data', 'src/content', 'src/lib', 'package.json']).slice(0, 16));

// -> the bundle for the files as they are (it may not be built yet)
export const bundleFile = () => resolve(bundleRoot(), `${bundleStamp()}.mjs`);

// -> the bundle for the files as they are (built if need be), or null
export function ensureBundle() {
  try {
    const file = bundleFile();
    if (existsSync(file)) return file; // a file only appears when the bundle is whole (it is renamed into place)
    const esbuild = createRequire(import.meta.url)('esbuild');
    const root = bundleRoot();
    const tmp = `${file}.${process.pid}.tmp`;
    mkdirSync(root, { recursive: true });
    esbuild.buildSync({
      stdin: {
        contents: entries()
          .map((f, i) => `export * as e${i} from ${JSON.stringify(f)};`)
          .join('\n'),
        resolveDir: ROOT,
        loader: 'js',
      },
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile: tmp,
      logLevel: 'silent',
    });
    try {
      renameSync(tmp, file);
    } catch {
      rmSync(tmp, { force: true }); // another script finished first
      if (!existsSync(file)) return null;
    }
    try {
      for (const old of readdirSync(root)) if (resolve(root, old) !== file && !old.endsWith('.tmp')) rmSync(resolve(root, old), { recursive: true, force: true });
    } catch {
      /* an old bundle another script is still reading stays until next time */
    }
    return file;
  } catch {
    return null;
  }
}
