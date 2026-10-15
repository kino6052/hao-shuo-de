import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 109,
  phase: 1,
  zh: "百",
  py: "bǎi",
  en: "hundred",
  ru: "сто",
  pos: "number",
  hsd: [
    "{{word:yi1}}-{{word:ling2}}-{{word:ling2}}",
    "{{word:shi2}}-{{light:ge4}} {{word:shi2}}-{{word:de}} {{word:shu4}}",
  ],
  tts: ["一零零", "十个十的数"],
  literal: "one-zero-zero / a number of ten tens",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}} {{word:jin1}}.",
      hanzi: "这个要一零零金。",
      en: "This costs a hundred.",
      ru: "Это стоит сто.",
    },
    {
      pinyin: "{{Word:shi2}}-{{light:ge4}} {{word:shi2}}-{{word:de}} {{word:shu4}} {{word:shi4}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "十个十的数是一零零。",
      en: "A number of ten tens is a hundred.",
      ru: "Число из десяти десятков — это сто.",
    },
  ],
});
