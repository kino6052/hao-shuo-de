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
  story: "Autumn, orange accent. The first week: the student has just arrived with a suitcase, and the note on the door is in characters they cannot read. Miao-miao sits on the suitcase and says its own name, miāo, again and again in different tones until the student hears the difference. Cast: Miao-miao and the student.",
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
  // Autumn, orange (MASCOT_PLAN.md §6): Miao-miao says one sound four ways, one tone line per bubble.
  images: [
    {
      alt: {
        en: "Miao-miao the cat sits on a suitcase and says one sound four times. Four speech bubbles above it each hold one line: flat, rising, dipping, falling. The student tilts their head and listens.",
        ru: "Кошка Miao-miao сидит на чемодане и четыре раза произносит один и тот же звук. В четырёх облачках над ней по одной линии: ровная, поднимающаяся, ныряющая, падающая. Студент наклоняет голову и слушает.",
      },
      pinyin: "\"mā\", \"má\", \"mǎ\", \"mà\".",
      hanzi: "妈，麻，马，骂。",
      en: "One sound, four tones, four words.",
      ru: "Один звук, четыре тона, четыре слова.",
    },
  ],
  modules: [
    syllableUnit,
    pinyinLimits,
    tonesHeading,
    fourTonesIntro,
    neutralTone,
    noWordBoundaries,
  ],
});
