import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1285,
  phase: 3,
  zh: "各种",
  py: "gèzhǒng",
  en: "all kinds of",
  ru: "всевозможные",
  pos: "pronoun",
  hsd: ["{{word:hen3}} {{word:duo1}} {{word:zhong3}}"],
  tts: ["很多种"],
  literal: "many kinds",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:zhong3}} {{word:chi1}}-{{word:de}}.",
      hanzi: "这里有很多种吃的。",
      en: "There are all kinds of food here.",
      ru: "Здесь всякая еда.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mai3}} {{word:hen3}} {{word:duo1}} {{word:zhong3}} {{word:yi1fu}}.",
      hanzi: "他买很多种衣服。",
      en: "He buys all kinds of clothes.",
      ru: "Он покупает всякую одежду.",
    },
  ],
});
