import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1302,
  phase: 3,
  zh: "外语",
  py: "wàiyǔ",
  en: "foreign language",
  ru: "иностранный язык",
  pos: "noun",
  hsd: ["{{word:wai4}}-{{word:guo2}}-{{word:de}} {{word:hua4}}"],
  tts: ["外国的话"],
  literal: "foreign speech",
  fit: "plain",
  topics: ["studying"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:wai4}}-{{word:guo2}}-{{word:de}} {{word:hua4}}.",
      hanzi: "我说外国的话。",
      en: "I speak a foreign language.",
      ru: "Я говорю на иностранном языке.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}} {{word:wai4}}-{{word:guo2}}-{{word:de}} {{word:hua4}}.",
      hanzi: "他学外国的话。",
      en: "He is learning a foreign language.",
      ru: "Он учит иностранный язык.",
    },
  ],
});
