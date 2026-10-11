import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 490,
  phase: 1,
  zh: "饭店",
  py: "fàndiàn",
  en: "restaurant",
  ru: "ресторан",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["吃饭的地方"],
  literal: "the place to eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:fu4jin4}} {{word:you3}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:ma}}?",
      hanzi: "附近有吃饭的地方吗？",
      en: "Is there a restaurant nearby?",
      ru: "Поблизости есть ресторан?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他在吃饭的地方工作。",
      en: "He works at a restaurant.",
      ru: "Он работает в ресторане.",
    },
  ],
});
