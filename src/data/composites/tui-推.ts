import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 851,
  phase: 2,
  zh: "推",
  py: "tuī",
  en: "push",
  ru: "толкать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shou3}} {{word:dong4}} X"],
  tts: ["用手动X"],
  literal: "move X with your hand",
  fit: "plain",
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:dong4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "我用手动那个。",
      en: "I push that.",
      ru: "Я толкаю это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:dong4}} {{word:wo3}}.",
      hanzi: "他用手动我。",
      en: "He pushes me.",
      ru: "Он толкает меня.",
    },
  ],
});
