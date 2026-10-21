import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9069,
  phase: 4,
  zh: "称号",
  py: "chēnghào",
  en: "title; honorary name",
  ru: "звание; титул",
  pos: "noun",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:gei3}}-{{word:de}} {{word:hao3}}-{{word:ting1}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
    "{{word:gei3}} {{word:you3}}-{{word:ming2}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
  ],
  tts: ["别人给的好听的名字", "给有名的人的名字"],
  literal: "a good-sounding name other people give / a name given to a famous person",
  fit: "plain",
  topics: ["languages"],
  isA: ["language-thing"],
  proposed: true,
});
