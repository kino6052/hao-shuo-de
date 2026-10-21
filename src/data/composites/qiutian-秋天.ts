import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 879,
  phase: 2,
  zh: "秋天",
  py: "qiūtiān",
  en: "autumn",
  ru: "осень",
  pos: "noun",
  hsd: [
    "{{word:zhi2wu4}} {{word:bian4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["植物变金的颜色的时间"],
  literal: "when plants turn yellow",
  fit: "plain",
  topics: ["seasons"],
  isA: ["calendar-name"],
  examples: [
    {
      pinyin: "{{Word:zhi2wu4}} {{word:bian4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "植物变金的颜色的时间很好。",
      en: "Autumn is nice.",
      ru: "Осень хороша.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhi2wu4}} {{word:bian4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我爱植物变金的颜色的时间。",
      en: "I love autumn.",
      ru: "Я люблю осень.",
    },
  ],
});
