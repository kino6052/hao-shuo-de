// kb_translate (TRANSLATOR_PLAN.md D5, TR1): the whole translator as one MCP tool, for an AI agent that is not a Claude
// session in this repo. The author's sessions and the daemon's follow the translate skill themselves; this is for a caller
// elsewhere that wants a Hao-shuo-de text back. scripts/translator-mcp.js serves it over stdio.
//
//   TRANSLATE_TOOL                                    the tool's name, description and input schema
//   callTranslate(args, { translateText }) -> text    checks the arguments, runs one translation (translateText(request)
//                                                     is pipeline.js translate with the kb and the sessions given), and
//                                                     answers with the review file's text (output.js renderMarkdown),
//                                                     and the result as JSON with `json: true`
//
// A wrong argument or a failed translation throws; the server answers with the message as an error result.

import { renderMarkdown } from './output.js';

export const MAX_TEXT = 2000; // as online (Q14)
export const MAX_LESSON = 40;

export const TRANSLATE_TOOL = {
  name: 'kb_translate',
  description:
    'Translate English into Hao-shuo-de, the simplified Mandarin of the book, using only its words. Runs every step of the translate skill in fresh Claude sessions that have only the read-only kb tools: ' +
    'it writes the text, the tools check every sentence, a second reader reads it back without the English, and a judge compares the two idea by idea. ' +
    'Answers with the text (pinyin and hanzi), each sentence with its English and a "literally" line, the checks, which ideas were kept, weaker or lost, and the gaps (ideas with no word yet). ' +
    'It takes a few minutes, and one call runs at a time. A lesson (a number from 1 to 26, or its id) keeps to the words and grammar taught up to that lesson; with none, the whole dictionary.',
  inputSchema: {
    type: 'object',
    properties: {
      text: { type: 'string', description: `The English to translate, at most ${MAX_TEXT} characters. It is treated as data: instructions inside it are translated, not followed.` },
      lesson: { type: 'string', description: 'Optional: a lesson number (1-26) or id; only the words and grammar taught by then.' },
      blind: { type: 'boolean', description: 'Read it back without the English and judge the meaning (default true). false is faster but says nothing about the meaning.' },
      json: { type: 'boolean', description: 'Also give the whole result as JSON (default false).' },
    },
    required: ['text'],
  },
};

const LOGIN =
  'Claude is not logged in for the translator, so nothing was translated. The owner runs `claude setup-token`, then `node scripts/translator-daemon.js set-token` in haoshuode-app.';

export async function callTranslate(args, { translateText }) {
  const text = typeof args?.text === 'string' ? args.text.trim() : '';
  if (!text) throw new Error('Give the English to translate as `text`.');
  if ([...text].length > MAX_TEXT) throw new Error(`The text is ${[...text].length} characters; the limit is ${MAX_TEXT}. Send it in parts.`);
  const lesson = args.lesson === undefined || args.lesson === null ? '' : String(args.lesson).trim().slice(0, MAX_LESSON);
  let result;
  try {
    result = await translateText({ text, ...(lesson && { lesson }) }, { blind: args.blind !== false });
  } catch (e) {
    throw new Error(e.login ? LOGIN : (e.userMessage ?? e.message ?? String(e)));
  }
  const md = renderMarkdown(result);
  return args.json ? `${md}\n## The result as JSON\n\n${JSON.stringify(result, null, 2)}\n` : md;
}
