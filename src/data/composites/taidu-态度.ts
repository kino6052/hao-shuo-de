import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1330,
  phase: 3,
  zh: "态度",
  py: "tàidù",
  en: "attitude",
  ru: "отношение",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{light:de2}}"],
  tts: ["心里怎么觉得"],
  literal: "how you feel inside",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{word:de2}}, {{word:wo3}} {{word:bu4}} {{word:zhi1dao4}}.",
      hanzi: "他心里怎么觉得，我不知道。",
      en: "I don't know his attitude.",
      ru: "Я не знаю его отношения.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:zhi1dao4}} {{word:ni3}} {{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{word:de2}}.",
      hanzi: "我想知道你心里怎么觉得。",
      en: "I want to know your attitude.",
      ru: "Я хочу знать твоё отношение.",
    },
  ],
});
