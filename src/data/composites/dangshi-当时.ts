import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 752,
  phase: 2,
  zh: "当时",
  py: "dāngshí",
  en: "at that time",
  ru: "тогда",
  pos: "noun",
  hsd: ["{{word:na4}}-ge {{word:shi2}}-{{word:jian1}}"],
  tts: ["那个时间"],
  literal: "that time",
  fit: "natural",
  topics: ["in-the-past"],
  isA: ["time-point"],
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shi2}}-{{word:jian1}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "那个时间我在家。",
      en: "At that time I was at home.",
      ru: "В то время я был дома.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shi2}}-{{word:jian1}} {{word:ta1}} {{word:bu4}} {{word:zai4}}.",
      hanzi: "那个时间他不在。",
      en: "At that time he wasn't there.",
      ru: "В то время его не было.",
    },
  ],
});
