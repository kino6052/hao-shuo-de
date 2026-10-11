import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 630,
  phase: 2,
  zh: "地区",
  py: "dìqū",
  en: "region, area",
  ru: "район",
  pos: "noun",
  hsd: ["{{word:da4}} {{word:di4}}-{{light:fang1}}"],
  tts: ["大地方"],
  literal: "big place",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yi1}}-{{light:ge4}} {{word:da4}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这是一个大地方。",
      en: "This is a large area.",
      ru: "Это большой район.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zai4}} {{word:da4}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他们在大地方。",
      en: "They are in a large area.",
      ru: "Они в большом районе.",
    },
  ],
});
