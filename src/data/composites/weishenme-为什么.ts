import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 37,
  phase: 1,
  zh: "为什么",
  py: "wèi shénme",
  en: "why",
  ru: "почему",
  pos: "phrase",
  hsd: ["{{word:wei4}}-{{word:shen2me}}"],
  tts: ["为什么"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:wei4}}-{{word:shen2me}} {{word:bu4}} {{word:lai2}}?",
      hanzi: "你为什么不来？",
      en: "Why aren't you coming?",
      ru: "Почему ты не придёшь?",
    },
    {
      pinyin: "{{Word:wei4}}-{{word:shen2me}} {{word:tian1}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}?",
      hanzi: "为什么天是蓝色的？",
      en: "Why is the sky blue?",
      ru: "Почему небо синее?",
    },
  ],
});
