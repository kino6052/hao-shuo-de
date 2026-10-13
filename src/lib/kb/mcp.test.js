import { describe, expect, test } from 'bun:test';
import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { createKb, renderCard } from './kb.js';
import { createMcpServer } from './mcp.js';
import { TOOLS, callTool } from './tools.js';
import { appendRow, scoreboardRow } from './scoreboard.js';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
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

  test('tools/list names the twelve tools, each with a description and a schema', async () => {
    const { tools } = (await rpc('tools/list')).result;
    expect(tools.map((t) => t.name)).toEqual(['kb_word', 'kb_remove', 'kb_parse', 'kb_check_form', 'kb_atoms', 'kb_relations', 'kb_meaning', 'kb_candidates', 'kb_add', 'kb_swaps', 'kb_scoreboard', 'kb_query']);
    for (const t of TOOLS) {
      expect(t.description.length).toBeGreaterThan(40);
      expect(t.inputSchema.type).toBe('object');
      // kb_atoms, kb_relations, kb_meaning, kb_candidates, kb_swaps and kb_scoreboard ask for nothing: no name is the whole report, no flag is the numbers now
      if (!['kb_atoms', 'kb_relations', 'kb_meaning', 'kb_candidates', 'kb_swaps', 'kb_scoreboard'].includes(t.name)) expect(t.inputSchema.required.length).toBeGreaterThan(0);
      for (const r of t.inputSchema.required ?? []) expect(t.inputSchema.properties[r]).toBeDefined();
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

  test('kb_scoreboard measures now against the stored rows, or lists them', async () => {
    const scoreboardFile = join(mkdtempSync(join(tmpdir(), 'kb-scoreboard-')), 'scoreboard.csv');
    // nothing stored yet
    expect(await callTool(kb, 'kb_scoreboard', {}, { scoreboardFile })).toContain('(no earlier row)');
    expect(await callTool(kb, 'kb_scoreboard', { history: true }, { scoreboardFile })).toContain('No rows stored yet');

    // one stored row; the data then gains a word, and the report shows the change
    appendRow(scoreboardFile, await scoreboardRow(kb, { label: 'before', atoms: false }));
    const more = createKb({ ...source, words: { ...source.words, extra: { ...source.words.ge4, term: 'zzz' } } });
    const text = await callTool(more, 'kb_scoreboard', {}, { scoreboardFile });
    expect(text).toContain('against the row of');
    expect(text).toMatch(/words\s+13\s+\(\+1\)/);
    expect(await callTool(kb, 'kb_scoreboard', { history: true }, { scoreboardFile })).toMatch(/before\s*$/);
  });

  test('kb_relations is the counts, or one kind with the reason for each', async () => {
    const all = textOf(await call('kb_relations', {}));
    expect(all).toMatch(/^Relations: \d+ \(\d+ accepted, \d+ proposed by a rule, waiting for review\)/);
    expect(all).toContain('Name a kind');
    const kind = textOf(await call('kb_relations', { kind: 'kind-of', status: 'proposed', limit: 2 }));
    expect(kind).toContain('kind-of');
    expect(kind).toContain('[proposed]');
    // a wrong kind is an error that lists the kinds
    const bad = await call('kb_relations', { kind: 'cousin' });
    expect(bad.result.isError).toBe(true);
    expect(textOf(bad)).toContain('the kinds are');
  });

  test('kb_meaning is the report, a part of it, or one word', async () => {
    const all = textOf(await call('kb_meaning', {}));
    expect(all).toMatch(/^Meaning links: 2 coverage items/);
    expect(all).toContain('Made of primes');
    const part = textOf(await call('kb_meaning', { section: 'grounding' }));
    expect(part.startsWith('Made of primes')).toBe(true);
    const one = textOf(await call('kb_meaning', { name: 'chī' }));
    expect(one).toContain('chī');
    expect(one).toContain('Says: grammar:eat.');
    expect((await call('kb_meaning', { section: 'nope' })).result.isError).toBe(true);
    expect((await call('kb_meaning', { name: 'nope' })).result.isError).toBe(true);
  });

  test('kb_candidates ranks the words that could go; kb_add and kb_swaps need the frequency list for Mandarin', async () => {
    const text = textOf(await call('kb_candidates', { limit: 3 }));
    expect(text).toMatch(/^Words that could go, the cheapest first \(12 words/);
    expect(text).toContain('… and 9 more');
    expect(textOf(await call('kb_candidates', { kind: 'add' }))).toContain('No frequency list');
    expect(textOf(await call('kb_add', { root: '器' }))).toContain('No frequency list');
    expect(textOf(await call('kb_swaps', { k: 2 }))).toMatch(/^No trade of 2 root/);
    expect((await call('kb_candidates', { kind: 'both' })).result.isError).toBe(true);
    expect((await call('kb_add', {})).result.isError).toBe(true);
  });

  test('kb_atoms is the report, or one word\'s line', async () => {
    // the fixture has no paraphrases, so every word is still to be reviewed
    expect(textOf(await call('kb_atoms', {}))).toMatch(/^Atoms: 12 words, the smallest set that says the rest has 12\./);
    expect(textOf(await call('kb_atoms', { name: 'chī' }))).toContain('is not reviewed yet');

    // with one atom mark and one paraphrase
    const w = source.words;
    const reviewed = createKb({
      ...source,
      words: {
        ...w,
        chi1: { ...w.chi1, atom: { eng: 'primitive', rus: 'первичное' } },
        fan4: { ...w.fan4, paraphrase: { forms: ['{{word:chi1}} {{word:de}}'], verdict: 'fine' } },
      },
    });
    const other = createMcpServer({ openKb: async () => reviewed });
    const ask = async (args) => (await other.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'kb_atoms', arguments: args } })).result;
    expect(textOf({ result: await ask({}) })).toMatch(/^Atoms: 12 words, the smallest set that says the rest has 11\.\n {2}1 true atoms \(1 marked, 0 clumsy\), 0 swappable, 1 secondary, 10 not reviewed yet\./);
    const line = textOf({ result: await ask({ name: 'fàn' }) });
    expect(line).toContain('fàn 饭 (fan4) is secondary');
    expect(line).toContain('Said as: chī de (form 1, 1 step from the set), using chī, de; rests on chī, de.');
    expect(textOf({ result: await ask({ name: 'chi1' }) })).toContain('Why: marked as an atom.');
    const unknown = await ask({ name: 'zzzz' });
    expect(unknown.isError).toBe(true);
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
      expect(list.result.tools).toHaveLength(12);
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
