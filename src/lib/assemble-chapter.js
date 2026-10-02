// Zips a lesson's language-independent shape (see chapter-shape-types.ts)
// together with its per-language files (en.ts/ru.ts/zh.ts) into the flat
// Entry[] array src/lib/chapter-content.js expects -- the same format a
// chapter's index.ts exported directly before the split-authoring pattern.
//
// shape.ts, en.ts, ru.ts, and zh.ts are all typed as `Shape` directly (see
// chapter-shape-types.ts) -- a keyed object, not an array, so each block
// has a stable name instead of a position. shape.ts's entries carry only
// the structural fields (term, pinyin, tag, items, ...) and each language
// file's entries repeat those same structural fields under the same keys,
// plus that file's own language text (en.ts fills in `en`, leaves `ru`/
// `zh` unset; and so on). shape.ts is the canonical source for structure
// (which keys exist, `term`, `pinyin`, `tag`, nested `items`); en.ts is the
// canonical source for *whether* a block has a tldr/necessity/title at
// all, since English is always written in full while ru/zh may still be
// blank placeholders. Render order follows shape.ts's own key order
// (object key order is preserved for string keys), so en.ts/ru.ts/zh.ts
// can list their keys in any order.
//
// One shared implementation so every split lesson's index.ts is just:
//
//   import shape from './shape.ts';
//   import en from './en.ts';
//   import ru from './ru.ts';
//   import zh from './zh.ts';
//   export default assembleChapter(shape, { en, ru, zh });
//
// en, ru, and zh must each define exactly the same set of keys as shape.

function pickLocalized(en, ru, zh) {
  return { en: en ?? [], ru: ru ?? [], zh: zh ?? [] };
}

function zipInfoItems(shapeItems, en, ru, zh) {
  return shapeItems.map((s, i) => {
    const e = en?.[i], r = ru?.[i], z = zh?.[i];
    const item = { text: pickLocalized(e?.en, r?.ru, z?.zh) };
    if (s.ordered !== undefined) item.ordered = s.ordered;
    if (s.items) item.items = zipInfoItems(s.items, e?.items, r?.items, z?.items);
    return item;
  });
}

function checkKeys(chapterId, shapeKeys, lang, obj) {
  const shapeKeySet = new Set(shapeKeys);
  const missing = shapeKeys.filter((k) => !(k in obj));
  const extra = Object.keys(obj).filter((k) => !shapeKeySet.has(k));
  if (missing.length || extra.length) {
    throw new Error(
      `assembleChapter(${chapterId}): ${lang}.ts is out of sync with shape.ts -- ` +
        (missing.length ? `missing keys [${missing.join(", ")}]` : "") +
        (missing.length && extra.length ? "; " : "") +
        (extra.length ? `extra keys [${extra.join(", ")}]` : ""),
    );
  }
}

export function assembleChapter(shape, { en, ru, zh }, chapterId = "?") {
  const keys = Object.keys(shape);
  checkKeys(chapterId, keys, "en", en);
  checkKeys(chapterId, keys, "ru", ru);
  checkKeys(chapterId, keys, "zh", zh);

  return keys.map((key) => {
    const s = shape[key], e = en[key], r = ru[key], z = zh[key];
    switch (s.type) {
      case "title":
      case "summary":
      case "exercise":
        return { type: s.type, ...pickLocalized(e.en, r.ru, z.zh) };

      case "prose": {
        const entry = { type: "prose", ...pickLocalized(e.en, r.ru, z.zh) };
        if (e.tldr) entry.tldr = pickLocalized(e.tldr.en, r.tldr?.ru, z.tldr?.zh);
        if (e.necessity) entry.necessity = pickLocalized(e.necessity.en, r.necessity?.ru, z.necessity?.zh);
        return entry;
      }

      case "vocab":
        return { type: "vocab", term: s.term, audioFile: s.audioFile, ttsText: s.ttsText, ...pickLocalized(e.en, r.ru, z.zh) };

      case "example":
      case "story":
        return { type: s.type, pinyin: s.pinyin, audioFile: s.audioFile, ttsText: s.ttsText, ...pickLocalized(e.en, r.ru, z.zh) };

      case "answer":
        return { type: "answer", audioFile: s.audioFile, ttsText: s.ttsText, ...pickLocalized(e.en, r.ru, z.zh) };

      case "info":
      case "warning": {
        const entry = {
          type: s.type,
          ordered: s.ordered,
          subtype: s.subtype,
          tag: s.tag,
          items: zipInfoItems(s.items, e.items, r.items, z.items),
        };
        if (e.title) entry.title = pickLocalized(e.title.en, r.title?.ru, z.title?.zh);
        return entry;
      }

      case "faq":
        return { type: "faq", question: pickLocalized(e.question?.en, r.question?.ru, z.question?.zh), ...pickLocalized(e.en, r.ru, z.zh) };

      default:
        throw new Error(`assembleChapter: unknown shape slot type "${s.type}" at key "${key}"`);
    }
  });
}
