import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 980,
  phase: 2,
  zh: "制定",
  py: "zhìdìng",
  en: "draw up, set",
  ru: "разработать",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:chu1}}"],
  tts: ["做出"],
  literal: "make",
  fit: "plain",
  topics: ["deciding"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:chu1}} {{word:fa3}}.",
      hanzi: "我做出法。",
      en: "I draw up a rule.",
      ru: "Я составляю правило.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:chu1}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "他做出这个。",
      en: "He draws this up.",
      ru: "Он составляет это.",
    },
  ],
});
