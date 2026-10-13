// sounds-and-symbols ("Sounds and Symbols"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): syllables, pinyin, tones, the light tone, and how words are written.
// No new words -- lesson 1 may show words as sound examples (§4a rule 2).
// Plain words; passes every gate (npm run check -- sounds-and-symbols).
import { lesson } from "../../../lib/lesson.ts";
import syllableUnit from "./syllable-unit.ts";
import pinyinLimits from "./pinyin-limits.ts";
import tonesHeading from "./tones-heading.ts";
import fourTonesIntro from "./four-tones-intro.ts";
import neutralTone from "./neutral-tone.ts";
import noWordBoundaries from "./no-word-boundaries.ts";

export const meta = {
  id: "sounds-and-symbols",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Sounds and Symbols", ru: "Звуки и знаки" },
  summary: {
    en: [
      "To say a word, you first need to read it.",
      "In this lesson, you'll be able to read pinyin and say each word with the right tone.",
    ],
    ru: [
      "Чтобы сказать слово, сначала нужно его прочитать.",
      "В этом уроке вы научитесь читать пиньинь и говорить каждое слово с правильным тоном.",
    ],
  },
  modules: [
    syllableUnit,
    pinyinLimits,
    tonesHeading,
    fourTonesIntro,
    neutralTone,
    noWordBoundaries,
  ],
});
