import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 726,
  phase: 2,
  zh: "一半",
  py: "yíbàn",
  en: "half",
  ru: "половина",
  pos: "number",
  hsd: [
    "{{word:liang3}} {{word:bu4}}-{{light:fen1}}-{{word:li3}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["两部分里的一部分"],
  literal: "one of two parts",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:liang3}} {{word:bu4}}-{{light:fen1}}-{{word:li3}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我吃两部分里的一部分。",
      en: "I eat half.",
      ru: "Я ем половину.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:liang3}} {{word:bu4}}-{{light:fen1}}-{{word:li3}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "给我两部分里的一部分。",
      en: "Give me half.",
      ru: "Дай мне половину.",
    },
  ],
});
