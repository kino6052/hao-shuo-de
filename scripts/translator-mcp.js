#!/usr/bin/env node
// kb_translate over stdio (TRANSLATOR_PLAN.md D5): the translator as one MCP tool, for an AI agent outside this repo.
// The tool is in src/lib/translator/mcp.js; each call runs the same pipeline as the daemon and `npm run translator --
// translate --full` (src/lib/translator/pipeline.js), with the same login (`node scripts/translator-daemon.js set-token`).
//
//   claude mcp add hao-shuo-de-translator -- node C:/Repos/jiandanhua-dictionary/haoshuode-app/scripts/translator-mcp.js
//   node scripts/translator-mcp.js [--model opus] [--effort high] [--claude PATH]
//
// Not in this repo's .mcp.json: a session here follows the translate skill itself. The sessions it starts get only the kb
// server (--strict-mcp-config, claude.js), so they cannot call kb_translate again. A translation takes minutes, so the
// client must wait that long for a tool (Claude Code: MCP_TOOL_TIMEOUT, in milliseconds). One call runs at a time.
//
// stdout is the protocol, so anything to read goes to stderr.

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { createMcpServer, serveStdio } from '../src/lib/kb/mcp.js';
import { findClaude, sessionRunner } from '../src/lib/translator/claude.js';
import { CLAUDE_TOKEN_ENV, readClaudeToken } from '../src/lib/translator/home.js';
import { TRANSLATE_TOOL, callTranslate } from '../src/lib/translator/mcp.js';
import { translate } from '../src/lib/translator/pipeline.js';
import { openKb } from './kb.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const { values } = parseArgs({ options: { model: { type: 'string', default: 'opus' }, effort: { type: 'string', default: 'high' }, claude: { type: 'string' } } });

// claude and the login are looked up at each call, so a token set while the server runs is used at once
async function translateText(request, { blind }) {
  const token = readClaudeToken();
  const env = { ...process.env, ...(token && { [CLAUDE_TOKEN_ENV]: token }) };
  const run = sessionRunner({ claude: findClaude({ given: values.claude }), cwd: ROOT, model: values.model, effort: values.effort, env });
  return translate(request, { kb: await openKb(), run, blind, model: values.model, onStep: (step) => console.error(`kb_translate: ${step}`) });
}

const server = createMcpServer({
  name: 'hao-shuo-de-translator',
  tools: [TRANSLATE_TOOL],
  call: (_tool, args) => callTranslate(args, { translateText }),
  instructions: 'kb_translate turns English into Hao-shuo-de (only the book\'s words), checked by the dictionary\'s tools and read back by a second reader without the English. It takes a few minutes a text.',
});
serveStdio(server, { label: 'translator-mcp' });
