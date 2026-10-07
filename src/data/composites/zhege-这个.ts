import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 212,
  phase: 1,
  zh: "这个",
  py: "zhège",
  en: "this one",
  ru: "этот",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-ge"],
  tts: ["这个"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "这个是什么？",
      en: "What's this?",
      ru: "Что это?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我爱这个。",
      en: "I love this one.",
      ru: "Мне очень нравится вот это.",
    },
  ],
});
