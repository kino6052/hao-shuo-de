import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8345,
  phase: 4,
  zh: "趁",
  py: "chèn",
  en: "take advantage of (a time or chance); while",
  ru: "пользуясь; пока",
  pos: "preposition",
  hsd: [
    "{{word:zai4}} X {{word:hai2}} {{word:zai4}}-{{word:de}} {{word:shi2}}-{{light:hou4}}",
    "{{word:you3}} {{word:ji1}}-{{word:hui4}}-{{word:de}} {{word:shi2}}-{{light:hou4}}, {{word:jiu4}} {{word:zuo4}}",
  ],
  tts: ["在X还在的时候", "有机会的时候，就做"],
  literal: "at the time when X is still there / when there is a chance, then do it",
  fit: "plain",
  topics: ["soon-early-and-late"],
  isA: ["time-order"],
  proposed: true,
});
