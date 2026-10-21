import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9330,
  phase: 4,
  zh: "二氧化碳",
  py: "èryǎnghuàtàn",
  en: "carbon dioxide",
  ru: "углекислый газ",
  pos: "noun",
  hsd: [
    "{{word:huo3}} {{word:he2}} {{word:ren2}} {{word:dou1}} {{word:fa1}}-{{word:chu1}}-{{word:de}} {{word:qi4}}",
    "{{word:ren2}} {{word:chu1}}-{{word:qi4}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:qi4}}",
  ],
  tts: ["火和人都发出的气", "人出气的时候出来的气"],
  literal: "the gas that fire and people both give off / the gas that comes out when a person breathes out",
  fit: "plain",
  topics: ["materials"],
  isA: ["liquid-or-gas"],
  proposed: true,
});
