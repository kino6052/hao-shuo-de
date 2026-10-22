#!/usr/bin/env node
// The KB as Claude tools: an MCP server over stdio (KB_PLAN.md phase 1).
// Registered in .mcp.json, so Claude Code starts it in this folder. The tools
// are kb_word, kb_remove, kb_parse, kb_check_form and kb_query
// (src/lib/kb/tools.js); each answers with the same text `node scripts/kb.js`
// prints. The data is read fresh whenever a file changed.
//
// stdout is the protocol, so anything to read goes to stderr.

import { openKb } from './kb.js';
import { createMcpServer, serveStdio } from '../src/lib/kb/mcp.js';

serveStdio(createMcpServer({ openKb }), { label: 'kb-mcp' });
