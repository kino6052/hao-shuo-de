#!/usr/bin/env node
// The translator daemon (TRANSLATOR_PLAN.md S5): listens to the requests people on the list add in Firestore and runs
// the translation pipeline for each, one at a time (src/lib/translator/daemon.js has the logic, pipeline.js the steps).
// Modelled on the phone daemon (claude-tools scripts/phone-daemon.ts): it finds claude, uses its own Claude login,
// starts at logon under a supervisor loop, keeps one copy running (a pid file), logs to a file, listens again after the
// PC sleeps, and restarts itself when its own code changes.
//
//   node scripts/translator-daemon.js [--claude PATH] [--model opus] [--effort high]   run in the foreground
//   node scripts/translator-daemon.js install | uninstall                             start it at Windows logon (per-user Run key)
//   node scripts/translator-daemon.js set-token                                       save the token `claude setup-token` printed
//
// Everything it keeps is in %USERPROFILE%\.haoshuode-translator (home.js): service-account.json (scripts/translator-setup.js
// puts it there), claude-token, daemon.log, sessions.log (every session's raw events) and daemon.pid. Never in git.

import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { createDaemon } from '../src/lib/translator/daemon.js';
import { connectFirestore } from '../src/lib/translator/firestore-store.js';
import { findClaude, sessionRunner } from '../src/lib/translator/claude.js';
import { translate } from '../src/lib/translator/pipeline.js';
import { CLAUDE_TOKEN_ENV, homeFile, parseClaudeToken, readClaudeToken, translatorHome, writeClaudeToken } from '../src/lib/translator/home.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const TASK = 'HaoShuoDeTranslator';
/** Set by the logon loop, which starts the daemon again 20 s after it exits. */
const SUPERVISED_ENV = 'HAOSHUODE_TRANSLATOR_SUPERVISED';
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { claude: { type: 'string' }, model: { type: 'string', default: 'opus' }, effort: { type: 'string', default: 'high' } },
});
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
const { openKb } = await import('./kb.js');
await openKb(); // load the data once now, so the first request does not wait for it

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

const runSession = async (request, { onStep, signal }) => {
  const run = sessionRunner({ claude, cwd: ROOT, model: values.model, effort: values.effort, env: sessionEnv(), onLine: sessionLog });
  log(`translating ${request.id} for ${request.email} (${[...request.text].length} characters${request.lesson ? `, lesson ${request.lesson}` : ''})`);
  try {
    const result = await translate(request, { kb: await openKb(), run, onStep, signal, model: values.model, log });
    log(`done ${request.id} in ${result.timing.total} s`);
    return result;
  } catch (e) {
    if (e.login) log(`Claude is not logged in${readClaudeToken() ? ' (the saved token was refused)' : ''}: run \`claude setup-token\`, then \`node scripts/translator-daemon.js set-token\``);
    throw e;
  }
};

const store = await connectFirestore({ serviceAccountPath: homeFile('serviceAccount'), log });
const daemon = createDaemon({ store, runSession, timeoutMs: 20 * 60_000, dayOffsetMinutes: 480, log });
daemon.start();
log(`translator daemon up (project ${store.projectId}, claude ${claude}, model ${values.model}, files in ${home})`);

const quit = async (why) => {
  log(why);
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
