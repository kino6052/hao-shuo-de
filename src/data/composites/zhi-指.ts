import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 756,
  phase: 2,
  zh: "指",
  py: "zhǐ",
  en: "point",
  ru: "указывать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shou3}} {{word:dui4}} X"],
  tts: ["用手对X"],
  literal: "aim your hand at X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:dui4}} {{word:ta1}}.",
      hanzi: "我用手对他。",
      en: "I point at him.",
      ru: "Я показываю на него.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:dui4}} {{word:shu1}}.",
      hanzi: "他用手对书。",
      en: "He points at the book.",
      ru: "Он показывает на книгу.",
    },
  ],
});
