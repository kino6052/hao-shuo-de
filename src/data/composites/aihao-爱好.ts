import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 864,
  phase: 2,
  zh: "爱好",
  py: "àihào",
  en: "hobby",
  ru: "хобби",
  pos: "verb",
  hsd: [
    "{{word:ai4}}-{{word:hao4}}",
    "{{word:ai4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["爱好", "爱做的东西"],
  literal: "love-good / something you love doing",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ai4}}-{{word:hao4}} {{word:shi4}} {{word:shu1}}.",
      hanzi: "我的爱好是书。",
      en: "My hobby is books.",
      ru: "Моё хобби — книги.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:ai4}}-{{word:hao4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的爱好是什么？",
      en: "What is your hobby?",
      ru: "Какое у тебя хобби?",
    },
  ],
});
