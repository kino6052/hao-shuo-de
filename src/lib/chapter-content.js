// Transforms the new flat *.ts chapter format (src/content/*.ts) into the
// same per-language view shape vite-plugin-chapter.js produces for the
// legacy *.yaml chapters (meta, vocab, bodyHtml, story, examples, exercise,
// answers, tldrSummary, missingBlocks, grammarRules) -- see that file's
// header comment for the full view shape. Existing Preact components
// (Section, VocabGrid, GrammarBlock, ...) render either format unmodified.
//
// TS chapter schema: a `meta` export (`{ id, type }` for a lesson, whose
// number and order src/lib/chapter-view.js adds from src/content/book.js;
// `{ id, type, lessonNumber, order }` for an intro) plus a default-exported
// flat array of entries. Each entry is one prose
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
import { resolveLessonRefs, resolveWordRefs } from './word-refs.js';

// Chapter view objects use the long-form codes ('eng'/'rus'/'zh') everywhere
// else in the app (see content-registry.js's LANGS); *.ts entries use the
// short, more conventional codes the content itself is written in.
const LANG_KEYS = { eng: 'en', rus: 'ru', zh: 'zh' };

const INFO_BLOCK_ICONS = { info: 'ℹ️', warning: '⚠️' };

// `obj` is any {en, zh, ru} sentence-array holder -- an entry itself, or a
// nested one like `entry.tldr`/an info item's `text`. Undefined (the field
// wasn't given at all) and [] (given, but not translated yet) both mean
// "nothing here for this language" -- same as the old i18n-object pick().
// `chapterTitles` ({ [lang]: Map(chapter id -> title) }) resolves {{title:..}}
// refs: only intro-3's table of contents uses them (src/lib/content-registry.js).
// `markup` writes the word refs as <hsd-w> elements (src/lib/word-refs.js), for text shown on the page: HTML, or a
// string the component shows through Rich (src/components/Hsd.jsx). Titles and alt text stay plain pinyin.
function pick(obj, lang, { wordIndex, wordCount, chapterTitles } = {}, markup = false) {
  const sentences = obj && obj[LANG_KEYS[lang]];
  if (!sentences || sentences.length === 0) return undefined;
  const text = sentences.join('\n');
  return wordIndex ? resolveWordRefs(text, wordIndex, wordCount, chapterTitles?.[lang], { markup }) : text;
}
const show = (obj, lang, refs) => pick(obj, lang, refs, true);

// Non-i18n fields (a vocab entry's `term`, an example/story's `pinyin`) can
// still contain {{word:..}} refs -- e.g. a hyphenated example built from
// several dictionary words -- so they need the same resolution `pick()`
// gives translated text, just without the per-language lookup.
function resolveField(text, { wordIndex, wordCount } = {}) {
  return wordIndex ? resolveWordRefs(text, wordIndex, wordCount) : text;
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Renders one level of an info/warning entry's nested items, recursing into
// child `items` arrays -- ported as-is from vite-plugin-chapter.js's
// renderInfoItems/renderInfoBlock, just swapped to this module's pick().
function renderInfoItems(items, lang, ordered, refs, onMissing, start) {
  const rendered = [];
  for (const item of items) {
    const text = show(item.text, lang, refs);
    if (text === undefined) { onMissing(); continue; }
    const childHtml = item.items && item.items.length
      ? renderInfoItems(item.items, lang, Boolean(item.ordered), refs, onMissing)
      : '';
    rendered.push(`<li>${marked.parseInline(text)}${childHtml}</li>`);
  }
  if (rendered.length === 0) return '';
  if (!ordered) return `<ul>${rendered.join('')}</ul>`;
  return start > 1 ? `<ol start="${start}">${rendered.join('')}</ol>` : `<ol>${rendered.join('')}</ol>`;
}

function renderInfoBlock(entry, lang, refs, onMissing) {
  const hasTitle = entry.title !== undefined;
  const title = hasTitle ? show(entry.title, lang, refs) : undefined;
  if (hasTitle && title === undefined) onMissing();

  // A lesson module's info block is often a single line: show it as a line,
  // not as a one-item list.
  const items = entry.items ?? [];
  const single = !hasTitle && !entry.ordered && items.length === 1 && !items[0].items?.length;
  let listHtml;
  if (single) {
    const text = show(items[0].text, lang, refs);
    if (text === undefined) onMissing();
    listHtml = text === undefined ? '' : `<p class="${entry.type}-block-line">${marked.parseInline(text)}</p>`;
  } else {
    listHtml = renderInfoItems(items, lang, Boolean(entry.ordered), refs, onMissing, entry.start);
  }
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

// -> a TS chapter's title in one language: its last title entry with text in
// that language, or its id. The page and the book's outline
// (scripts/book-outline.js) both take it from here.
export function chapterTitle(meta, entries, lang, refs = {}) {
  let title = meta.id;
  for (const entry of entries) {
    if (entry.type !== 'title') continue;
    const text = pick(entry, lang, refs);
    if (text !== undefined) title = text;
  }
  return title;
}

// Besides the per-type buckets (vocab, bodyHtml, examples, ...), the view has
// a `flow`: the same blocks in the order the chapter lists them, so a lesson
// page can show a point's examples right after the point, a word card right
// before the point that teaches it, and an info box or a few exercises
// anywhere. Neighbouring blocks of one kind share a group:
//   { kind: 'vocab', items }       word cards
//   { kind: 'html', items }        prose, info/warning and video blocks (HTML strings)
//   { kind: 'examples', items }    example sentences
//   { kind: 'story', items }       story lines
//   { kind: 'image', items }       story pictures ({ file, alt, pinyin, translation, ... })
//   { kind: 'exercise', start, questions, answers }
//   { kind: 'faq', items }         questions and answers ({ question, answerHtml })
// Answers pair with exercises by position across the whole chapter, so an
// exercise group gets the answers with the same numbers; `start` is the
// index of its first question.
// Every group also has `parts`, one per item (per question in an exercise
// group): the id a reader's comment names (COMMENTS_PLAN.md CM1). A lesson's
// entry keeps its `key` ("also-do.example2"); a flat chapter's is its kind
// and its number among the entries of that kind ("prose3"), counted in every
// language alike.
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
  const flow = [];
  let part = '';
  const addToFlow = (kind, item) => {
    const last = flow[flow.length - 1];
    if (last && last.kind === kind) {
      last.items.push(item);
      last.parts.push(part);
    } else flow.push({ kind, items: [item], parts: [part] });
  };
  const counted = {};

  const title = chapterTitle(meta, entries, lang, refs);

  entries.forEach((entry, index) => {
    counted[entry.type] = (counted[entry.type] ?? 0) + 1;
    part = entry.key ?? `${entry.type}${counted[entry.type]}`;
    switch (entry.type) {
      case 'title':
        break;
      case 'summary': {
        const text = show(entry, lang, refs);
        if (text !== undefined) tldrSummary.push({ tldr: text, necessity: undefined, isOverview: true });
        break;
      }
      case 'prose': {
        // Per the project's rule, every prose entry is expected to carry a
        // tldr + necessity (they feed the TL;DR summary); an entry that
        // never got them at all (fields simply absent) is flagged missing
        // just like one whose tldr/necessity is untranslated for `lang`.
        const text = show(entry, lang, refs);
        const tldr = show(entry.tldr, lang, refs);
        const necessity = show(entry.necessity, lang, refs);
        if (text === undefined || tldr === undefined || necessity === undefined) missingBlocks.push(index);
        if (text !== undefined) {
          const html = marked.parse(text);
          proseHtmlParts.push(html);
          addToFlow('html', html);
        }
        if (tldr !== undefined || necessity !== undefined) tldrSummary.push({ tldr, necessity });
        break;
      }
      case 'vocab': {
        const definition = show(entry, lang, refs);
        if (definition === undefined) { missingBlocks.push(index); break; }
        const card = { pinyin: resolveField(entry.term, refs), refs: entry.term, definition, audioFile: entry.audioFile, ttsText: entry.ttsText };
        vocab.push(card);
        addToFlow('vocab', card);
        break;
      }
      case 'example':
      case 'story': {
        const translation = show(entry, lang, refs);
        if (translation === undefined) { missingBlocks.push(index); break; }
        const line = { pinyin: resolveField(entry.pinyin, refs), refs: entry.pinyin, translation, audioFile: entry.audioFile, ttsText: entry.ttsText };
        if (entry.type === 'story') story.push(line);
        else examples.push(line);
        addToFlow(entry.type === 'story' ? 'story' : 'examples', line);
        break;
      }
      case 'image': {
        const translation = show(entry, lang, refs);
        const alt = pick(entry.alt, lang, refs);
        if (translation === undefined || alt === undefined) { missingBlocks.push(index); break; }
        addToFlow('image', {
          file: entry.file,
          alt,
          pinyin: resolveField(entry.pinyin, refs),
          refs: entry.pinyin,
          translation,
          audioFile: entry.audioFile,
          ttsText: entry.ttsText,
        });
        break;
      }
      case 'exercise': {
        const text = show(entry, lang, refs);
        if (text === undefined) { missingBlocks.push(index); break; }
        exercise.push(text);
        addToFlow('exercise', exercise.length - 1);
        break;
      }
      case 'answer': {
        const text = pick(entry, lang, refs);
        if (text === undefined) { missingBlocks.push(index); break; }
        answers.push({ text, refs: resolveLessonRefs(entry[LANG_KEYS[lang]].join('\n')), audioFile: entry.audioFile, ttsText: entry.ttsText });
        break;
      }
      case 'info':
      case 'warning': {
        let complete = true;
        const { html, title: blockTitle } = renderInfoBlock(entry, lang, refs, () => { complete = false; });
        if (!complete) missingBlocks.push(index);
        if (html) {
          proseHtmlParts.push(html);
          addToFlow('html', html);
        }
        if (entry.type === 'info' && entry.subtype === 'grammar' && html) {
          grammarRules.push({ tag: entry.tag, title: blockTitle, html });
        }
        break;
      }
      case 'video': {
        const caption = show(entry, lang, refs);
        const alt = pick(entry.alt, lang, refs);
        if (caption === undefined || alt === undefined) { missingBlocks.push(index); break; }
        const html = (
          `<figure class="video-embed">` +
            `<div class="video-embed-frame">` +
              `<iframe src="${escapeAttr(entry.embed)}" title="${escapeAttr(alt)}" loading="lazy" ` +
              `allow="fullscreen; picture-in-picture" allowfullscreen ` +
              `sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"></iframe>` +
            `</div>` +
            `<figcaption>${marked.parseInline(caption)} <a href="${escapeAttr(entry.link)}" target="_blank" rel="noopener">↗</a></figcaption>` +
          `</figure>`
        );
        proseHtmlParts.push(html);
        addToFlow('html', html);
        break;
      }
      case 'faq': {
        const question = show(entry.question, lang, refs);
        const answer = show(entry, lang, refs);
        if (question === undefined || answer === undefined) { missingBlocks.push(index); break; }
        addToFlow('faq', { question: marked.parseInline(question), answerHtml: marked.parse(answer) });
        break;
      }
      default:
        throw new Error(
          `Chapter entry type "${entry.type}" (in ${meta.id}) isn't supported by the TS chapter transform yet.`,
        );
    }
  });

  for (const group of flow) {
    if (group.kind !== 'exercise') continue;
    const numbers = group.items;
    delete group.items;
    group.start = numbers[0];
    group.questions = numbers.map((n) => exercise[n]);
    const groupAnswers = numbers.map((n) => answers[n]);
    group.answers = groupAnswers.some(Boolean) ? groupAnswers : [];
  }

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
    flow,
  };
}
