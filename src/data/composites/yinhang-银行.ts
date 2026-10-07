import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 333,
  phase: 1,
  zh: "银行",
  py: "yínháng",
  en: "bank",
  ru: "банк",
  pos: "noun",
  hsd: ["{{word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["放金的地方"],
  literal: "place to put money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去放金的地方。",
      en: "I'm going to the bank.",
      ru: "Я иду в банк.",
    },
    {
      pinyin: "{{Word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "放金的地方在哪里？",
      en: "Where's the bank?",
      ru: "Где банк?",
    },
  ],
});
