import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8499,
  phase: 4,
  zh: "近视",
  py: "jìnshì",
  en: "nearsighted; short-sighted",
  ru: "близорукий",
  pos: "adjective",
  hsd: [
    "{{word:yan3jing}} {{word:kan4}}-{{word:bu4}}-{{word:yuan3}}",
    "{{word:yuan3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:kan4}}-{{word:bu4}}-{{word:jian4}}",
  ],
  tts: ["眼睛看不远", "远的东西看不见"],
  literal: "the eyes can't see far / can't see far things",
  fit: "plain",
  topics: ["illness"],
  isA: ["bodily-state"],
  proposed: true,
});
