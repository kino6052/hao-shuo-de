// Keeps what a process reads of the repo in memory, so the second reader of a file does not go to the disk.
//
//   rememberFiles();      // from here on, fs.readFileSync (as text), readdirSync, statSync and existsSync remember their answers
//   forgetFiles();        // empties the memory
//
// Why: the gates that scan the repo (the sounds, the jargon, the passive, the word use ...) each walk and read the same two
// thousand files. When they run one after the other in one process (scripts/check-batch.js) the first reads them and the rest
// find them here. Only files under the repo are remembered (not .cache, node_modules, .git, dist); anything written to the
// repo outside .cache empties the memory at once, so a gate that writes a file and reads it back gets the new one.
// A process that needs to see its files change (a server, a watcher) must not call this.

import fs from 'fs';
import { syncBuiltinESMExports } from 'module';
import { resolve, sep } from 'path';
import { ROOT } from './stamp.js';

const SKIP = ['.cache', 'node_modules', '.git', 'dist'].map((d) => resolve(ROOT, d) + sep);
const inRepo = (p) => {
  if (typeof p !== 'string') return false;
  const full = resolve(p);
  return full.startsWith(ROOT + sep) && !SKIP.some((s) => full.startsWith(s));
};

const memory = new Map();
const original = {};

const textOf = (options) => {
  const encoding = typeof options === 'string' ? options : options?.encoding;
  return (encoding === 'utf8' || encoding === 'utf-8') && (typeof options === 'string' || (!options.flag && Object.keys(options).every((k) => k === 'encoding')));
};

// answers from memory when it can (`make` is the real call); errors are not remembered
function remembered(key, make) {
  if (memory.has(key)) return memory.get(key);
  const value = make();
  memory.set(key, value);
  return value;
}

export function forgetFiles() {
  memory.clear();
}

export function rememberFiles() {
  if (original.readFileSync) return;
  for (const name of ['readFileSync', 'readdirSync', 'statSync', 'existsSync', 'writeFileSync', 'appendFileSync', 'rmSync', 'mkdirSync', 'renameSync', 'unlinkSync', 'copyFileSync', 'cpSync', 'rmdirSync']) original[name] = fs[name];

  fs.readFileSync = function (path, options) {
    if (!textOf(options) || !inRepo(path)) return original.readFileSync.apply(this, arguments);
    return remembered(`r\0${resolve(path)}`, () => original.readFileSync.apply(this, arguments));
  };
  fs.readdirSync = function (path, options) {
    const plain = options === undefined || (typeof options === 'object' && Object.keys(options).every((k) => k === 'withFileTypes') && !options.recursive);
    if (!plain || !inRepo(path)) return original.readdirSync.apply(this, arguments);
    return remembered(`d\0${resolve(path)}\0${options?.withFileTypes ? 1 : 0}`, () => original.readdirSync.apply(this, arguments)).slice();
  };
  fs.statSync = function (path, options) {
    const plain = options === undefined || (typeof options === 'object' && Object.keys(options).every((k) => k === 'throwIfNoEntry'));
    if (!plain || !inRepo(path)) return original.statSync.apply(this, arguments);
    return remembered(`s\0${resolve(path)}\0${options?.throwIfNoEntry === false ? 1 : 0}`, () => original.statSync.apply(this, arguments));
  };
  fs.existsSync = function (path) {
    if (!inRepo(path)) return original.existsSync.apply(this, arguments);
    return remembered(`e\0${resolve(path)}`, () => original.existsSync.apply(this, arguments));
  };
  // a change to the repo makes everything remembered suspect
  for (const name of ['writeFileSync', 'appendFileSync', 'rmSync', 'mkdirSync', 'renameSync', 'unlinkSync', 'copyFileSync', 'cpSync', 'rmdirSync']) {
    fs[name] = function (path) {
      if (inRepo(path)) forgetFiles();
      return original[name].apply(this, arguments);
    };
  }
  syncBuiltinESMExports(); // modules imported from here on get these
}
