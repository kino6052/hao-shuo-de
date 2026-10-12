import { describe, expect, test } from 'bun:test';
import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { createKb, renderCard } from './kb.js';
import { createMcpServer } from './mcp.js';
import { TOOLS } from './tools.js';
import { source } from './fixture.js';

const patterns = [
  {
    id: 'frame',
    rules: [
      { lhs: 'Utt', hsd: 'S' },
      { lhs: 'S', hsd: 'NP VP' },
      { lhs: 'NP', hsd: '@pronoun' },
      { lhs: 'NP', hsd: '@noun' },
      { lhs: 'VP', hsd: '@verb NP' },
    ],
  },
];
const kb = createKb({ ...source, patterns });
const server = createMcpServer({ openKb: async () => kb });
const rpc = (method, params, id = 1) => server.handle({ jsonrpc: '2.0', id, method, params });
const call = (name, args) => rpc('tools/call', { name, arguments: args });
const textOf = (r) => r.result.content[0].text;

describe('the protocol', () => {
  test('initialize answers with the version the client asked for, and the tools capability', async () => {
    const r = await rpc('initialize', { protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'x' } });
    expect(r.id).toBe(1);
    expect(r.result.protocolVersion).toBe('2025-03-26');
    expect(r.result.capabilities).toEqual({ tools: {} });
    expect(r.result.serverInfo.name).toBe('hao-shuo-de-kb');
  });

  test('a version we do not know gets our newest', async () => {
    expect((await rpc('initialize', { protocolVersion: '1999-01-01' })).result.protocolVersion).toBe('2025-06-18');
  });

  test('a notification gets no reply; a ping gets an empty one; an unknown method is an error', async () => {
    expect(await server.handle({ jsonrpc: '2.0', method: 'notifications/initialized' })).toBeNull();
    expect(await server.handle({ jsonrpc: '2.0', method: 'notifications/whatever' })).toBeNull();
    expect((await rpc('ping')).result).toEqual({});
    expect((await rpc('nope')).error.code).toBe(-32601);
  });

  test('tools/list names the five tools, each with a description and a schema', async () => {
    const { tools } = (await rpc('tools/list')).result;
    expect(tools.map((t) => t.name)).toEqual(['kb_word', 'kb_remove', 'kb_parse', 'kb_check_form', 'kb_query']);
    for (const t of TOOLS) {
      expect(t.description.length).toBeGreaterThan(40);
      expect(t.inputSchema.type).toBe('object');
      expect(t.inputSchema.required.length).toBeGreaterThan(0);
      for (const r of t.inputSchema.required) expect(t.inputSchema.properties[r]).toBeDefined();
    }
  });

  test('an unknown tool is a protocol error', async () => {
    expect((await call('kb_nope', {})).error.code).toBe(-32602);
  });
});

describe('the tools answer with the text the command line prints', () => {
  test('kb_word is the card', async () => {
    expect(textOf(await call('kb_word', { name: 'chī' }))).toBe(renderCard(kb.word('chī')));
  });

  test('kb_remove takes a list or one string, and says what has to be redone', async () => {
    const one = textOf(await call('kb_remove', { words: 'fan4' }));
    expect(one).toMatch(/^Remove: fàn/);
    expect(one).toContain('Composites left with no form');
    expect(textOf(await call('kb_remove', { words: ['fan4'] }))).toBe(one);
    expect(textOf(await call('kb_remove', { words: 'chi1, fan4' }))).toMatch(/^Remove: chī.*fàn/);
  });

  test('kb_parse says a sentence parses, and where another stops', async () => {
    expect(textOf(await call('kb_parse', { text: 'Wǒ chī fàn.' }))).toContain('parses');
    const bad = textOf(await call('kb_parse', { text: 'Fàn wǒ chī chī.' }));
    expect(bad).toContain('does not parse');
  });

  test('kb_check_form says ok with the refs, or lists the problems', async () => {
    expect(textOf(await call('kb_check_form', { forms: 'chī fàn', tts: '吃饭' }))).toBe('ok: chī fàn = {{word:chi1}} {{word:fan4}}');
    const bad = textOf(await call('kb_check_form', { forms: 'chī fàn', tts: '吃饮' }));
    expect(bad).toMatch(/^problems:/);
    expect(bad).toContain("don't spell");
  });

  test('kb_query runs raw rules on the facts and returns rows', async () => {
    const r = JSON.parse(textOf(await call('kb_query', { program: '#show made_with_ji/1. made_with_ji(C) :- uses(C,_,_,ji1).' })));
    expect(r.status).toBe('SATISFIABLE');
    expect(r.models[0].made_with_ji.map((x) => x[0]).sort()).toEqual(['飞机']);
  });

  test('kb_query can load the sentences of some words', async () => {
    const r = JSON.parse(textOf(await call('kb_query', { program: '#show n/1. n(N) :- N = #count{ S : sent_uses(S,fan4) }.', text: ['fan4'] })));
    expect(r.models[0].n[0][0]).toBeGreaterThan(0);
  });

  test('a question that cannot be answered is the tool\'s error, not a crash', async () => {
    const r = await call('kb_word', { name: 'zzzz' });
    expect(r.result.isError).toBe(true);
    expect(textOf(r)).toMatch(/no word "zzzz"/);
    expect((await call('kb_word', {})).result.isError).toBe(true);
    const syntax = await call('kb_query', { program: 'this is not clingo' });
    expect(syntax.result.isError).toBe(true);
    expect(textOf(syntax)).toMatch(/clingo/);
  });
});

describe('the real server over stdio, on the real data', () => {
  test('initialize, list, then ask what happens if we drop dēng', async () => {
    const child = spawn('node', [fileURLToPath(new URL('../../../scripts/kb-mcp.js', import.meta.url))], { stdio: ['pipe', 'pipe', 'inherit'] });
    const replies = new Map();
    const waiting = new Map();
    createInterface({ input: child.stdout }).on('line', (line) => {
      const m = JSON.parse(line);
      replies.set(m.id, m);
      waiting.get(m.id)?.(m);
    });
    const send = (m) => child.stdin.write(`${JSON.stringify(m)}\n`);
    const ask = (id, method, params) =>
      new Promise((ok) => {
        if (replies.has(id)) return ok(replies.get(id));
        waiting.set(id, ok);
        send({ jsonrpc: '2.0', id, method, params });
      });
    try {
      const init = await ask(1, 'initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'test', version: '0' } });
      expect(init.result.serverInfo.name).toBe('hao-shuo-de-kb');
      send({ jsonrpc: '2.0', method: 'notifications/initialized' });
      const list = await ask(2, 'tools/list', {});
      expect(list.result.tools).toHaveLength(5);
      const drop = await ask(3, 'tools/call', { name: 'kb_remove', arguments: { words: 'dēng' } });
      const text = drop.result.content[0].text;
      expect(drop.result.isError).toBeUndefined();
      expect(text).toMatch(/^Remove: dēng 灯/);
      expect(text).toContain('Composites left with no form: redo (2)');
      expect(text).toContain('Book to rewrite: 12 sentence(s)');
      // a query that runs too long is stopped (the server runs under node, as .mcp.json starts it; bun can't stop clingo's worker), and the server recovers
      const slow = await ask(6, 'tools/call', { name: 'kb_query', arguments: { program: '{ pick(1..40) } = 20. #show pick/1.', models: 0, timeout_ms: 500 } });
      expect(slow.result.content[0].text).toMatch(/ran out of time/);
      const after = await ask(7, 'tools/call', { name: 'kb_query', arguments: { program: '#show word/1.' } });
      expect(JSON.parse(after.result.content[0].text).status).toBe('SATISFIABLE');
      // a bad word is the tool's error, and the server keeps going
      const bad = await ask(4, 'tools/call', { name: 'kb_word', arguments: { name: 'qqqq' } });
      expect(bad.result.isError).toBe(true);
      expect((await ask(5, 'ping', {})).result).toEqual({});
    } finally {
      child.stdin.end();
      await new Promise((ok) => {
        child.once('exit', ok);
        setTimeout(() => (child.kill(), ok()), 5000).unref?.();
      });
    }
  }, 90_000);
});
