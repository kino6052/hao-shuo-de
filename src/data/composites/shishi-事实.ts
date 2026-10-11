import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 582,
  phase: 2,
  zh: "事实",
  py: "shìshí",
  en: "fact",
  ru: "факт",
  pos: "noun",
  hsd: ["{{word:shi4}}-{{word:shi2}}", "{{word:zhen1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["事实", "真的东西"],
  literal: "a true thing",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:shi4}}-{{word:shi2}}.",
      hanzi: "这个是事实。",
      en: "This is a fact.",
      ru: "Это факт.",
    },
    {
      pinyin: "{{Word:shi4}}-{{word:shi2}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "事实是真的。",
      en: "The fact is true.",
      ru: "Факт — это правда.",
    },
  ],
});
