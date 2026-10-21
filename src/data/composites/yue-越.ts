import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 711,
  phase: 2,
  zh: "越",
  py: "yuè",
  en: "the more … the more",
  ru: "чем … тем",
  pos: "adverb",
  hsd: ["{{word:bian4}} …"],
  tts: ["变…"],
  literal: "become …",
  fit: "plain",
  topics: ["very-and-most"],
  isA: ["degree-word"],
  note: "For \"more and more\", say biàn duō le, biàn dà le.",
  examples: [
    {
      pinyin: "{{Word:tian1}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "天变冷了。",
      en: "It's getting colder.",
      ru: "Становится всё холоднее.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:duo1}} {{word:le}}.",
      hanzi: "水变多了。",
      en: "There is more and more water.",
      ru: "Воды всё больше.",
    },
  ],
});
