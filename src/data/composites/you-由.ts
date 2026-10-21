import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1150,
  phase: 3,
  zh: "由",
  py: "yóu",
  en: "by, from",
  ru: "от, через",
  pos: "preposition",
  hsd: ["{{word:cong2}}"],
  tts: ["从"],
  literal: "from",
  fit: "plain",
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  note: "For who did it, say it first: tā zuò-de.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
      hanzi: "我从家来。",
      en: "I come from home.",
      ru: "Я иду из дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:zhe4}}-{{word:li3}} {{word:qu4}}.",
      hanzi: "他从这里去。",
      en: "He goes from here.",
      ru: "Он уходит отсюда.",
    },
  ],
});
