// Zips a lesson's language-independent shape (see chapter-shape-types.ts)
// together with its per-language text files (en.ts/ru.ts/zh.ts) into the
// flat Entry[] array src/lib/chapter-content.js expects -- the same format
// a chapter's index.ts exported directly before the split-authoring
// pattern. One shared implementation so every split lesson's index.ts is
// just:
//
//   import shape from './shape.ts';
//   import en from './en.ts';
//   import ru from './ru.ts';
//   import zh from './zh.ts';
//   export default assembleChapter(shape, { en, ru, zh });
//
// Shape and each language array must be the same length, positionally
// matched (shape[i] describes the same block as en[i]/ru[i]/zh[i]).

function zipInfoItems(shapeItems, en, ru, zh) {
  return shapeItems.map((s, i) => {
    const e = en?.[i], r = ru?.[i], z = zh?.[i];
    const item = {
      text: { en: e?.text ?? [], ru: r?.text ?? [], zh: z?.text ?? [] },
    };
    if (s.ordered !== undefined) item.ordered = s.ordered;
    if (s.items) item.items = zipInfoItems(s.items, e?.items, r?.items, z?.items);
    return item;
  });
}

export function assembleChapter(shape, { en, ru, zh }) {
  if (en.length !== shape.length || ru.length !== shape.length || zh.length !== shape.length) {
    throw new Error(
      `assembleChapter: shape has ${shape.length} slots but en/ru/zh have ${en.length}/${ru.length}/${zh.length} -- every language file must have exactly one entry per shape slot, in the same order.`,
    );
  }

  return shape.map((s, i) => {
    const e = en[i], r = ru[i], z = zh[i];
    switch (s.type) {
      case "title":
      case "summary":
      case "exercise":
        return { type: s.type, en: e, ru: r, zh: z };

      case "prose": {
        const entry = { type: "prose", en: e.text, ru: r.text, zh: z.text };
        if (s.hasTldr) entry.tldr = { en: e.tldr ?? [], ru: r.tldr ?? [], zh: z.tldr ?? [] };
        if (s.hasNecessity) entry.necessity = { en: e.necessity ?? [], ru: r.necessity ?? [], zh: z.necessity ?? [] };
        return entry;
      }

      case "vocab":
        return { type: "vocab", term: s.term, audioFile: s.audioFile, ttsText: s.ttsText, en: e, ru: r, zh: z };

      case "example":
      case "story":
        return { type: s.type, pinyin: s.pinyin, audioFile: s.audioFile, ttsText: s.ttsText, en: e, ru: r, zh: z };

      case "answer":
        return { type: "answer", audioFile: s.audioFile, ttsText: s.ttsText, en: e, ru: r, zh: z };

      case "info":
      case "warning": {
        const entry = {
          type: s.type,
          ordered: s.ordered,
          subtype: s.subtype,
          tag: s.tag,
          items: zipInfoItems(s.items, e.items, r.items, z.items),
        };
        if (s.hasTitle) entry.title = { en: e.title ?? [], ru: r.title ?? [], zh: z.title ?? [] };
        return entry;
      }

      default:
        throw new Error(`assembleChapter: unknown shape slot type "${s.type}" at index ${i}`);
    }
  });
}
