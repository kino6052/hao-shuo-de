// Where the translator daemon keeps what must never be in git (TRANSLATOR_PLAN.md S0a, S5): %USERPROFILE%\.haoshuode-translator
// holds the Firebase service-account key, the Claude login token, the log and the pid file. HAOSHUODE_TRANSLATOR_HOME moves
// it (tests). The token is the one `claude setup-token` prints, as the phone daemon keeps it (claude-tools claude-token.ts):
// without it a session falls back to the CLI's shared login, which the desktop app does not keep fresh.

import { readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve, relative, isAbsolute } from 'node:path';

export const translatorHome = (env = process.env) => env.HAOSHUODE_TRANSLATOR_HOME || join(homedir(), '.haoshuode-translator');

export const FILES = {
  serviceAccount: 'service-account.json',
  token: 'claude-token',
  log: 'daemon.log',
  pid: 'daemon.pid',
  sessions: 'sessions.log',
};

export const homeFile = (name, env) => join(translatorHome(env), FILES[name] ?? name);

/** What Claude Code reads a setup-token from. */
export const CLAUDE_TOKEN_ENV = 'CLAUDE_CODE_OAUTH_TOKEN';

// -> { ok: true, token } or { ok: false, reason }: the token as pasted, trimmed and without quotes
export function parseClaudeToken(input) {
  const token = String(input ?? '').trim().replace(/^(["'])(.*)\1$/, '$2');
  if (!token) return { ok: false, reason: 'the token is empty' };
  if (/\s/.test(token)) return { ok: false, reason: 'the token contains spaces or line breaks; paste it as one line' };
  if (!token.startsWith('sk-ant-')) return { ok: false, reason: 'that is not a Claude token (they start with sk-ant-); copy the one `claude setup-token` printed' };
  return { ok: true, token };
}

// the saved token, or undefined; read on every session, so a new one needs no restart
export function readClaudeToken(env) {
  try {
    const parsed = parseClaudeToken(readFileSync(homeFile('token', env), 'utf8'));
    return parsed.ok ? parsed.token : undefined;
  } catch {
    return undefined;
  }
}

export const writeClaudeToken = (token, env) => writeFileSync(homeFile('token', env), `${token}\n`, { mode: 0o600 });

// true when `path` is inside `dir` (a key must never be copied into the repo)
export function isInside(path, dir) {
  const rel = relative(resolve(dir), resolve(path));
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}
