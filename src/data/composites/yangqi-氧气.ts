import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7901,
  phase: 4,
  zh: "氧气",
  py: "yǎngqì",
  en: "oxygen",
  ru: "кислород",
  pos: "noun",
  hsd: [
    "{{word:kong1}}-{{word:qi4}}-{{word:li3}} {{word:rang4}} {{word:ren2}} {{word:neng2}} {{word:huo2}}-{{word:de}} {{word:qi4}}",
    "{{word:huo3}} {{word:he2}} {{word:ren2}} {{word:dou1}} {{word:yao4}}-{{word:de}} {{word:qi4}}",
  ],
  tts: ["空气里让人能活的气", "火和人都要的气"],
  literal: "the air in the air that lets people live / the air that fire and people both need",
  fit: "plain",
  topics: ["materials"],
  isA: ["liquid-or-gas"],
  proposed: true,
});
