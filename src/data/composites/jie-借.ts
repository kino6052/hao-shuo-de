import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 352,
  phase: 1,
  zh: "借",
  py: "jiè",
  en: "borrow",
  ru: "брать взаймы",
  pos: "verb",
  hsd: [
    "{{word:na2}} {{word:bie2}}-{{word:de}} {{word:ren2}}-{{word:de}}, {{word:hou4}}-{{word:lai2}} {{word:gei3}} {{word:ta1}}",
  ],
  tts: ["拿别的人的，后来给他"],
  literal: "take someone else's, give it back later",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:na2}} {{word:bie2}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:shu1}}, {{word:hou4}}-{{word:lai2}} {{word:gei3}} {{word:ta1}}.",
      hanzi: "我拿别的人的书，后来给他。",
      en: "I borrow someone's book.",
      ru: "Я беру книгу на время.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:na2}} {{word:bie2}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:che1}}, {{word:hou4}}-{{word:lai2}} {{word:gei3}} {{word:ta1}}.",
      hanzi: "他拿别的人的车，后来给他。",
      en: "He borrowed someone's car.",
      ru: "Он взял чужую машину на время.",
    },
  ],
});
