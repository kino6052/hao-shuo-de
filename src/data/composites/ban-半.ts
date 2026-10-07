import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 228,
  phase: 1,
  zh: "半",
  py: "bàn",
  en: "half",
  ru: "половина",
  pos: "number",
  hsd: ["{{word:yi1}} {{word:bu4}}-{{light:fen1}}"],
  tts: ["一部分"],
  literal: "one part",
  fit: "plain",
  note: "Not exactly half.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我吃了一部分。",
      en: "I ate part of it.",
      ru: "Я съел часть.",
    },
    {
      pinyin: "{{Word:yi1}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} {{word:lai2}} {{word:le}}.",
      hanzi: "一部分人来了。",
      en: "Some of the people came.",
      ru: "Пришла часть людей.",
    },
  ],
});
