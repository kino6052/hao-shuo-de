#!/usr/bin/env node
// The translator daemon (TRANSLATOR_PLAN.md S5): listens to the requests people on the list add in Firestore and
// translates each, one at a time (src/lib/translator/daemon.js has the logic). By default it is the quick translation
// (INSTANT_TRANSLATION_PLAN.md S, quick.js): the KB stays open and a Claude session waits, started ahead, so a line
// takes a few seconds. --full runs the pipeline instead (pipeline.js: a writing session with the kb tools, a blind
// reader and a judge; minutes a text). Modelled on the phone daemon (claude-tools scripts/phone-daemon.ts): it finds
// claude, uses its own Claude login, starts at logon under a supervisor loop, keeps one copy running (a pid file), logs to
// a file, listens again after the PC sleeps, and restarts itself when its own code changes.
//
//   node scripts/translator-daemon.js [--full] [--claude PATH] [--model M] [--effort E]   run in the foreground
//                                     quick: sonnet, low by default; --full: opus, high
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
import { createDaemon } from '../src/lib/translator/daemon.js';
import { connectFirestore } from '../src/lib/translator/firestore-store.js';
import { findClaude, sessionPool, sessionRunner, startSession } from '../src/lib/translator/claude.js';
import { translate } from '../src/lib/translator/pipeline.js';
import { QUICK_STEP, QUICK_SYSTEM, piecesOf, quickTranslate } from '../src/lib/translator/quick.js';
import { CLAUDE_TOKEN_ENV, homeFile, parseClaudeToken, readClaudeToken, translatorHome, writeClaudeToken } from '../src/lib/translator/home.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const TASK = 'HaoShuoDeTranslator';
/** Set by the logon loop, which starts the daemon again 20 s after it exits. */
const SUPERVISED_ENV = 'HAOSHUODE_TRANSLATOR_SUPERVISED';
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { claude: { type: 'string' }, model: { type: 'string' }, effort: { type: 'string' }, full: { type: 'boolean', default: false } },
});
values.model ??= values.full ? 'opus' : 'sonnet';
values.effort ??= values.full ? 'high' : 'low';
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

const log = (line) => {
  const text = `${new Date().toISOString()} ${line}\n`;
  process.stdout.write(text);
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
if (existsSync(pidFile)) {
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
writeFileSync(pidFile, String(process.pid));

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
// neither. full: the plain KB, and a session started for each request.
const { openKb } = await import('./kb.js');
const sessions = values.full ? null : sessionPool(({ model, effort }) => startSession({ claude, cwd: tmpdir(), system: QUICK_SYSTEM, model, effort, env: sessionEnv() }));
sessions?.refill(values.model, values.effort);
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
const SHOWN_STEPS = new Set([QUICK_STEP.writing, QUICK_STEP.repairing]);

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

const fullSession = (request, { onStep, signal }) => {
  const run = sessionRunner({ claude, cwd: ROOT, model: values.model, effort: values.effort, env: sessionEnv(), onLine: sessionLog });
  return openKb().then((kb) => translate(request, { kb, run, onStep, signal, model: values.model, log }));
};

const runSession = async (request, how) => {
  log(`translating ${request.id} for ${request.email} (${[...request.text].length} characters${request.lesson ? `, lesson ${request.lesson}` : ''})`);
  try {
    const result = await (values.full ? fullSession : quickSession)(request, how);
    log(`done ${request.id} in ${result.timing.total} s`);
    return result;
  } catch (e) {
    if (e.login) log(`Claude is not logged in${readClaudeToken() ? ' (the saved token was refused)' : ''}: run \`claude setup-token\`, then \`node scripts/translator-daemon.js set-token\``);
    throw e;
  }
};

const store = await connectFirestore({ serviceAccountPath: homeFile('serviceAccount'), log });
// a quick translation takes seconds; one still going after 3 minutes is stuck
const daemon = createDaemon({ store, runSession, timeoutMs: (values.full ? 20 : 3) * 60_000, dayOffsetMinutes: 480, log });
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
