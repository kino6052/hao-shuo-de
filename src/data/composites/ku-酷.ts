import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7300,
  phase: 4,
  zh: "酷",
  py: "kù",
  en: "cool; stylish",
  ru: "крутой, классный",
  pos: "adjective",
  hsd: [
    "{{word:hen3}} {{word:hao3}}-{{word:kan4}}, {{word:rang4}} {{word:ren2}} {{word:xiang3}} {{word:xue2}}",
    "{{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:jue2}}-{{word:de}} {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["很好看，让人想学", "人人都觉得很好"],
  literal: "very good to look at, makes people want to copy / everyone feels it is very good",
  fit: "plain",
  topics: ["how-good"],
  isA: ["value-quality"],
  proposed: true,
});
