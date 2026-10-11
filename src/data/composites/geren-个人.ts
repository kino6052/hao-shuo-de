import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 598,
  phase: 2,
  zh: "个人",
  py: "gèrén",
  en: "individual",
  ru: "личность",
  pos: "noun",
  hsd: ["{{word:ge4}}-{{word:ren2}}", "{{word:yi1}}-ge {{word:ren2}}"],
  tts: ["个人", "一个人"],
  literal: "one person / one person",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:wo3}} {{word:ge4}}-{{word:ren2}}-{{word:de}}.",
      hanzi: "这个是我个人的。",
      en: "This is my own.",
      ru: "Это моё личное.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ge4}}-{{word:ren2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他个人不来。",
      en: "He himself isn't coming.",
      ru: "Сам он не придёт.",
    },
  ],
});
