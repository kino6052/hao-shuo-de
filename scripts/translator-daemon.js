#!/usr/bin/env node
// The translator daemon (TRANSLATOR_PLAN.md S5): listens to the requests people on the list add in Firestore and
// translates each, one at a time (src/lib/translator/daemon.js has the logic). By default it is the quick translation
// (INSTANT_TRANSLATION_PLAN.md S, quick.js): the KB stays open and a Claude session waits, started ahead, so a line
// takes a few seconds. The page picks one of three ways for each text (the request's mode):
//   quick (no mode)  the quick translation, above; 3 minutes at most
//   'tree'           with meaning trees (BROWSER_TRANSLATOR_PLAN.md B5, tree-request.js), on the quick translation's KB,
//                    with the quick translation for the sentences no tree makes; 6 minutes at most
//   'full'           slow and careful: the pipeline (pipeline.js: a writing session with the kb tools, a blind reader and
//                    a judge; opus, high; minutes a text); 20 minutes at most
// --full sends every text to the pipeline, whatever its mode. Modelled on the phone daemon (claude-tools
// scripts/phone-daemon.ts): it finds claude, uses its own Claude login, starts at logon under a supervisor loop, keeps one
// copy running (a pid file), logs to a file, listens again after the PC sleeps, and restarts itself when its own code
// changes.
//
//   node scripts/translator-daemon.js [--full] [--claude PATH] [--model M] [--effort E]   run in the foreground
//                                     quick: sonnet, low by default; --full: opus, high
//   node scripts/translator-daemon.js try [--mode quick|tree|full] [--lesson N] [--json FILE] "text"
//                                     one text through the same code, with no Firestore (alongside a running daemon too):
//                                     the steps, each sentence, the page's own check of each tree, and the result as
//                                     JSON in FILE
//   node scripts/translator-daemon.js install | uninstall                             start it at Windows logon (per-user Run key)
//   node scripts/translator-daemon.js set-token                                       save the token `claude setup-token` printed
//
// Everything it keeps is in %USERPROFILE%\.haoshuode-translator (home.js): service-account.json (scripts/translator-setup.js
// puts it there), claude-token, daemon.log, sessions.log (every session's raw events) and daemon.pid. Never in git.

import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { MODES, createDaemon } from '../src/lib/translator/daemon.js';
import { makeTreeCheck, treeData } from '../src/lib/translator/tree-check.js';
import { connectFirestore } from '../src/lib/translator/firestore-store.js';
import { findClaude, sessionPool, sessionRunner, startSession } from '../src/lib/translator/claude.js';
import { translate } from '../src/lib/translator/pipeline.js';
import { QUICK_STEP, QUICK_SYSTEM, piecesOf, quickTranslate } from '../src/lib/translator/quick.js';
import { TREE_STEP, treeRequest } from '../src/lib/translator/tree-request.js';
import { openTreeTranslator } from './tree-setup.js';
import { CLAUDE_TOKEN_ENV, homeFile, parseClaudeToken, readClaudeToken, translatorHome, writeClaudeToken } from '../src/lib/translator/home.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const TASK = 'HaoShuoDeTranslator';
/** Set by the logon loop, which starts the daemon again 20 s after it exits. */
const SUPERVISED_ENV = 'HAOSHUODE_TRANSLATOR_SUPERVISED';
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    claude: { type: 'string' },
    model: { type: 'string' },
    effort: { type: 'string' },
    full: { type: 'boolean', default: false },
    mode: { type: 'string', default: 'quick' },
    lesson: { type: 'string' },
    json: { type: 'string' },
  },
});
values.model ??= values.full ? 'opus' : 'sonnet';
values.effort ??= values.full ? 'high' : 'low';
// the slow, careful way: the --full daemon's model, or opus at high effort beside the quick one
const FULL = values.full ? { model: values.model, effort: values.effort } : { model: 'opus', effort: 'high' };
const trying = positionals[0] === 'try';
const tryMode = values.mode === 'quick' ? undefined : values.mode;
if (trying && (!positionals.slice(1).join(' ').trim() || (tryMode && !MODES.has(tryMode)))) {
  console.error('Usage: node scripts/translator-daemon.js try [--mode quick|tree|full] [--lesson N] [--json FILE] "I forgot my umbrella."');
  process.exit(2);
}
const home = translatorHome();
mkdirSync(home, { recursive: true });

if (positionals[0] === 'install' || positionals[0] === 'uninstall') {
  // The per-user Run key needs no admin rights and runs at every logon (as the phone daemon's does).
  const reg = (args) => {
    const r = spawnSync('reg', args, { encoding: 'utf8' });
    process.stdout.write(`${r.stdout ?? ''}${r.stderr ?? ''}`);
    return r.status ?? 1;
  };
  const key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  if (positionals[0] === 'uninstall') process.exit(reg(['delete', key, '/v', TASK, '/f']));
  const logPath = homeFile('log');
  const loop = `while ($true) { & '${process.execPath}' '${join(ROOT, 'scripts', 'translator-daemon.js')}'; Add-Content '${logPath}' ((Get-Date).ToUniversalTime().ToString('o') + ' supervisor: daemon exited (' + $LASTEXITCODE + '), restarting in 20 s'); Start-Sleep 20 }`;
  const command = `powershell.exe -NoProfile -WindowStyle Hidden -Command "Set-Location '${ROOT}'; $env:${SUPERVISED_ENV}='1'; ${loop}"`;
  process.exit(reg(['add', key, '/v', TASK, '/t', 'REG_SZ', '/d', command, '/f']));
}

if (positionals[0] === 'set-token') {
  // From stdin, not argv, so the token stays out of shell history and the process list.
  const lines = createInterface({ input: process.stdin, output: process.stdout });
  const input = await new Promise((done) => lines.question('Paste the token `claude setup-token` printed, then press Enter: ', done));
  lines.close();
  const parsed = parseClaudeToken(input);
  if (!parsed.ok) {
    console.error(`Not saved: ${parsed.reason}.`);
    process.exit(1);
  }
  writeClaudeToken(parsed.token);
  console.log(`Saved to ${homeFile('token')}. The daemon uses it from the next session it starts; no restart needed.`);
  process.exit(0);
}

// `try` only prints: its lines are not the daemon's
const log = (line) => {
  const text = `${new Date().toISOString()} ${line}\n`;
  process.stdout.write(text);
  if (trying) return;
  try {
    appendFileSync(homeFile('log'), text);
  } catch {}
};

// The logon window is hidden: without these a crash on start (the key, the network, claude not found) leaves no trace.
for (const event of ['uncaughtException', 'unhandledRejection']) {
  process.on(event, (e) => {
    log(`${event}: ${e instanceof Error ? (e.stack ?? e.message) : String(e)}`);
    process.exit(1);
  });
}

const pidFile = homeFile('pid');
if (!trying && existsSync(pidFile)) {
  const pid = Number.parseInt(readFileSync(pidFile, 'utf8'), 10);
  let alive = false;
  try {
    process.kill(pid, 0);
    alive = pid !== process.pid;
  } catch {}
  // Windows reuses pids: only a live translator daemon counts.
  if (alive && process.platform === 'win32') {
    const r = spawnSync('powershell.exe', ['-NoProfile', '-Command', `(Get-CimInstance Win32_Process -Filter 'ProcessId=${pid}').CommandLine`], { encoding: 'utf8' });
    alive = String(r.stdout).includes('translator-daemon');
  }
  if (alive) {
    log(`Another translator daemon is running (pid ${pid}).`);
    process.exit(1);
  }
}
if (!trying) writeFileSync(pidFile, String(process.pid));

const claude = findClaude({ given: values.claude });

// The token is read for every session, so `set-token` needs no restart. Without one the CLI's shared login is used.
const sessionEnv = () => {
  const token = readClaudeToken();
  return { ...process.env, ...(token && { [CLAUDE_TOKEN_ENV]: token }) };
};
const sessionLog = (line) => {
  try {
    appendFileSync(homeFile('sessions'), `${line}\n`);
  } catch {}
};

// quick: a session waits, started now (in a folder with no project settings, as the CLI's quick translation does), and
// the KB opens with the parse memory meanwhile; the first pieces build its lazy parts, so the first request waits for
// neither. full: the plain KB, and a session started for each request (beside the quick one, on its KB).
const { openKb } = await import('./kb.js');
const sessions = values.full ? null : sessionPool(({ model, effort }) => startSession({ claude, cwd: tmpdir(), system: QUICK_SYSTEM, model, effort, env: sessionEnv() }));
if (!(trying && tryMode === 'full')) sessions?.refill(values.model, values.effort);
// quick: the KB a request uses, looked at again after each request (openKb walks the data for its stamp, about 0.3 s, and
// opens it again only when the data changed), so no request waits for that walk
let quickKb = null;
if (values.full) await openKb();
else {
  const kb = await openKb({ memo: true });
  piecesOf(kb, 'Warm up the dictionary.');
  quickKb = Promise.resolve(kb);
}

// Only the steps that take time reach the page: the rest last milliseconds, and each one is a write the result waits for.
const SHOWN_STEPS = new Set([QUICK_STEP.writing, QUICK_STEP.repairing, ...Object.values(TREE_STEP)]);

const quickSession = async (request, { onStep, signal }) => {
  const session = sessions.take(values.model, values.effort);
  const stop = () => session.close(); // a timeout or the daemon stopping ends the session, which fails the request
  signal?.addEventListener('abort', stop);
  const kb = await quickKb;
  try {
    return await quickTranslate(request, { kb, session, onStep: (step) => SHOWN_STEPS.has(step) && onStep(step), model: values.model });
  } finally {
    signal?.removeEventListener('abort', stop);
    session.close();
    sessions.refill(values.model, values.effort);
    quickKb = openKb({ memo: true }).catch((e) => (log(`could not open the dictionary again, keeping the one open: ${e.message}`), kb));
  }
};

// tree: the tree translator, set up again when the quick translation's KB is opened anew or the token changed. Its two
// LLM steps start a session each, on the model T-eng measured (sonnet, its own effort); a request that is stopped ends
// them.
let treeSetup = null; // { kb, token, setup }
const treeSession = async (request, { onStep, signal }) => {
  const kb = await quickKb;
  const token = readClaudeToken();
  if (treeSetup?.kb !== kb || treeSetup.token !== token) treeSetup = { kb, token, setup: openTreeTranslator({ kb, model: 'sonnet', claude }) };
  const translator = (await treeSetup.setup).translator(() => {}, { signal });
  const quick = (text) => quickSession({ ...request, text }, { onStep: () => {}, signal });
  return treeRequest(request, { kb, translator, quick, onStep: (step) => SHOWN_STEPS.has(step) && onStep(step), model: 'sonnet' });
};

const fullSession = async (request, { onStep, signal }) => {
  const run = sessionRunner({ claude, cwd: ROOT, model: FULL.model, effort: FULL.effort, env: sessionEnv(), onLine: sessionLog });
  const kb = await (quickKb ?? openKb());
  return translate(request, { kb, run, onStep, signal, model: FULL.model, log });
};

const runSession = async (request, how) => {
  log(`translating ${request.id} for ${request.email} (${[...request.text].length} characters${request.lesson ? `, lesson ${request.lesson}` : ''}${request.mode && !values.full ? `, ${request.mode}` : ''})`);
  try {
    const result = await (values.full || request.mode === 'full' ? fullSession : request.mode === 'tree' ? treeSession : quickSession)(request, how);
    log(`done ${request.id} in ${result.timing.total} s`);
    return result;
  } catch (e) {
    if (e.login) log(`Claude is not logged in${readClaudeToken() ? ' (the saved token was refused)' : ''}: run \`claude setup-token\`, then \`node scripts/translator-daemon.js set-token\``);
    throw e;
  }
};

// a quick translation takes seconds; one still going after 3 minutes is stuck. A tree one is three calls or more
// (step 0, up to three tries of the trees, the quick one for what is left): 6 minutes. The pipeline: 20.
const timeoutMs = (request) => (values.full || request.mode === 'full' ? 20 : request.mode === 'tree' ? 6 : 3) * 60_000;

// `try`: one text through runSession as a request from the page would go, with no Firestore, then each sentence with
// the book's checks and, for a tree, the page's own check (src/lib/translator/tree-check.js on the KB's data) -> exit code
async function tryOne() {
  const text = positionals.slice(1).join(' ').trim();
  const mode = tryMode;
  const request = { id: 'try', uid: 'cli', email: 'the command line', text, lesson: values.lesson, createdAt: Date.now(), ...(mode ? { mode } : {}) };
  const controller = new AbortController();
  const timer = setTimeout(() => (log(`stopping: longer than ${timeoutMs(request) / 60_000} minutes`), controller.abort()), timeoutMs(request));
  let result;
  try {
    result = await runSession(request, { onStep: (step) => log(`step: ${step}`), signal: controller.signal });
  } catch (e) {
    log(`failed: ${e.userMessage ?? e.message}\n${e.stack ?? ''}`);
    return 1;
  } finally {
    clearTimeout(timer);
    sessions?.close();
  }
  if (values.json) writeFileSync(values.json, JSON.stringify(result, null, 2));
  const kb = await (quickKb ?? openKb());
  const pageCheck = result.mode === 'tree' ? makeTreeCheck({ patterns: kb.source.patterns, words: kb.source.words, composites: kb.source.composites, ...treeData(JSON.parse(readFileSync(join(ROOT, 'src/data/tree-data.json'), 'utf8'))) }) : null;
  const bookCheck = (c) => (!c ? '-' : c.unknown?.length ? `words not in the book: ${c.unknown.join('; ')}` : !c.parses ? 'does not parse' : c.means === 'no' ? 'parses, but not as meant' : 'ok');
  const out = [''];
  const fix = result.correction;
  if (fix?.changes?.length) out.push(`Step 0 changed: ${fix.changes.map((c) => `"${c.from}" -> "${c.to}" (${c.why})`).join('; ')}`);
  if (fix && fix.status !== 'ok') out.push(`Step 0 ${fix.status}: ${fix.reason || ''} ${(fix.questions ?? []).map((q) => q.about).join(' | ')}`.trim());
  (result.sentences ?? []).forEach((s, i) => {
    out.push(`${i + 1}. ${s.english}`, `   ${s.pinyin}   ${s.hanzi ?? ''}`);
    if (s.literally) out.push(`   ${s.how === 'tree' ? 'the tree says' : 'literally'}: ${s.literally}`);
    if (s.blind) out.push(`   read back blind: ${s.blind}`);
    out.push(`   made: ${s.how === 'tree' ? `from a tree (${s.tries} ${s.tries === 1 ? 'try' : 'tries'})` : (s.how ?? s.source ?? '-')}; the book's checks: ${bookCheck(s.check)}`);
    if (pageCheck && s.how === 'tree') {
      const c = pageCheck({ tree: s.tree, built: s.built, english: s.english });
      out.push(`   the page's check: ${c.ok ? `same sentence, reads as its tree${c.first ? ' first' : ' (not first)'}` : `FAILED: ${c.why}`}`);
    }
  });
  const needed = (result.sketch ?? []).filter((s) => s.needed);
  if (needed.some((s) => s.verdict)) out.push(`Needed ideas kept: ${needed.filter((s) => s.verdict === 'kept').length} of ${needed.length}`);
  for (const p of result.problems ?? []) out.push(`Problem: ${p}`);
  out.push(`Mode ${result.mode ?? (mode || 'quick')}, model ${result.model}, ${result.timing?.total} s${values.json ? `; the result is in ${values.json}` : ''}`);
  console.log(out.join('\n'));
  return 0;
}

if (trying) process.exit(await tryOne());

const store = await connectFirestore({ serviceAccountPath: homeFile('serviceAccount'), log });
const daemon = createDaemon({ store, runSession, timeoutMs, dayOffsetMinutes: 480, log });
daemon.start();
log(`translator daemon up (project ${store.projectId}, claude ${claude}, ${values.full ? 'full pipeline' : 'quick'}, model ${values.model}, effort ${values.effort}, files in ${home})`);

const quit = async (why) => {
  log(why);
  sessions?.close();
  await daemon.stop();
  await store.close().catch(() => {});
  rmSync(pidFile, { force: true });
  process.exit(0);
};
process.on('SIGINT', () => quit('stopping (SIGINT)'));
process.on('SIGTERM', () => quit('stopping (SIGTERM)'));

// After the PC sleeps the listener can go quiet without an error: a minute that took far longer than a minute means it
// slept, so listen again from scratch (the daemon forgets nothing that matters: a request left working starts again).
let lastTick = Date.now();
setInterval(async () => {
  const gap = Date.now() - lastTick;
  lastTick = Date.now();
  if (gap < 3 * 60_000) return;
  log(`the PC slept for about ${Math.round(gap / 60_000)} minutes; listening again`);
  await daemon.stop();
  sessions?.close(); // and a fresh session to wait, in case the one that slept lost its connection
  sessions?.refill(values.model, values.effort);
  daemon.start();
}, 60_000);

// A daemon keeps running the code it started with. Under the supervisor it quits between requests when a commit changes
// its code, and comes back new.
const CODE_PATHS = ['scripts/translator-daemon.js', 'src/lib/translator', 'prompts', '.claude/skills/translate', '.claude/agents/blind-reader.md'];
const codeVersion = () => spawnSync('git', ['log', '-1', '--format=%H', '--', ...CODE_PATHS], { cwd: ROOT, encoding: 'utf8' }).stdout?.trim() ?? '';
const startedOn = codeVersion();
if (process.env[SUPERVISED_ENV] && startedOn) {
  setInterval(() => {
    if (daemon.state !== 'idle' || daemon.queue) return;
    const now = codeVersion();
    if (now && now !== startedOn) void quit(`code changed (${startedOn.slice(0, 7)} -> ${now.slice(0, 7)}), restarting`);
  }, 60_000);
}
