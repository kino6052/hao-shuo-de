import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1349,
  phase: 3,
  zh: "整",
  py: "zhěng",
  en: "whole",
  ru: "целый",
  pos: "adjective",
  hsd: ["X {{word:dou1}}"],
  tts: ["X都"],
  literal: "all of X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:yi1}}-{{word:tian1}} {{word:dou1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "一天都很冷。",
      en: "The whole day is cold.",
      ru: "Весь день холодно.",
    },
    {
      pinyin: "{{Word:yi1}}-{{word:nian2}} {{word:dou1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "一年都在家。",
      en: "The whole year at home.",
      ru: "Целый год дома.",
    },
  ],
});
