import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 805,
  phase: 2,
  zh: "低",
  py: "dī",
  en: "low",
  ru: "низкий",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:gao1}}"],
  tts: ["不高"],
  literal: "not high",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bu4}} {{word:gao1}}.",
      hanzi: "这个不高。",
      en: "This is low.",
      ru: "Это низкое.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:jia1}} {{word:bu4}} {{word:gao1}}.",
      hanzi: "那个家不高。",
      en: "That house is low.",
      ru: "Тот дом низкий.",
    },
  ],
});
