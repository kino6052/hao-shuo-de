import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8171,
  phase: 4,
  zh: "总理",
  py: "zǒnglǐ",
  en: "premier; prime minister",
  ru: "премьер-министр",
  pos: "noun",
  hsd: [
    "{{word:wei4}} {{word:guo2}}-{{word:jia1}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:tou2}}",
    "{{word:guo2}}-{{word:jia1}}-{{word:li3}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:tou2}}",
  ],
  tts: ["为国家工作的人的头", "国家里做决定的人的头"],
  literal: "the head of the people who work for the country / the head of those who decide in the country",
  fit: "plain",
  topics: ["government"],
  isA: ["worker"],
  proposed: true,
});
