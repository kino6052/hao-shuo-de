// The tree translator set up for the scripts that run it through headless Claude sessions (BROWSER_TRANSLATOR_PLAN.md
// B4): scripts/tree-translate.js, scripts/t-bad.js and scripts/t-eng.js. The two LLM steps go to sessions the way the
// translator's do (src/lib/translator/claude.js): step 0 with no tool, the tree step with the kb tools so it can call
// kb_lookup. The code steps run here, the same code the page will run (src/lib/translator/tree-translate.js). The
// readback uses the rules' English sides, drafts included (scripts/rule-english.js); step 0's word check uses the
// WordNet index (kb/cache/english-index.json) when it is there.
//
//   const s = await openTreeTranslator({ model, effort, claude, firstReading, env, kb, cache, replay, fresh })   kb: one already open,
//                            with or without the parse memory (with it, the trees are parsed by a parser of their own)
//   s.translator(onStep, { signal }) -> makeTreeTranslator(...) whose sessions report their steps to onStep(text)
//                            and end when signal aborts; its translateMany has the words from tree-words.js, so its
//                            step needs no tool
//   s.cost()              -> the dollars the sessions reported so far
//   s.ask(prompt, { schema, step }) -> one session's answer, null if none fitted the schema; the kb tools only for
//                            step 'tree'
//   s.saveAnswers()       -> writes the answers kept so far to `cache` (when it is given and something is new)
//   s.kept                -> each sentence's tree by what it was asked with, in `cache` too: a sentence asked again in
//                            another batch is answered from it (tree-translate.js sentenceKey); null with no cache
//
// cache: a JSON file of answers by their prompt (with the model, the effort, the step and the schema): a prompt asked
// before is answered from it, with no session. replay: only from it, never a session, so a run with new code checks
// the same answers again in seconds; a prompt it does not hold is a failed try. fresh: ask every prompt again (to time a
// run), keeping the new answers.
//   s.kb, s.parser, s.words, s.trees, s.token
//   await mapJobs(items, jobs, fn) -> fn(item, i) for each, jobs at a time, in the items' order
//
// env is added to the sessions' environment (HAOSHUODE_MEMORY_SKIP, for one). A session whose answers never fit the
// schema is a failed try (null), not the end of the run.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { openKb } from './kb.js';
import { bookSentences } from './book-sentences.js';
import { ruleDrafts } from './rule-english.js';
import { createParser } from '../src/lib/grammar/parser.js';
import { makeTrees, spellingHabits } from '../src/lib/grammar/tree.js';
import { makeTreeTranslator } from '../src/lib/translator/tree-translate.js';
import { makeKnownWord } from '../src/lib/translator/known-word.js';
import { coreWordLines, sentenceWords, wordLines } from '../src/lib/translator/tree-words.js';
import { findClaude, sessionRunner } from '../src/lib/translator/claude.js';
import { CLAUDE_TOKEN_ENV, readClaudeToken } from '../src/lib/translator/home.js';

export const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

export async function openTreeTranslator({ model = 'sonnet', effort, claude, firstReading = true, env = {}, kb: opened, cache = null, replay = false, fresh = false } = {}) {
  const kb = opened ?? (await openKb());
  const words = kb.parse.words;
  // a kb with the parse memory (the daemon's) gives slim results with no trees, and a tree is checked against the trees
  const parser = kb.parseMemo ? createParser({ patterns: kb.source.patterns ?? [], words, composites: kb.source.composites }) : kb.parse.parser;
  const trees = makeTrees({
    rules: parser.rules,
    glue: parser.grammar.glue,
    words,
    composites: kb.source.composites,
    habits: spellingHabits(bookSentences(kb).keys()),
    english: ruleDrafts(parser.rules).english,
  });
  const indexFile = join(ROOT, 'kb/cache/english-index.json');
  const knownWord = existsSync(indexFile) ? makeKnownWord(JSON.parse(readFileSync(indexFile, 'utf8'))) : null;

  const token = readClaudeToken();
  const run = sessionRunner({
    claude: findClaude({ given: claude }),
    cwd: ROOT,
    model,
    effort,
    env: { ...process.env, ...env, ...(token && { [CLAUDE_TOKEN_ENV]: token }) },
  });
  let spent = 0;
  const answers = cache ? new Map(Object.entries(existsSync(cache) ? JSON.parse(readFileSync(cache, 'utf8')) : {})) : null;
  let unsaved = 0;
  const keyOf = (prompt, schema, step) => createHash('sha256').update(JSON.stringify([model, effort ?? null, step, schema, prompt])).digest('hex').slice(0, 32);
  const askWith = (onStep, signal) => (prompt, { schema, step }) => {
    const key = answers && keyOf(prompt, schema, step);
    if (!fresh && answers?.has(key)) return Promise.resolve(answers.get(key));
    if (replay) return (onStep('replay: no saved answer for this prompt'), Promise.resolve(null));
    return run(prompt, { schema, tools: step === 'tree' ? 'kb' : 'none', onStep, signal }).then(
      (out) => {
        spent += out.cost ?? 0;
        if (answers && out.answer) (answers.set(key, out.answer), unsaved++);
        return out.answer;
      },
      (e) => (e.format ? (onStep(`no answer fitted the format: ${e.message}`), null) : Promise.reject(e)),
    );
  };
  // each sentence's tree by what it was asked with (tree-translate.js sentenceKey), in the same file; fresh asks again
  const keptKey = (key) => keyOf(key, null, 'sentence');
  const kept = answers && {
    get: (key) => (fresh ? undefined : answers.get(keptKey(key))),
    set: (key, answer) => (answers.set(keptKey(key), answer), unsaved++),
  };
  const coreWords = coreWordLines(words);
  const wordsFor = (sentence, more) => wordLines(sentenceWords(kb, sentence, { compositesOf: trees.compositesOf, more }));

  return {
    kb,
    parser,
    words,
    trees,
    token,
    cost: () => Math.round(spent * 100) / 100,
    ask: askWith(() => {}),
    saveAnswers() {
      if (!answers || !unsaved) return;
      writeFileSync(cache, JSON.stringify(Object.fromEntries(answers)));
      unsaved = 0;
    },
    kept,
    wordsFor,
    translator: (onStep = () => {}, { signal } = {}) => makeTreeTranslator({ parser, trees, words, ask: askWith(onStep, signal), knownWord, firstReading, wordsFor, coreWords, kept }),
  };
}

// fn(item, i) for every item, `jobs` at a time; the results keep the items' order
export async function mapJobs(items, jobs, fn) {
  const out = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i], i);
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, Math.min(jobs, items.length)) }, worker));
  return out;
}

// the message for a session that could not log in
export const loginMessage = (token) =>
  `Claude is not logged in for the translator${token ? ' (the saved token was refused)' : ''}: run \`claude setup-token\`, then \`node scripts/translator-daemon.js set-token\`.`;
