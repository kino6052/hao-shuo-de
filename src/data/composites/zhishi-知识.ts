import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 283,
  phase: 1,
  zh: "知识",
  py: "zhīshi",
  en: "knowledge",
  ru: "знание",
  pos: "noun",
  hsd: ["{{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["知道的东西"],
  literal: "things you know",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他知道的东西很多。",
      en: "He knows a lot.",
      ru: "Он много знает.",
    },
    {
      pinyin: "{{Word:shu1}} {{word:gei3}} {{word:wo3}}-{{word:men}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "书给我们知道的东西。",
      en: "Books give us knowledge.",
      ru: "Книги дают нам знания.",
    },
  ],
});
