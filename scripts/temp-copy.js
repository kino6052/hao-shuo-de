// A throwaway copy of the repo to run scripts in without touching the real files
// (refactor-check.js: a change tried on a copy; parse-diff.js: the repo as it was at a git ref).
//
//   const copy = newCopy();           a fresh folder in the system temp folder, node_modules linked in
//   copy.dir                          its path
//   copy.remove()                     delete it (the link first, so node_modules is never touched)

import { existsSync, mkdtempSync, rmSync, rmdirSync, symlinkSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { ROOT } from './refactor-lib.js';

export function newCopy(prefix = 'hsd-copy-') {
  const dir = mkdtempSync(join(tmpdir(), prefix));
  const link = join(dir, 'node_modules');
  let linked = false;
  const copy = {
    dir,
    // call after the files are in: a copy that copies node_modules itself would be 400 MB
    linkModules() {
      if (!linked && existsSync(join(ROOT, 'node_modules'))) (symlinkSync(join(ROOT, 'node_modules'), link, 'junction'), (linked = true));
    },
    remove() {
      // the link first: removing it must never reach into the real node_modules
      if (linked) {
        try {
          rmdirSync(link);
        } catch {
          return false;
        }
      }
      rmSync(dir, { recursive: true, force: true });
      return true;
    },
  };
  return copy;
}
