import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 216,
  phase: 1,
  zh: "那个",
  py: "nàge",
  en: "that one",
  ru: "тот",
  pos: "pronoun",
  hsd: ["{{word:na4}}-ge"],
  tts: ["那个"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "那个是我的。",
      en: "That one is mine.",
      ru: "Вон тот — мой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "我要那个。",
      en: "I want that one.",
      ru: "Я хочу вон тот.",
    },
  ],
});
