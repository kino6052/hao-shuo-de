#!/usr/bin/env node
// The KB as Claude tools: an MCP server over stdio (KB_PLAN.md phase 1).
// Registered in .mcp.json, so Claude Code starts it in this folder. The tools
// are kb_word, kb_remove, kb_parse, kb_check_form and kb_query
// (src/lib/kb/tools.js); each answers with the same text `node scripts/kb.js`
// prints. The data is read fresh whenever a file changed.
//
// stdout is the protocol, so anything to read goes to stderr.

import { createInterface } from 'readline';
import { openKb } from './kb.js';
import { createMcpServer } from '../src/lib/kb/mcp.js';

const server = createMcpServer({ openKb });
const send = (m) => process.stdout.write(`${JSON.stringify(m)}\n`);

const lines = createInterface({ input: process.stdin });
let pending = 0;
let closed = false;
const finish = () => closed && pending === 0 && process.exit(0);

lines.on('line', async (line) => {
  if (!line.trim()) return;
  pending++;
  try {
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      return send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'parse error' } });
    }
    const out = await server.handle(msg);
    if (out) send(out);
  } catch (e) {
    console.error(`kb-mcp: ${e.stack ?? e}`);
  } finally {
    pending--;
    finish();
  }
});
lines.on('close', () => {
  closed = true;
  finish();
});
