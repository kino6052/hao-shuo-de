import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 931,
  phase: 2,
  zh: "大米",
  py: "dàmǐ",
  en: "rice (uncooked)",
  ru: "рис",
  pos: "noun",
  hsd: ["{{word:fan4}}"],
  tts: ["饭"],
  literal: "rice (a meal)",
  fit: "word",
  topics: ["grains-and-bread"],
  isA: ["staple-food"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:fan4}}.",
      hanzi: "我有饭。",
      en: "I have rice.",
      ru: "У меня есть рис.",
    },
    {
      pinyin: "{{Word:fan4}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "饭在家里。",
      en: "The rice is at home.",
      ru: "Рис дома.",
    },
  ],
});
