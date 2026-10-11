import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 575,
  phase: 2,
  zh: "一点儿",
  py: "yìdiǎnr",
  en: "a little",
  ru: "немного",
  pos: "number",
  hsd: ["{{word:yi1}}-{{word:dian3}}"],
  tts: ["一点"],
  fit: "natural",
  note: "Lesson {{lesson:numbers}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}.",
      hanzi: "我要一点水。",
      en: "I want a little water.",
      ru: "Я хочу немного воды.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chi1}} {{word:le}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "他吃了一点。",
      en: "He ate a little.",
      ru: "Он немного поел.",
    },
  ],
});
