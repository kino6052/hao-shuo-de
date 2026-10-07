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
    "{{word:shi2}}-ge {{word:shi2}}-ge {{word:shi2}}",
  ],
  tts: ["一零零零", "十个十个十"],
  literal: "one-zero-zero-zero / ten tens of tens",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}} {{word:jin1}}.",
      hanzi: "这个要一零零零金。",
      en: "This costs a thousand.",
      ru: "Это стоит тысячу.",
    },
    {
      pinyin: "{{Word:shi2}}-{{light:ge4}} {{word:shi2}}-{{light:ge4}} {{word:shi2}} {{word:shi4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "十个十个十是一零零零。",
      en: "Ten tens of tens make a thousand.",
      ru: "Десять раз по сто — это тысяча.",
    },
  ],
});
