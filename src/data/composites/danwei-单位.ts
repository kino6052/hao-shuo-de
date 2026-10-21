import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 620,
  phase: 2,
  zh: "单位",
  py: "dānwèi",
  en: "unit; workplace",
  ru: "единица; место работы",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:gong1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["做工的地方"],
  literal: "the place where one does work",
  fit: "plain",
  topics: ["posts-and-pay"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:gong1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "我做工的地方在这里。",
      en: "My workplace is here.",
      ru: "Моё место работы здесь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:gong1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:yuan3}} {{word:ma}}?",
      hanzi: "你做工的地方远吗？",
      en: "Is your workplace far?",
      ru: "Твоё место работы далеко?",
    },
  ],
});
