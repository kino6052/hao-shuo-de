import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 513,
  phase: 2,
  zh: "夏天",
  py: "xiàtiān",
  en: "summer",
  ru: "лето",
  pos: "noun",
  hsd: [
    "{{word:nian2}}-{{word:li3}} {{word:zui4}} {{word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["年里最热的时间"],
  literal: "the hottest time of the year",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:nian2}}-{{word:li3}} {{word:zui4}} {{word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:xiang3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "年里最热的时间，我想喝水。",
      en: "In summer I want to drink water.",
      ru: "Летом я хочу пить воду.",
    },
    {
      pinyin: "{{Word:nian2}}-{{word:li3}} {{word:zui4}} {{word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "年里最热的时间很长。",
      en: "Summer is long.",
      ru: "Лето длинное.",
    },
  ],
});
