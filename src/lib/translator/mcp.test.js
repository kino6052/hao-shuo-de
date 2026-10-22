// TRANSLATOR_PLAN.md D5: kb_translate through the same protocol code as the kb server, with a stand-in translation.

import { describe, expect, test } from 'bun:test';
import { createMcpServer } from '../kb/mcp.js';
import { assemble } from './output.js';
import { MAX_TEXT, TRANSLATE_TOOL, callTranslate } from './mcp.js';

const result = (request) =>
  assemble({
    request,
    answer: {
      sketch: [{ id: 'i1', idea: 'I eat', needed: true, links: '' }],
      sentences: [{ pinyin: 'Wǒ chī fàn.', english: 'I eat.', literally: 'I eat rice.', reading: '1', source: 'built from the grammar', ideas: ['i1'] }],
      cast: [],
      structures: [],
      gaps: [],
      notes: '',
    },
    verified: { lesson: null, sentences: [{ hanzi: '我 吃 饭.', check: { unknown: [], parses: true, readings: 1, means: 'yes', words: 3 } }], problems: [], castProblems: [] },
    blind: { sentences: [{ english: 'I eat.' }], whole: 'Someone eats.', unsure: '' },
    judge: { ideas: [{ id: 'i1', verdict: 'kept', note: '' }], added: [] },
  });

function serverWith(translateText) {
  const calls = [];
  const server = createMcpServer({
    name: 'hao-shuo-de-translator',
    tools: [TRANSLATE_TOOL],
    call: (_tool, args) => callTranslate(args, { translateText: (request, opts) => (calls.push({ request, opts }), translateText(request, opts)) }),
    instructions: 'x',
  });
  const call = (args) => server.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'kb_translate', arguments: args } });
  return { server, call, calls };
}

describe('kb_translate', () => {
  test('lists one tool, kb_translate, with text required', async () => {
    const { server } = serverWith(async (r) => result(r));
    const r = await server.handle({ jsonrpc: '2.0', id: 1, method: 'tools/list' });
    expect(r.result.tools.map((t) => t.name)).toEqual(['kb_translate']);
    expect(r.result.tools[0].inputSchema.required).toEqual(['text']);
    const init = await server.handle({ jsonrpc: '2.0', id: 2, method: 'initialize', params: {} });
    expect(init.result.serverInfo.name).toBe('hao-shuo-de-translator');
  });

  test('answers with the review file: the text, the check and the meaning', async () => {
    const { call, calls } = serverWith(async (r) => result(r));
    const r = await call({ text: '  I eat.  ', lesson: 3 });
    expect(r.result.isError).toBeUndefined();
    const text = r.result.content[0].text;
    expect(text).toContain('Wǒ chī fàn.');
    expect(text).toContain('我 吃 饭.');
    expect(text).toContain('1 of 1 needed ideas kept');
    expect(text).not.toContain('## The result as JSON');
    expect(calls[0]).toEqual({ request: { text: 'I eat.', lesson: '3' }, opts: { blind: true } });
  });

  test('json: true adds the result; blind: false is passed on; no lesson sends none', async () => {
    const { call, calls } = serverWith(async (r) => result(r));
    const text = (await call({ text: 'I eat.', json: true, blind: false })).result.content[0].text;
    expect(JSON.parse(text.split('## The result as JSON')[1]).sentences[0].pinyin).toBe('Wǒ chī fàn.');
    expect(calls[0]).toEqual({ request: { text: 'I eat.' }, opts: { blind: false } });
  });

  test('no text, or one over the limit, is an error result and runs nothing', async () => {
    const { call, calls } = serverWith(async (r) => result(r));
    const empty = await call({ text: '   ' });
    expect(empty.result.isError).toBe(true);
    expect(empty.result.content[0].text).toMatch(/Give the English/);
    const long = await call({ text: 'a'.repeat(MAX_TEXT + 1) });
    expect(long.result.content[0].text).toMatch(/the limit is 2000/);
    expect(calls).toHaveLength(0);
  });

  test("a login failure says how to log in; a failure's userMessage is given as it is", async () => {
    const login = serverWith(async () => {
      throw Object.assign(new Error('401'), { login: true, userMessage: 'for the page' });
    });
    expect((await login.call({ text: 'I eat.' })).result.content[0].text).toMatch(/claude setup-token/);
    const lesson = serverWith(async () => {
      throw Object.assign(new Error('x'), { userMessage: 'There is no lesson "99".' });
    });
    const r = await lesson.call({ text: 'I eat.', lesson: '99' });
    expect(r.result).toEqual({ content: [{ type: 'text', text: 'There is no lesson "99".' }], isError: true });
  });
});
