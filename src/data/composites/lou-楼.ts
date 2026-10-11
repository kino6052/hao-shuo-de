import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 425,
  phase: 1,
  zh: "楼",
  py: "lóu",
  en: "building",
  ru: "здание",
  pos: "noun",
  hsd: ["{{word:gao1}}-{{word:de}} {{word:fang2}}-{{word:zi}}"],
  tts: ["高的房子"],
  literal: "a tall house",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:na4}}-{{light:ge4}} {{word:gao1}}-{{word:de}} {{word:fang2}}-{{word:zi}}-{{word:li3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他在那个高的房子里工作。",
      en: "He works in that building.",
      ru: "Он работает в том здании.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:zai4}} {{word:gao1}}-{{word:de}} {{word:fang2}}-{{word:zi}}-{{word:li3}}.",
      hanzi: "我家在高的房子里。",
      en: "My home is in a tall building.",
      ru: "Я живу в высоком доме.",
    },
  ],
});
