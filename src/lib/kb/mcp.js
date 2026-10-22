// The Model Context Protocol, the small part the KB needs: JSON-RPC 2.0, one
// message per line over stdio. No SDK; the tools are in tools.js.
//
//   const server = createMcpServer({ openKb });
//   await server.handle(message)   -> the reply message, or null (a notification)
//   serveStdio(server, { label })  the process: one message per line in on stdin, out on stdout
//
// `openKb` gives the KB for the data as it is now, so every call sees the
// latest words and book without restarting the server. Another server (the
// translator's kb_translate, scripts/translator-mcp.js) passes its own
// `tools`, `call` and `instructions`.

import { createInterface } from 'readline';
import { TOOLS, callTool } from './tools.js';

const SUPPORTED = ['2025-06-18', '2025-03-26', '2024-11-05'];

const reply = (id, result) => ({ jsonrpc: '2.0', id, result });
const fail = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });

const KB_INSTRUCTIONS =
  'Ask this server about the Hao-shuo-de dictionary: kb_word (a word card), kb_remove (what changes if words are dropped), kb_parse (grammar), ' +
  'kb_check_form (a proposed form), kb_check_text (a text at a lesson\'s level: unknown words, late words and structures, parses, hanzi), kb_check_reading (does a sentence have the reading meant), kb_gloss (a sentence word by word in English, no AI), kb_lookup (an English word or phrase to Hao-shuo-de forms, by tier, with the lesson and a book sentence), kb_memory (an English sentence to the closest book sentences by their own English), kb_constructions (the English ways of saying in a sentence -- so, because, than, the one who -- to the patterns and grammar words that say them),kb_atoms (which words are atoms), kb_relations (opposites, close words, groups and what a rule found), kb_tags (where an entry sits on the topic and kind nets, what is under a tag, what two entries share), kb_built (what each composite\'s description is made from: its patterns, words and lesson), kb_lesson (what a lesson teaches: words, patterns, readable composites, sentences) / kb_patterns (the grammar patterns by tag or lesson, or one in full) / kb_uses (where a core word is used, or sentences like one), kb_akinator (find how to say an idea by questions: the answers so far in, the next question or what fits out), kb_english (which entries say an English word) / kb_hints (WordNet hints for drafting a word with no entry) / kb_export (an entry or the counts of the OntoLex export) / kb_cross_check (the kind-of, opposite and part-of relations checked against WordNet) / kb_yardsticks (how much of the word lists the dictionary can say) / kb_frontier (what it cannot say yet and the word that would fix each), kb_candidates / kb_add / kb_swaps (words that could go, roots that could come in, trades), kb_gains (the Chinese words to make core entries when growing to about 1000), kb_scoreboard (the numbers about the language), kb_query (raw clingo). It reads the data fresh and never changes it.';

export function createMcpServer({
  openKb,
  name = 'hao-shuo-de-kb',
  version = '0.1.0',
  tools = TOOLS,
  call = async (tool, args) => callTool(await openKb(), tool, args),
  instructions = KB_INSTRUCTIONS,
}) {
  // One tool call at a time: they share one clingo, and a timed-out query restarts it.
  let queue = Promise.resolve();
  const inTurn = (job) => {
    const done = queue.then(job);
    queue = done.catch(() => {});
    return done;
  };
  return {
    async handle(msg) {
      const { id, method, params = {} } = msg ?? {};
      if (method === undefined) return null; // a reply to us, or noise
      const isNotification = id === undefined || id === null;
      switch (method) {
        case 'initialize':
          return reply(id, {
            protocolVersion: SUPPORTED.includes(params.protocolVersion) ? params.protocolVersion : SUPPORTED[0],
            capabilities: { tools: {} },
            serverInfo: { name, version },
            instructions,
          });
        case 'ping':
          return reply(id, {});
        case 'tools/list':
          return reply(id, { tools });
        case 'tools/call': {
          if (!tools.some((t) => t.name === params.name)) return fail(id, -32602, `unknown tool "${params.name}"`);
          try {
            const text = await inTurn(() => call(params.name, params.arguments ?? {}));
            return reply(id, { content: [{ type: 'text', text }] });
          } catch (e) {
            // a question that can't be answered is the tool's result, not a protocol error
            return reply(id, { content: [{ type: 'text', text: String(e.message ?? e) }], isError: true });
          }
        }
        default:
          if (isNotification) return null; // notifications/initialized, notifications/cancelled, ...
          return fail(id, -32601, `method not found: ${method}`);
      }
    },
  };
}

// stdout is the protocol, so anything to read goes to stderr. The process ends once stdin closes and every call is answered.
export function serveStdio(server, { label = 'mcp', input = process.stdin, output = process.stdout } = {}) {
  const send = (m) => output.write(`${JSON.stringify(m)}\n`);
  const lines = createInterface({ input });
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
      console.error(`${label}: ${e.stack ?? e}`);
    } finally {
      pending--;
      finish();
    }
  });
  lines.on('close', () => {
    closed = true;
    finish();
  });
}
