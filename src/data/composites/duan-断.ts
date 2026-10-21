import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1351,
  phase: 3,
  zh: "断",
  py: "duàn",
  en: "break (apart)",
  ru: "ломаться, обрываться",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:liang3}}-ge {{word:bu4}}-{{light:fen1}}"],
  tts: ["变两个部分"],
  literal: "become two parts",
  fit: "plain",
  topics: ["injuries"],
  isA: ["being-affected"],
  examples: [
    {
      pinyin: "{{Word:che1}} {{word:bian4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}} {{word:le}}.",
      hanzi: "车变两个部分了。",
      en: "The car broke in two.",
      ru: "Машина сломалась пополам.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bian4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}} {{word:le}}.",
      hanzi: "这个变两个部分了。",
      en: "This broke in two.",
      ru: "Это сломалось пополам.",
    },
  ],
});
