import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 15,
  phase: 1,
  zh: "这",
  py: "zhè",
  en: "this",
  ru: "этот",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}"],
  tts: ["这"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这是什么？",
      en: "What is this?",
      ru: "Что это?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我要这个。",
      en: "I want this one.",
      ru: "Я хочу вот это.",
    },
  ],
});
