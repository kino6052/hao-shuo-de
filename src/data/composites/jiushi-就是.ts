import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 305,
  phase: 1,
  zh: "就是",
  py: "jiùshì",
  en: "exactly",
  ru: "именно",
  pos: "auxiliary",
  hsd: ["{{word:jiu4}}-{{word:shi4}}", "{{word:shi4}}"],
  tts: ["就是", "是"],
  literal: "just is",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:jiu4}}-{{word:shi4}} {{word:ta1}}!",
      hanzi: "就是他！",
      en: "It's him!",
      ru: "Это он!",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:jiu4}}-{{word:shi4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "这就是我的家。",
      en: "This is my home.",
      ru: "Вот мой дом.",
    },
  ],
});
