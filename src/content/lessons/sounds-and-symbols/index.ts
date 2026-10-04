// sounds-and-symbols ("Sounds and Symbols"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Phase 2 (BOOK_PLAN.md): pinyin, tones, and the Hao-shuo-de pinyin helpers.
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
      "Before you can speak, you need to read the sounds.",
      "In this lesson, you'll learn to read pinyin: Chinese sounds written with letters you know, and tone marks that show how each sound rises or falls.",
    ],
    ru: [
      "Прежде чем говорить, нужно научиться читать звуки.",
      "В этом уроке вы научитесь читать пиньинь: китайские звуки, записанные знакомыми буквами, и знаки тонов, которые показывают, как звук поднимается или опускается.",
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
