import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 880,
  phase: 2,
  zh: "空调",
  py: "kōngtiáo",
  en: "air conditioner",
  ru: "кондиционер",
  pos: "noun",
  hsd: [
    "{{word:ba3}} {{word:kong1}}-{{word:qi4}} {{word:zuo4}} {{word:leng3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["把空气做冷的工具"],
  literal: "the tool that makes the air cold",
  fit: "plain",
  topics: ["home-electronics"],
  isA: ["electric-device"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:ba3}} {{word:kong1}}-{{word:qi4}} {{word:zuo4}} {{word:leng3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有把空气做冷的工具。",
      en: "I have an air conditioner.",
      ru: "У меня есть кондиционер.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:li3}} {{word:you3}} {{word:ba3}} {{word:kong1}}-{{word:qi4}} {{word:zuo4}} {{word:leng3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "家里有把空气做冷的工具。",
      en: "The house has an air conditioner.",
      ru: "В доме есть кондиционер.",
    },
  ],
});
