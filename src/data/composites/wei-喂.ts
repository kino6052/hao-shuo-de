import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 975,
  phase: 2,
  zh: "喂",
  py: "wèi",
  en: "hello (on the phone)",
  ru: "алло",
  pos: "interjection",
  hsd: ["{{word:ni3}} {{word:hao3}}"],
  tts: ["你好"],
  literal: "hello",
  fit: "natural",
  examples: [
    { pinyin: "{{Word:ni3}} {{word:hao3}}!", hanzi: "你好！", en: "Hello!", ru: "Алло!" },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}, {{word:shei2}}?",
      hanzi: "你好，谁？",
      en: "Hello, who is it?",
      ru: "Алло, кто это?",
    },
  ],
});
