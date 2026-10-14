# Optimizations: why `npm run check` is quick

`npm run check` runs 17 gates (`scripts/gates.js`) over the whole dictionary and the book. It used to take minutes. This file says
why it was slow, what was done about it, how each part stays correct, and what is still open. The numbers were measured on one
machine (Windows 11, Node 22.20, 8 logical CPUs) and will differ elsewhere.

## The one idea

**Read the disk as little as possible: keep everything in memory, and write it out in a few big dumps.** Every part below is this idea
at a different level:

| Level | Kept in memory | Dumped to disk |
| --- | --- | --- |
| Inside one process | the loaded data modules, the opened KB, every repo file already read | – |
| One batch of gates | all of the above, shared by the gates of the batch | the parse memory, once, when the batch ends |
| Between runs | – | `.cache/`: gate reports (1 file), source snapshot (1 file), data bundle (1 file), parse memory (a few files), tsc state |

Everything cached lives in `.cache/` (git-ignored). Deleting it is always safe: the next run is slower and gives the same answers.

## Where it went (measured)

| Run | Time |
| --- | --- |
| `npm run check`, nothing changed since the last run | about 0 s (every report is remembered) |
| a lesson file touched (all gates run again, parse memory warm) | 8.5 to 10 s |
| `--fresh` (ignore remembered reports; the other caches stay) | 6.4 to 8 s |
| all 17 gates in one process, one after the other | 7.7 s |
| before any of this | minutes; then about 65 s with four gates at a time, `check-grammar` alone 44 s |

Not measured with the final design: a run with an empty `.cache/` (the one before batches took about 21 s). A real edit that
changes sentences also parses those sentences once; touching a file does not.

## Why it was slow

1. **Every gate was its own process, and every process started from nothing.** Start Node, import about 2,000 small TypeScript files
   (231 words, 1,557 composites, the lessons: 3 to 5 s), open the KB, read the parse results, walk the repo. Seventeen times.
2. **Starting many processes at once made it worse.** Eight loads of the data side by side took 4.2 s on the wall clock (one alone: about 0.5 s under Bun): they queue on the disk.
3. **On this machine a file that was just written costs about 10 ms the first time it is read, whatever its size.** Measured: 320
   small files, 3.2 s on first read and 0.05 s on the second; one 4 MB file, 0.01 s. It looks like the system scanning new files
   (not confirmed; Defender's settings could not be queried). So the number of files matters, not their size. This is why the
   bundle, the gate reports and the source snapshot are each one file, and why a bundle of 320 files cost 3 s after every edit.
4. **The Earley parser did far more work than it needed** (about 35 s of `check-grammar`'s time).
5. **The same sentences were parsed again** by every run, and by several gates in one run (`check-grammar`, `check-forms`, `check-classes`).
6. **`tsc` checked every file every time.**

## What was done

In the order a run meets them. Each has a header comment in its file with the details.

1. **Remembered reports** (`scripts/gate-cache.js`, `.cache/gates.json`). A gate only reads the repo, so its report is decided by the
   files. The key is a stamp of everything the gates can read (see 2). Same stamp, same report, nothing runs. `--fresh` ignores it.
2. **Stamps** (`scripts/stamp.js`). A stamp is a hash of path, modified time and size of every file under a list of folders (not the
   contents, so it takes a fraction of a second). `sharedStats` makes `check-all` walk the repo once for all its stamps; `handDown` /
   `handedDown` pass a stamp to the child processes through the environment, so none of them walks the repo again (that walk is
   about half a second per process). A handed-down stamp names the repo it was made for, so a copy of the repo never takes it.
3. **One bundle of the data** (`scripts/bundle.js`, `scripts/fast-data.js`, `.cache/bundle/<stamp>.mjs`). esbuild turns the 176 data
   and lesson entry files into one file in about 1.8 s; a Node preload (`node --import`) then makes every `import '../src/data/…'`
   hand out what the bundle holds. `check-sounds` went from 3.8 to 4.8 s to 1.2 s. If the bundle cannot be built (a syntax
   error in a data file), nothing is redirected and the script reads the real files and reports the real error. How: a resolve hook
   sends each entry file to a module named `hsd-entry:<id>`, and a load hook writes that module's source, one export line per name,
   taken from the bundle. Needs Node 22.15 or later (`module.registerHooks`).
4. **The KB's source as a snapshot** (`scripts/source-cache.js`, `scripts/warm-source.js`, `.cache/source.json`). The KB works from a
   plain-data copy of the dictionary, lessons and patterns. It is built once, by a step of its own before the gates start (several
   batches would otherwise build it at the same moment), and read from the file by everyone after.
5. **A memory of parse results** (`scripts/parse-memo.js`, `.cache/parse-memo/<space>.json`). A parse depends on the grammar rules,
   the word facts the lexicon reads (sound, part of speech, extra classes; a composite's hanzi, sound, part of speech and forms), and
   the parser's own code. A *space* is the memory for one such combination; its name is a hash of exactly those, so editing a sentence
   or a definition changes nothing here, and editing a rule or a word class starts a new space. Results are kept slim
   (`slimOf` / `fromSlim` in `src/lib/grammar/parser.js`), which is all the gates read. Written once, when the process ends, merged with
   what another process wrote meanwhile; the 60 most recently used spaces are kept.
6. **A faster parser** (`src/lib/grammar/earley.js`, `parser.js`): numeric item keys, indexes of items waiting for a symbol, shape
   caches. Same answers: the parse results of every sentence were dumped before and after and are identical. About 35 s down to 10 s.
7. **Batches** (`scripts/check-batch.js`, started by `scripts/check-all.js`). A batch is one process that runs several gates one
   after the other: it imports each gate script, catches its output, and turns `process.exit` into an exception that ends only that
   gate. The data, the KB and the parse memory are loaded once per batch. The pending gates are spread over `CHECK_JOBS` batches
   (default: half the logical CPUs, at most 4), slowest first, each to the batch with the least work so far (by the time the gate
   took last run). If a batch dies, the gates it did not report are run again, each in its own process.
8. **Files in memory** (`scripts/fs-memory.js`, used by the batch). The gates that scan the repo (sounds, jargon, passive, word
   use…) each walked and read the same 2,000 files. In a batch, `readFileSync` (as text), `readdirSync`, `statSync` and `existsSync`
   remember their answers for files under the repo (not `.cache`, `node_modules`, `.git`, `dist`); any write into the repo empties the
   memory. **The measured gain is small**: with all gates in one process, `--fresh` took 7.6 to 8.5 s with it and 8.1 to 9.0 s without
   (about 0.4 s, three runs each); with four batches there was no difference beyond the noise (about 0.5 s). It is kept because it
   cannot make a run slower and saves disk reads when the disk is busy; `HSD_NO_FILE_MEMORY=1` turns it off. A server or watcher
   that needs to see files change must not use it.
9. **Incremental `tsc`** (`scripts/check-types.js`, `.cache/tsc.tsbuildinfo`). A re-check looks only at what changed.

## What a run looks like

```
npm run check
  stamps (one walk of the repo)                 ~0.4 s
  every gate remembered?  yes -> print the reports, done
  no -> build the bundle if needed              ~1.8 s  (once per change)
        build the KB source if needed           ~0.9 s  (once per change)
        spread the pending gates over 3-4 batches, slowest first
          batch = one process: load the bundle, run its gates one after another,
                  stream each report back, write the parse memory at the end
        print each report as it arrives, remember it, show the table
```

`CHECK_TRACE=1 npm run check` prints a timeline (when each batch began, when each gate ended) to see where the time goes.

## Switches

| | |
| --- | --- |
| `npm run check -- --fresh` | ignore remembered reports (the other caches stay) |
| `npm run check -- --isolated` or `CHECK_MODE=isolated` | one process per gate, as a gate runs alone (`node scripts/check-forms.js`) |
| `CHECK_JOBS=n` | batches at a time (1 = one process for everything) |
| `CHECK_TRACE=1` | print the timeline |
| `HSD_NO_CACHE=1` | no cache is read (everything is recomputed and written again) |
| `HSD_NO_BUNDLE=1` | read the real data files, no bundle |
| `HSD_NO_FILE_MEMORY=1` | batches do not keep the files they read in memory |
| `HSD_PARSE_MEMO_DIR=<dir>` | where the parse memory lives (a copy of the repo can share the real one) |

A gate run by hand (`node scripts/check-forms.js`) works exactly as before: no bundle, no batch. To make it quick too:
`node --import file:///C:/…/scripts/fast-data.js scripts/check-forms.js` (a `file://` URL on Windows).

## Keeping it correct

- **Caches are keyed by what they read, never by time.** A changed file changes the stamp; the old entry is simply not found.
- **A cache that cannot be read or written only makes things slower.** Reads fall back to the real work; writes go to a temp file
  and are renamed into place, so a reader never sees half a file; two processes writing the same file is safe (the later wins; the
  parse memory merges).
- **The gates run the same code in every mode.** Batch and isolated runs were compared on all 17 gates after the single-file bundle and
  the file memory went in: pass or fail and the whole report text are identical. To repeat the check: run `--fresh --isolated`, copy
  `.cache/gates.json`, run `--fresh`, and compare the `ok` and `out` of every key (the `ms` differ).
- **Gates that share a process share their data.** A gate that changed a loaded module would change it for the next one. None does
  today; the comparison above is what would show it.

## Tried and dropped

- **Bun as the runtime.** It starts in about 0.25 s and read the 2,000 files faster than Node (0.5 s against 3 to 5 s), but its plugin
  system could not redirect imports on Windows without workarounds, a finished worker suppressed `process.on('exit')` (so the parse
  memory was not written), and once the data was bundled Node was quicker: all gates in one batch took 24 s under Bun and 7.6 s under Node.
- **A Node load hook that cached each transformed file on disk.** 12 s: the thousands of tiny cache files cost more than they saved.
- **One output file per data entry in the bundle** (320 files, with shared chunks). Fast to build, 3 s extra on first read after every change.

## Still open

- **More batches do not help much.** Four batches take about 6.4 to 7.7 s and one process 7.7 s. The timeline shows why in part: the
  first gate of each batch pays 1 to 2 s to load the data. *Tried: `check-types` as its own process, started first. Dropped.* With a warm
  parse memory a `--fresh` run took 2.8 to 3.1 s either way, and `check-types` took 1.1 s inside its batch (incremental `tsc`) but 2.0 to
  3.0 s as a fifth process (three runs each), so it was not faster. Worth trying again only on a cold `tsc` state.
- **The preparation is serial on a change** (not touched: the bundle build is a synchronous esbuild call, so overlapping it needs a child process for a gain under 0.5 s): stamps 0.4 s, bundle 1.8 s, KB source 0.9 s. The bundle could be built while the stamps and the
  remembered reports are read.
- **Any change to `src`, `scripts`, `kb`… runs all 17 gates.** Not started: the data reaches the gates through the one bundle (`import`, not `fs`), so
  the file memory cannot see which lesson a gate used; a per-gate record from it would miss those reads and could keep a stale pass.
  It needs reads recorded at the bundle level first.
  *Assessed, stopped (no code):* an exact record needs, per gate, the bundle entries it loads plus every file those entries pull in
  (esbuild's metafile), the files read through `fs` (binary reads, `fs.promises`, recursive `readdir` and child processes are not seen),
  the code it imports, and the caches it reads (`source.json`, the parse memory, which depend on all of `src`). The gates that matter
  (grammar, forms, classes, KB-based) load every lesson and the whole KB source, so a one-lesson edit would skip few gates, and a
  missed read would keep a stale pass. Not worth the risk for the gain; revisit only with a metafile-based record and a test that
  compares skipped and `--fresh` reports. The file memory already sees which files a gate reads; recording that per
  gate would let a change to one lesson skip the gates that never read it.
- **A resident process** (`check:watch`): keep the loaded data, the KB and the parse memory in memory between runs, rerun on a file change,
  and dump on exit. This is the one idea above taken to the end. Needs a way to drop and reload changed modules.
- **Compile cache** (`module.enableCompileCache()` in the `fast-data.js` preload): *tried, dropped.* Warm runs: 2.7 s with it, 2.7 to 2.8 s
  without (`--fresh`, three runs each); the first runs that fill the cache took 7.4 and 11.1 s. No gain on this machine.
- **Workers for parsing**: `check-grammar` and `check-forms` are the longest single jobs; their sentences are independent.
- **Native clingo** (a pip virtual environment, see the KB notes) for the solver gates, which the wasm build limits to 1 MB.
- **An antivirus exclusion** for the repo and its `.cache` folder would remove the first-read cost of new files if that is what it is. That
  is a setting of the machine, so it is the owner's call.
- **Tests written** (`scripts/check-speed.test.js`, 11 tests): `stamp`, `cache`, `gate-cache`, `parse-memo` (spaces, merge on flush),
  `fs-memory` (run under Node, as the gates are) and `check-batch` (pass, `process.exit`, throw). Slim parse equal to full parse on a success, a
  second pattern reading, a failure and an unknown word: `src/lib/grammar/slim.test.js` (5 tests). **Not yet written**: a whole-suite cache for `scripts/test.js`; `refactor-check.js` reusing the real parse
  memory and the remembered reports of today's files instead of copying `.cache/`; `package.json` script notes for the new flags.
