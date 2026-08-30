// Transforms the new flat *.ts chapter format (src/content/*.ts) into the
// same per-language view shape vite-plugin-chapter.js produces for the
// legacy *.yaml chapters (meta, vocab, bodyHtml, story, examples, exercise,
// answers, tldrSummary, missingBlocks, grammarRules) -- see that file's
// header comment for the full view shape. Existing Preact components
// (Section, VocabGrid, GrammarBlock, ...) render either format unmodified.
//
// TS chapter schema: a `meta` export (`{ id, type, lessonNumber, order }`)
// plus a default-exported flat array of entries. Each entry is one prose
// unit (a title, a summary, a paragraph, ...) -- a `type` tag
// (title/summary/prose/...) plus a short language code per translation
// (`en`, `zh`, `ru`), each an array of that unit's individual sentences
// rather than one long string. Splitting sentence-by-sentence keeps entries
// readable/diffable and, later, translatable one sentence at a time. A
// translation that doesn't exist yet is an empty array, not an omitted key
// -- that's the placeholder state while content is being (re)translated.
// Sentences are rejoined with '\n' before rendering, which markdown treats
// as a soft break within the same paragraph (renders like a space) --
// except a sentence that's its own raw HTML block (e.g. "<h2>...</h2>"),
// which still renders as its own block exactly like it did as an inline
// "\n<h2>...</h2>\n" inside a single string.
//
// This is intentionally flatter than the old nested blocks-with-items
// schema: there's no grouping container, and type-specific extra fields
// (pinyin, term, audioFile, ...) ride alongside the language keys on the
// entry types that need them.
//
// Support here is added incrementally, one entry type at a time, as content
// files actually migrate to using it -- git log for which chapters still use
// the old *.yaml/blocks format. An entry type not yet handled below throws
// rather than silently dropping content.

import { marked } from 'marked';
import { resolveWordRefs } from './word-refs.js';

// Chapter view objects use the long-form codes ('eng'/'rus'/'zh') everywhere
// else in the app (see content-registry.js's LANGS); *.ts entries use the
// short, more conventional codes the content itself is written in.
const LANG_KEYS = { eng: 'en', rus: 'ru', zh: 'zh' };

function pick(entry, lang, { wordIndex, wordCount } = {}) {
  const sentences = entry[LANG_KEYS[lang]];
  if (!sentences || sentences.length === 0) return undefined; // [] placeholder == "not translated yet"
  const text = sentences.join('\n');
  return wordIndex ? resolveWordRefs(text, wordIndex, wordCount) : text;
}

export function buildTsChapterView(meta, entries, lang, refs = {}) {
  const proseHtmlParts = [];
  const tldrSummary = [];
  const missingBlocks = [];
  const story = [];
  const examples = [];

  let title = meta.id;

  entries.forEach((entry, index) => {
    switch (entry.type) {
      case 'title': {
        const text = pick(entry, lang, refs);
        if (text !== undefined) title = text;
        break;
      }
      case 'summary': {
        const text = pick(entry, lang, refs);
        if (text !== undefined) tldrSummary.push({ tldr: text, necessity: undefined, isOverview: true });
        break;
      }
      case 'prose': {
        const text = pick(entry, lang, refs);
        if (text === undefined) { missingBlocks.push(index); break; }
        proseHtmlParts.push(marked.parse(text));
        break;
      }
      case 'example':
      case 'story': {
        const translation = pick(entry, lang, refs);
        if (translation === undefined) { missingBlocks.push(index); break; }
        const bucket = entry.type === 'story' ? story : examples;
        bucket.push({ pinyin: entry.pinyin, translation, audioFile: entry.audioFile, ttsText: entry.ttsText });
        break;
      }
      default:
        throw new Error(
          `Chapter entry type "${entry.type}" (in ${meta.id}) isn't supported by the TS chapter transform yet.`,
        );
    }
  });

  return {
    meta: { ...meta, title, language: lang },
    vocab: [],
    bodyHtml: proseHtmlParts.join('\n'),
    story,
    examples,
    exercise: [],
    answers: [],
    tldrSummary,
    missingBlocks,
    grammarRules: [],
  };
}
