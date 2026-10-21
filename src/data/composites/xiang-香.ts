import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 963,
  phase: 2,
  zh: "香",
  py: "xiāng",
  en: "fragrant",
  ru: "ароматный",
  pos: "adjective",
  hsd: ["{{word:hao3}} {{word:wei4}}-{{word:dao4}}"],
  tts: ["好味道"],
  literal: "a good taste/smell",
  fit: "plain",
  topics: ["tastes"],
  isA: ["taste-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hao3}} {{word:wei4}}-{{word:dao4}}.",
      hanzi: "这个好味道。",
      en: "It smells good.",
      ru: "Приятно пахнет.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ye3}} {{word:you3}} {{word:hao3}} {{word:wei4}}-{{word:dao4}}.",
      hanzi: "那个也有好味道。",
      en: "That has a good smell too.",
      ru: "Это тоже приятно пахнет.",
    },
  ],
});
