import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 268,
  phase: 1,
  zh: "千",
  py: "qiān",
  en: "thousand",
  ru: "тысяча",
  pos: "number",
  hsd: [
    "{{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}",
    "{{word:shi2}}-{{light:ge4}} {{word:shi2}}-{{light:ge4}}-{{word:de}} {{word:shi2}}-{{word:de}} {{word:shu4}}",
  ],
  tts: ["一零零零", "十个十个的十的数"],
  literal: "one-zero-zero-zero / a number of ten tens of tens",
  fit: "plain",
  topics: ["number-words"],
  isA: ["counting-number"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}} {{word:jin1}}.",
      hanzi: "这个要一零零零金。",
      en: "This costs a thousand.",
      ru: "Это стоит тысячу.",
    },
    {
      pinyin: "{{Word:shi2}}-{{light:ge4}} {{word:shi2}}-{{light:ge4}}-{{word:de}} {{word:shi2}}-{{word:de}} {{word:shu4}} {{word:shi4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "十个十个的十的数是一零零零。",
      en: "A number of ten tens of tens is a thousand.",
      ru: "Число из десяти по десять десятков — это тысяча.",
    },
  ],
});
