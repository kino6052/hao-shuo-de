import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1380,
  phase: 3,
  zh: "电器",
  py: "diànqì",
  en: "electrical appliance",
  ru: "электроприбор",
  pos: "noun",
  hsd: ["\"diàn\"-{{light:zi}}-{{word:de}} {{word:gong1}}-{{word:ju4}}"],
  tts: ["电子的工具"],
  literal: "an electronic tool",
  fit: "plain",
  topics: ["home-electronics"],
  isA: ["electric-device"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} \"diàn\"-{{word:zi}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "这是电子的工具。",
      en: "This is an electrical appliance.",
      ru: "Это электроприбор.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} \"diàn\"-{{word:zi}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我买电子的工具。",
      en: "I buy an electrical appliance.",
      ru: "Я покупаю электроприбор.",
    },
  ],
});
