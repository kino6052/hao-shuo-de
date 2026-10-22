// TRANSLATOR_PLAN.md S1, S6, S7: the session runner with a fake `claude` process -- the arguments it is started with
// (no built-in tool, only the named MCP server, only the allowed tools, nothing saved), the steps its events become,
// its answer, and what a failed or stopped session does.

import { describe, expect, test } from 'bun:test';
import { EventEmitter } from 'node:events';
import { PassThrough } from 'node:stream';
import { answerOf, claudeArgs, looksLikeLoginFailure, runClaude, sessionRunner, stepOf, TRANSLATOR_TOOLS, LOGIN_MESSAGE } from './claude.js';

// A child process that prints the given events (one JSON per line) and exits with `code`.
function fakeSpawn(events, { code = 0, stderr = '', hold = false } = {}) {
  const calls = [];
  const spawn = (cmd, args, opts) => {
    const child = new EventEmitter();
    child.stdout = new PassThrough();
    child.stderr = new PassThrough();
    child.stdin = new PassThrough();
    let stdin = '';
    child.stdin.on('data', (c) => (stdin += c));
    child.killed = false;
    child.kill = () => {
      child.killed = true;
      setTimeout(() => child.emit('close', null), 0);
    };
    calls.push({ cmd, args, opts, child, stdin: () => stdin });
    if (!hold) {
      setTimeout(() => {
        for (const e of events) child.stdout.write(`${typeof e === 'string' ? e : JSON.stringify(e)}\n`);
        if (stderr) child.stderr.write(stderr);
        child.stdout.end();
        setTimeout(() => child.emit('close', code), 5);
      }, 0);
    }
    return child;
  };
  return { spawn, calls };
}

const init = { type: 'system', subtype: 'init', session_id: 's1', tools: ['mcp__kb__kb_lookup'] };
const toolUse = (name, input) => ({ type: 'assistant', message: { content: [{ type: 'tool_use', name, input }] } });
const result = (over = {}) => ({ type: 'result', subtype: 'success', is_error: false, result: '', session_id: 's1', total_cost_usd: 0.12, num_turns: 4, permission_denials: [], structured_output: { ok: 1 }, ...over });

describe('claudeArgs', () => {
  test('no built-in tool, only the kb server, only the allowed tools, nothing saved, no settings or plugins', () => {
    const args = claudeArgs({ schema: { type: 'object' }, model: 'opus', mcp: { kb: { command: 'node', args: ['scripts/kb-mcp.js'] } }, allow: ['kb_lookup', 'kb_gloss'] });
    const after = (flag) => args[args.indexOf(flag) + 1];
    expect(args[0]).toBe('-p');
    expect(after('--tools')).toBe('');
    expect(args).toContain('--strict-mcp-config');
    expect(args).toContain('--restricted');
    expect(args).toContain('--no-session-persistence');
    expect(JSON.parse(after('--mcp-config'))).toEqual({ mcpServers: { kb: { command: 'node', args: ['scripts/kb-mcp.js'] } } });
    expect(after('--allowedTools')).toBe('mcp__kb__kb_lookup,mcp__kb__kb_gloss');
    expect(after('--permission-mode')).toBe('dontAsk');
    expect(after('--permission-prompts')).toBe('none');
    expect(after('--json-schema')).toBe('{"type":"object"}');
    expect(after('--model')).toBe('opus');
  });

  test('no server: still --strict-mcp-config (so the project\'s .mcp.json is left out), and no tool is allowed', () => {
    const args = claudeArgs({});
    expect(args).toContain('--strict-mcp-config');
    expect(args).not.toContain('--mcp-config');
    expect(args).not.toContain('--allowedTools');
  });

  test('the translator\'s tools leave out the slow what-ifs', () => {
    expect(TRANSLATOR_TOOLS).toContain('kb_check_reading');
    for (const slow of ['kb_remove', 'kb_swaps', 'kb_gains', 'kb_query']) expect(TRANSLATOR_TOOLS).not.toContain(slow);
  });
});

describe('stepOf, answerOf, looksLikeLoginFailure', () => {
  test('a tool call becomes a plain step; a lookup names its English; an unknown tool says nothing', () => {
    expect(stepOf('mcp__kb__kb_lookup', { word: 'umbrella' })).toBe('Looking up "umbrella"');
    expect(stepOf('mcp__kb__kb_check_reading', {})).toBe('Checking the meaning');
    expect(stepOf('StructuredOutput', {})).toBe('Writing the answer');
    expect(stepOf('mcp__kb__kb_scoreboard', {})).toBeNull();
  });

  test('the structured output, else the JSON in the text', () => {
    expect(answerOf({ structured_output: { a: 1 } })).toEqual({ a: 1 });
    expect(answerOf({ result: 'Here:\n```json\n{"a": 2}\n```' })).toEqual({ a: 2 });
    expect(answerOf({ result: 'so {"a": 3} it is' })).toEqual({ a: 3 });
    expect(answerOf({ result: 'nothing' })).toBeNull();
  });

  test('login trouble is told apart from other failures', () => {
    expect(looksLikeLoginFailure('Failed to authenticate: OAuth session expired')).toBe(true);
    expect(looksLikeLoginFailure('rate limited')).toBe(false);
  });
});

describe('runClaude', () => {
  test('the prompt goes in on stdin, tool calls become steps, the answer and the numbers come back', async () => {
    const { spawn, calls } = fakeSpawn([init, toolUse('mcp__kb__kb_lookup', { word: 'rain' }), 'not json', toolUse('mcp__kb__kb_gloss', {}), result()]);
    const steps = [];
    const out = await runClaude({ claude: 'claude', cwd: '/repo', prompt: 'TRANSLATE THIS', spawn, onStep: (s) => steps.push(s) });
    expect(calls[0].stdin()).toBe('TRANSLATE THIS');
    expect(calls[0].args).not.toContain('TRANSLATE THIS'); // never on the command line
    expect(calls[0].opts.cwd).toBe('/repo');
    expect(steps).toEqual(['Looking up "rain"', 'Reading it back word by word']);
    expect(out).toMatchObject({ answer: { ok: 1 }, sessionId: 's1', cost: 0.12, turns: 4, tools: ['kb_lookup', 'kb_gloss'], denied: [] });
  });

  test('a refused tool is reported', async () => {
    const { spawn } = fakeSpawn([init, result({ permission_denials: [{ tool_name: 'Bash' }] })]);
    expect((await runClaude({ claude: 'c', prompt: 'p', spawn })).denied).toEqual(['Bash']);
  });

  test('a login failure carries a message for the person', async () => {
    const { spawn } = fakeSpawn([init, result({ is_error: true, result: 'Failed to authenticate: OAuth session expired and could not be refreshed', terminal_reason: 'api_error' })], { code: 1 });
    const e = await runClaude({ claude: 'c', prompt: 'p', spawn }).catch((x) => x);
    expect(e.login).toBe(true);
    expect(e.userMessage).toBe(LOGIN_MESSAGE);
    expect(e.message).toMatch(/api_error/);
  });

  test('any other failure has no message for the person (the daemon shows its own)', async () => {
    const { spawn } = fakeSpawn([init], { code: 2, stderr: 'boom' });
    const e = await runClaude({ claude: 'c', prompt: 'p', spawn }).catch((x) => x);
    expect(e.message).toMatch(/ended with 2.*boom/);
    expect(e.userMessage).toBeUndefined();
  });

  test('stopping it kills the process', async () => {
    const { spawn, calls } = fakeSpawn([], { hold: true });
    const controller = new AbortController();
    const running = runClaude({ claude: 'c', prompt: 'p', spawn, signal: controller.signal });
    controller.abort();
    expect((await running.catch((x) => x)).message).toBe('stopped');
    expect(calls[0].child.killed).toBe(true);
  });
});

describe('sessionRunner', () => {
  test("'kb' gets the kb server and the translator's tools; 'none' gets nothing", async () => {
    const { spawn, calls } = fakeSpawn([init, result()]);
    const run = sessionRunner({ claude: 'c', cwd: '/repo', model: 'opus', spawn });
    await run('a', { tools: 'kb', schema: { type: 'object' } });
    await run('b', { tools: 'none' });
    const [kb, none] = calls.map((c) => c.args);
    expect(JSON.parse(kb[kb.indexOf('--mcp-config') + 1]).mcpServers.kb.args).toEqual(['scripts/kb-mcp.js']);
    expect(kb[kb.indexOf('--allowedTools') + 1].split(',')).toHaveLength(TRANSLATOR_TOOLS.length);
    expect(none).not.toContain('--mcp-config');
    expect(none).not.toContain('--allowedTools');
  });
});
