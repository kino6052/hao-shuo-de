import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 782,
  phase: 2,
  zh: "表",
  py: "biǎo",
  en: "watch; form",
  ru: "часы; таблица",
  pos: "noun",
  hsd: ["{{word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{light:ju4}}"],
  tts: ["看点用的工具"],
  literal: "a tool used for looking at the time",
  fit: "plain",
  topics: ["clock"],
  isA: ["measuring-tool"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有看点用的工具。",
      en: "I have a watch.",
      ru: "У меня есть часы.",
    },
    {
      pinyin: "{{Word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "看点用的工具在家。",
      en: "The watch is at home.",
      ru: "Часы дома.",
    },
  ],
});
