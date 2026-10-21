// The Model Context Protocol, the small part the KB needs: JSON-RPC 2.0, one
// message per line over stdio. No SDK; the tools are in tools.js.
//
//   const server = createMcpServer({ openKb });
//   await server.handle(message)   -> the reply message, or null (a notification)
//
// `openKb` gives the KB for the data as it is now, so every call sees the
// latest words and book without restarting the server.

import { TOOLS, callTool } from './tools.js';

const SUPPORTED = ['2025-06-18', '2025-03-26', '2024-11-05'];

const reply = (id, result) => ({ jsonrpc: '2.0', id, result });
const fail = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });

export function createMcpServer({ openKb, name = 'hao-shuo-de-kb', version = '0.1.0' }) {
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
            instructions:
              'Ask this server about the Hao-shuo-de dictionary: kb_word (a word card), kb_remove (what changes if words are dropped), kb_parse (grammar), ' +
              'kb_check_form (a proposed form), kb_atoms (which words are atoms), kb_relations (opposites, close words, groups and what a rule found), kb_english (which entries say an English word) / kb_hints (WordNet hints for drafting a word with no entry) / kb_export (an entry or the counts of the OntoLex export) / kb_cross_check (the kind-of, opposite and part-of relations checked against WordNet) / kb_yardsticks (how much of the word lists the dictionary can say) / kb_frontier (what it cannot say yet and the word that would fix each), kb_candidates / kb_add / kb_swaps (words that could go, roots that could come in, trades), kb_gains (the Chinese words to make core entries when growing to about 1000), kb_scoreboard (the numbers about the language), kb_query (raw clingo). It reads the data fresh and never changes it.',
          });
        case 'ping':
          return reply(id, {});
        case 'tools/list':
          return reply(id, { tools: TOOLS });
        case 'tools/call': {
          if (!TOOLS.some((t) => t.name === params.name)) return fail(id, -32602, `unknown tool "${params.name}"`);
          try {
            const text = await inTurn(async () => callTool(await openKb(), params.name, params.arguments ?? {}));
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
