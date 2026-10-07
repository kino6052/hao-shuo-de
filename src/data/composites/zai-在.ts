import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6,
  phase: 1,
  zh: "在",
  py: "zài",
  en: "exist at",
  ru: "находиться в",
  pos: "verb",
  hsd: ["{{word:zai4}}"],
  tts: ["在"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "他在家。",
      en: "He's at home.",
      ru: "Он дома.",
    },
    {
      pinyin: "{{Word:shu1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "书在哪里？",
      en: "Where is the book?",
      ru: "Где книга?",
    },
  ],
});
