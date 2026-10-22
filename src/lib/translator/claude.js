// Runs one headless Claude session for the translator (TRANSLATOR_PLAN.md S1, S6, S7) and gives back its JSON answer.
// The prompt goes in on stdin, so no text ever reaches a command line. The session gets no built-in tool (no shell, no
// files, no web: --tools ""), only the MCP servers named here (--strict-mcp-config), and only the tools in `allow` run
// (--permission-mode dontAsk refuses the rest without asking anyone). Nothing is saved to disk (--no-session-persistence),
// and the user's and the project's settings, hooks and plugins are left out (--restricted). The answer is held to a JSON
// schema (--json-schema). Its events (--output-format stream-json) become one-line steps for the page (S7).
//
//   findClaude({ given, env }) -> path              `claude` on PATH, else the desktop app's newest copy
//   claudeArgs({ schema, model, effort, mcp, allow }) -> [args]
//   stepOf(toolName, input) -> 'Looking up "umbrella"' | null
//   runClaude({ claude, cwd, prompt, schema, model, effort, mcp, allow, env, signal, onStep, onLine, spawn }) ->
//     Promise<{ answer, text, sessionId, cost, turns, tools: [name], denied: [name] }>
//   sessionRunner({ claude, cwd, model, effort, env, onLine }) -> run(prompt, { schema, tools, onStep, signal })
//     what pipeline.js calls a session: tools 'kb' gives the kb server and TRANSLATOR_TOOLS, 'none' no tool at all
//   startSession({ claude, cwd, system, model, effort, env, spawn }) -> { ask(prompt) -> Promise<{ text, cost: Promise }>, close() }
//     a session started now and asked later, one message at a time (the quick translation, quick.js)
//   sessionPool(start) -> { take(model, effort), refill(model, effort), close() }   one session waiting per model and effort
//
// A failed session throws an Error; one that looks like a login problem has `login: true` and a `userMessage` for the
// person, since the daemon shows a userMessage as it is (daemon.js).

import { spawn as nodeSpawn } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { delimiter, join } from 'node:path';

// The kb tools the translator uses: the finding, checking and reading ones. Not the slow what-ifs (kb_remove, kb_swaps,
// kb_gains, kb_query) or the reports; none of the kb tools changes data.
export const TRANSLATOR_TOOLS = [
  'kb_lookup', 'kb_memory', 'kb_constructions', 'kb_english', 'kb_word', 'kb_hints', 'kb_built', 'kb_tags', 'kb_relations',
  'kb_akinator', 'kb_patterns', 'kb_lesson', 'kb_uses', 'kb_parse', 'kb_check_form', 'kb_check_text', 'kb_check_reading', 'kb_gloss',
];

// What the page shows while a tool runs. Plain words; a lookup names its English.
const STEPS = {
  kb_lookup: (i) => (i?.word ? `Looking up "${String(i.word).slice(0, 40)}"` : 'Looking up words'),
  kb_english: (i) => (i?.word ? `Looking up "${String(i.word).slice(0, 40)}"` : 'Looking up words'),
  kb_word: () => 'Reading a dictionary entry',
  kb_memory: () => 'Looking for close sentences in the book',
  kb_uses: () => 'Looking for close sentences in the book',
  kb_constructions: () => 'Picking the grammar',
  kb_patterns: () => 'Reading the grammar',
  kb_lesson: () => 'Reading what the lesson teaches',
  kb_akinator: () => 'Looking for a way to say an idea',
  kb_hints: () => 'Looking for a way to describe a word',
  kb_built: () => 'Reading how a word is described',
  kb_tags: () => 'Looking at related words',
  kb_relations: () => 'Looking at related words',
  kb_check_form: () => 'Checking a description',
  kb_parse: () => 'Checking the grammar',
  kb_check_text: () => 'Checking the grammar',
  kb_check_reading: () => 'Checking the meaning',
  kb_gloss: () => 'Reading it back word by word',
  StructuredOutput: () => 'Writing the answer',
};

export function stepOf(name, input) {
  const short = String(name ?? '').replace(/^mcp__[^_]+__/, '');
  return STEPS[short]?.(input) ?? null;
}

const num = (v) => v.split('.').map((n) => Number.parseInt(n, 10) || 0);
const newestFirst = (a, b) => {
  const [x, y] = [num(a.version), num(b.version)];
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return (y[i] ?? 0) - (x[i] ?? 0);
  return 0;
};

// `claude` on PATH, else the newest copy the desktop app keeps. The Store version keeps it in
// %LOCALAPPDATA%\Claude-Data\claude_<id>\claude-code (2026-10); older ones in %APPDATA%\Claude\claude-code or under
// %LOCALAPPDATA%\Packages\Claude_<id>\LocalCache\Roaming\Claude\claude-code.
export function findClaude({ given, env = process.env } = {}) {
  const named = given ?? env.CLAUDE_BIN;
  if (named) return named;
  const exts = process.platform === 'win32' ? ['.exe', '.cmd', ''] : [''];
  for (const dir of String(env.PATH ?? env.Path ?? '').split(delimiter).filter(Boolean)) {
    for (const ext of exts) if (existsSync(join(dir, `claude${ext}`))) return join(dir, `claude${ext}`);
  }
  const roots = [join(env.APPDATA ?? '', 'Claude', 'claude-code')];
  const local = env.LOCALAPPDATA ?? '';
  for (const [base, sub] of [[join(local, 'Claude-Data'), 'claude-code'], [join(local, 'Packages'), join('LocalCache', 'Roaming', 'Claude', 'claude-code')]]) {
    if (!existsSync(base)) continue;
    for (const d of readdirSync(base)) if (/^claude_/i.test(d)) roots.push(join(base, d, sub));
  }
  const found = [];
  for (const root of roots.filter((r) => existsSync(r))) {
    for (const version of readdirSync(root)) {
      let subs = [];
      try {
        subs = readdirSync(join(root, version));
      } catch {
        continue;
      }
      for (const s of subs) {
        const exe = join(root, version, s, 'claude.exe');
        if (existsSync(exe)) found.push({ version, exe });
      }
    }
  }
  found.sort(newestFirst);
  if (found[0]) return found[0].exe;
  throw new Error('Cannot find claude. Put it on PATH, set CLAUDE_BIN, or pass --claude PATH.');
}

// mcp: { name: { command, args } } (none: no MCP server at all); allow: tool names, kb ones written short (kb_lookup)
export function claudeArgs({ schema, model, effort, mcp = {}, allow = [] } = {}) {
  const servers = Object.keys(mcp);
  const args = ['-p', '--output-format', 'stream-json', '--verbose', '--no-session-persistence', '--restricted', '--disable-slash-commands', '--tools', ''];
  args.push('--strict-mcp-config');
  if (servers.length) args.push('--mcp-config', JSON.stringify({ mcpServers: mcp }));
  const first = servers[0];
  const allowed = allow.map((t) => (t.startsWith('mcp__') || !first ? t : `mcp__${first}__${t}`));
  if (allowed.length) args.push('--allowedTools', allowed.join(','));
  args.push('--permission-mode', 'dontAsk', '--permission-prompts', 'none');
  if (schema) args.push('--json-schema', JSON.stringify(schema));
  if (model) args.push('--model', model);
  if (effort) args.push('--effort', effort);
  return args;
}

// a login problem rather than anything else (the phone daemon's test, claude-token.ts)
export const looksLikeLoginFailure = (output) =>
  /failed to authenticate|not logged in|oauth (session|token)|invalid (api key|bearer token)|please run \/login/i.test(String(output));

export const LOGIN_MESSAGE = 'The translator cannot reach Claude right now, so your text was not translated. The owner has been told; please try again later.';

// The JSON answer: the structured output when the CLI gives one, else the last JSON object in the result's text.
export function answerOf(result) {
  if (result?.structured_output && typeof result.structured_output === 'object') return result.structured_output;
  const t = String(result?.result ?? '');
  const fenced = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  for (const candidate of [fenced?.[1], t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1)]) {
    if (!candidate) continue;
    try {
      return JSON.parse(candidate);
    } catch {}
  }
  return null;
}

// a session that ended without an answer; a login problem says so to the person (userMessage)
function sessionError(code, result, errText) {
  const said = `${result?.result ?? ''} ${errText}`;
  const e = new Error(`claude ended with ${code}${result?.terminal_reason ? ` (${result.terminal_reason})` : ''}: ${said.replace(/\s+/g, ' ').trim().slice(0, 400)}`);
  if (looksLikeLoginFailure(said)) Object.assign(e, { login: true, userMessage: LOGIN_MESSAGE });
  return e;
}

export function runClaude({ claude, cwd, prompt, schema, model, effort, mcp, allow, env = process.env, signal, onStep = () => {}, onLine = () => {}, spawn = nodeSpawn } = {}) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error('stopped before it started'));
    const child = spawn(claude, claudeArgs({ schema, model, effort, mcp, allow }), { cwd, env, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true });
    let buffer = '';
    let errText = '';
    let result = null;
    let sessionId = null;
    const tools = [];
    let settled = false;
    const done = (fn, value) => {
      if (settled) return;
      settled = true;
      signal?.removeEventListener?.('abort', abort);
      fn(value);
    };
    const abort = () => {
      child.kill();
      done(reject, new Error('stopped'));
    };
    signal?.addEventListener?.('abort', abort, { once: true });

    const hear = (line) => {
      onLine(line);
      let e;
      try {
        e = JSON.parse(line);
      } catch {
        return; // not an event: the CLI's own noise
      }
      if (e.type === 'system' && e.subtype === 'init') sessionId = e.session_id ?? sessionId;
      if (e.type === 'assistant') {
        for (const c of e.message?.content ?? []) {
          if (c.type !== 'tool_use') continue;
          tools.push(String(c.name).replace(/^mcp__[^_]+__/, ''));
          const step = stepOf(c.name, c.input);
          if (step) onStep(step);
        }
      }
      if (e.type === 'result') result = e;
    };
    child.stdout.on('data', (chunk) => {
      buffer += chunk.toString('utf8');
      let at;
      while ((at = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, at).trim();
        buffer = buffer.slice(at + 1);
        if (line) hear(line);
      }
    });
    child.stderr.on('data', (chunk) => {
      errText = (errText + chunk.toString('utf8')).slice(-2000);
    });
    child.on('error', (e) => done(reject, new Error(`could not start claude (${claude}): ${e.message}`)));
    child.on('close', (code) => {
      if (buffer.trim()) hear(buffer.trim());
      if (!result || result.is_error || code !== 0) return done(reject, sessionError(code, result, errText));
      done(resolve, {
        answer: answerOf(result),
        text: String(result.result ?? ''),
        sessionId: result.session_id ?? sessionId,
        cost: result.total_cost_usd ?? null,
        turns: result.num_turns ?? null,
        tools,
        denied: (result.permission_denials ?? []).map((d) => d.tool_name ?? String(d)),
      });
    });
    child.stdin.on('error', () => {}); // a session that dies at once closes stdin under us
    child.stdin.end(prompt);
  });
}

// A session started ahead of its first message, for the quick translation (quick.js). A fresh `claude -p` spends 3 to
// 10 s starting before it reads anything (INSTANT_TRANSLATION_PLAN.md §1), so the caller starts this first and does its
// own work meanwhile. The messages go in on stdin (--input-format stream-json); system is the standing prompt, in place of
// Claude Code's own (--system-prompt). No tool and no MCP server at all.
//
// An answer is taken when its message stops (--include-partial-messages gives that event), not at the turn's result:
// the CLI writes a post-turn summary first, which held every result back by about 1.8 s (measured 2026-10-23). The cost
// comes with the result, so ask gives it as a promise.
export function sessionArgs({ system, model, effort } = {}) {
  return [...claudeArgs({ model, effort }), '--input-format', 'stream-json', '--include-partial-messages', ...(system ? ['--system-prompt', system] : [])];
}

export function startSession({ claude, cwd, system, model, effort, env = process.env, spawn = nodeSpawn } = {}) {
  const child = spawn(claude, sessionArgs({ system, model, effort }), { cwd, env, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true });
  let buffer = '';
  let errText = '';
  // the messages sent and not yet settled by a result, oldest first: { resolve, reject, settle, cost, text, answered }
  const queue = [];
  let ended = null; // the Error once the session is gone
  const answering = () => queue.find((q) => !q.answered);
  const fail = (e) => {
    ended ??= e;
    for (const q of queue.splice(0)) {
      q.settle(null);
      if (!q.answered) q.reject(ended);
    }
  };
  const hear = (e) => {
    if (e.type === 'assistant') {
      const q = answering();
      for (const c of e.message?.content ?? []) if (q && c.type === 'text') q.text += c.text;
    } else if (e.type === 'stream_event' && e.event?.type === 'message_stop') {
      // a login failure comes as text too; that one waits for its result, which says it is an error
      const q = answering();
      if (!q?.text.trim() || looksLikeLoginFailure(q.text)) return;
      q.answered = true;
      q.resolve({ text: q.text, cost: q.cost });
    } else if (e.type === 'result') {
      const q = queue.shift();
      if (!q) return;
      q.settle(e.total_cost_usd ?? null);
      if (q.answered) return;
      q.answered = true;
      if (e.is_error) q.reject(sessionError(0, e, errText));
      else q.resolve({ text: String(e.result ?? ''), cost: q.cost });
    }
  };
  child.stdout.on('data', (chunk) => {
    buffer += chunk.toString('utf8');
    let at;
    while ((at = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, at).trim();
      buffer = buffer.slice(at + 1);
      let e;
      try {
        e = JSON.parse(line);
      } catch {
        continue; // not an event: the CLI's own noise
      }
      hear(e);
    }
  });
  child.stderr.on('data', (chunk) => {
    errText = (errText + chunk.toString('utf8')).slice(-2000);
  });
  child.on('error', (e) => fail(new Error(`could not start claude (${claude}): ${e.message}`)));
  child.on('close', (code) => fail(sessionError(code, null, errText)));
  child.stdin.on('error', () => {}); // a session that dies at once closes stdin under us
  return {
    // -> Promise<{ text, cost: Promise<dollars | null> }>; a second message may go before the first is answered
    ask(prompt) {
      if (ended) return Promise.reject(ended);
      return new Promise((resolve, reject) => {
        const q = { resolve, reject, text: '', answered: false };
        q.cost = new Promise((settle) => (q.settle = settle));
        queue.push(q);
        child.stdin.write(`${JSON.stringify({ type: 'user', message: { role: 'user', content: prompt } })}\n`);
      });
    },
    get alive() {
      return !ended;
    },
    close() {
      ended ??= new Error('the session was closed');
      child.stdin.end();
      child.kill();
    },
  };
}

// Sessions started ahead: one waits per model and effort, a request takes it and a new one starts behind it, so no
// request waits the ~3 s a session takes to start. One that died waiting is replaced.
export function sessionPool(start) {
  const waiting = new Map();
  const keyOf = (model, effort) => `${model}|${effort}`;
  return {
    take(model, effort) {
      const s = waiting.get(keyOf(model, effort));
      waiting.delete(keyOf(model, effort));
      if (s && s.alive !== false) return s;
      s?.close();
      return start({ model, effort });
    },
    refill(model, effort) {
      const s = waiting.get(keyOf(model, effort));
      if (s && s.alive !== false) return; // one waits already
      s?.close();
      waiting.set(keyOf(model, effort), start({ model, effort }));
    },
    close() {
      for (const s of waiting.values()) s.close();
      waiting.clear();
    },
  };
}

export function sessionRunner({ claude, cwd, model, effort, env, onLine, spawn } = {}) {
  const kb = { kb: { command: process.execPath, args: ['scripts/kb-mcp.js'] } };
  return (prompt, { schema, tools = 'none', onStep, signal } = {}) =>
    runClaude({ claude, cwd, prompt, schema, model, effort, env, signal, onStep, onLine, spawn, mcp: tools === 'kb' ? kb : {}, allow: tools === 'kb' ? TRANSLATOR_TOOLS : [] });
}
