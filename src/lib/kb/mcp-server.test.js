// The KB server as a tool really starts it (scripts/kb-mcp.js over stdio, on the real data): the protocol
// handshake, a tool call, a question stopped for taking too long, and a bad word that must not end the server.
// Its own file because it spawns node and reads the whole dictionary -- `node scripts/test.js --all` runs it
// (the rest of the server's tests use a fixture and are in mcp.test.js).

import { describe, expect, test } from 'bun:test';
import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { TOOLS } from './tools.js';

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
      expect(list.result.tools).toHaveLength(TOOLS.length);
      expect(list.result.tools.map((t) => t.name)).toEqual(TOOLS.map((t) => t.name));
      const drop = await ask(3, 'tools/call', { name: 'kb_remove', arguments: { words: 'dēng' } });
      const text = drop.result.content[0].text;
      expect(drop.result.isError).toBeUndefined();
      expect(text).toMatch(/^Remove: dēng 灯/);
      // the counts grow with the dictionary, so check their shape: redo is listed with a positive count, and some book sentences must be rewritten
      expect(text).toMatch(/Composites left with no form: redo \([1-9]\d*\)/);
      expect(text).toMatch(/Book to rewrite: [1-9]\d* sentence\(s\)/);
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
