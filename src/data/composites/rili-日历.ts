import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6789,
  phase: 4,
  zh: "日历",
  py: "rìlì",
  en: "calendar",
  ru: "календарь",
  pos: "noun",
  hsd: [
    "{{word:kan4}} {{word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:na3}} {{word:yi1}}-{{word:tian1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:ba3}} {{word:yi1}} {{word:nian2}}-{{word:de}} {{word:ri4}}-{{word:zi}} {{word:xie3}}-{{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["看今天是哪一天的东西", "把一年的日子写出来的东西"],
  literal: "the thing you look at to see which day today is / the thing that writes out the days of a year",
  fit: "plain",
  topics: ["days-and-dates"],
  isA: ["paper-thing"],
  proposed: true,
});
