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

const INFO_BLOCK_ICONS = { info: 'ℹ️', warning: '⚠️' };

// `obj` is any {en, zh, ru} sentence-array holder -- an entry itself, or a
// nested one like `entry.tldr`/an info item's `text`. Undefined (the field
// wasn't given at all) and [] (given, but not translated yet) both mean
// "nothing here for this language" -- same as the old i18n-object pick().
function pick(obj, lang, { wordIndex, wordCount } = {}) {
  const sentences = obj && obj[LANG_KEYS[lang]];
  if (!sentences || sentences.length === 0) return undefined;
  const text = sentences.join('\n');
  return wordIndex ? resolveWordRefs(text, wordIndex, wordCount) : text;
}

// Renders one level of an info/warning entry's nested items, recursing into
// child `items` arrays -- ported as-is from vite-plugin-chapter.js's
// renderInfoItems/renderInfoBlock, just swapped to this module's pick().
function renderInfoItems(items, lang, ordered, refs, onMissing) {
  const rendered = [];
  for (const item of items) {
    const text = pick(item.text, lang, refs);
    if (text === undefined) { onMissing(); continue; }
    const childHtml = item.items && item.items.length
      ? renderInfoItems(item.items, lang, Boolean(item.ordered), refs, onMissing)
      : '';
    rendered.push(`<li>${marked.parseInline(text)}${childHtml}</li>`);
  }
  if (rendered.length === 0) return '';
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag}>${rendered.join('')}</${tag}>`;
}

function renderInfoBlock(entry, lang, refs, onMissing) {
  const hasTitle = entry.title !== undefined;
  const title = hasTitle ? pick(entry.title, lang, refs) : undefined;
  if (hasTitle && title === undefined) onMissing();

  const listHtml = renderInfoItems(entry.items ?? [], lang, Boolean(entry.ordered), refs, onMissing);
  if (title === undefined && !listHtml) return { html: '', title };

  const kind = entry.type;
  const icon = INFO_BLOCK_ICONS[kind];
  const titleHtml = title !== undefined ? `<div class="${kind}-block-title">${marked.parseInline(title)}</div>` : '';
  const html = (
    `<div class="${kind}-block">` +
      `<span class="${kind}-block-icon" aria-hidden="true">${icon}</span>` +
      `<div class="${kind}-block-content">${titleHtml}${listHtml}</div>` +
    `</div>`
  );
  return { html, title };
}

export function buildTsChapterView(meta, entries, lang, refs = {}) {
  const proseHtmlParts = [];
  const tldrSummary = [];
  const missingBlocks = [];
  const vocab = [];
  const story = [];
  const examples = [];
  const exercise = [];
  const answers = [];
  const grammarRules = [];

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
        // Per the project's rule, every prose entry is expected to carry a
        // tldr + necessity (they feed the TL;DR summary); an entry that
        // never got them at all (fields simply absent) is flagged missing
        // just like one whose tldr/necessity is untranslated for `lang`.
        const text = pick(entry, lang, refs);
        const tldr = pick(entry.tldr, lang, refs);
        const necessity = pick(entry.necessity, lang, refs);
        if (text === undefined || tldr === undefined || necessity === undefined) missingBlocks.push(index);
        if (text !== undefined) proseHtmlParts.push(marked.parse(text));
        if (tldr !== undefined || necessity !== undefined) tldrSummary.push({ tldr, necessity });
        break;
      }
      case 'vocab': {
        const definition = pick(entry, lang, refs);
        if (definition === undefined) { missingBlocks.push(index); break; }
        vocab.push({ pinyin: entry.term, definition, audioFile: entry.audioFile, ttsText: entry.ttsText });
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
      case 'exercise': {
        const text = pick(entry, lang, refs);
        if (text === undefined) { missingBlocks.push(index); break; }
        exercise.push(text);
        break;
      }
      case 'answer': {
        const text = pick(entry, lang, refs);
        if (text === undefined) { missingBlocks.push(index); break; }
        answers.push({ text, audioFile: entry.audioFile, ttsText: entry.ttsText });
        break;
      }
      case 'info':
      case 'warning': {
        let complete = true;
        const { html, title: blockTitle } = renderInfoBlock(entry, lang, refs, () => { complete = false; });
        if (!complete) missingBlocks.push(index);
        if (html) proseHtmlParts.push(html);
        if (entry.type === 'info' && entry.subtype === 'grammar' && html) {
          grammarRules.push({ tag: entry.tag, title: blockTitle, html });
        }
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
    vocab,
    bodyHtml: proseHtmlParts.join('\n'),
    story,
    examples,
    exercise,
    answers,
    tldrSummary,
    missingBlocks,
    grammarRules,
  };
}
