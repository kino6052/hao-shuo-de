import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8265,
  phase: 4,
  zh: "热点",
  py: "rèdiǎn",
  en: "hot spot; hot topic; focus of attention",
  ru: "горячая тема; популярное место",
  pos: "noun",
  hsd: [
    "{{word:re4}}-{{word:dian3}}",
    "{{word:hen3}} {{word:duo1}} {{word:ren2}} {{word:dou1}} {{word:zai4}} {{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:hen3}} {{word:duo1}} {{word:ren2}} {{word:dou1}} {{word:xiang3}} {{word:qu4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["热点", "很多人都在说的东西", "很多人都想去的地方"],
  literal: "hot-point / what many people are talking about / a place many people want to go to",
  fit: "natural",
  topics: ["news-and-press"],
  isA: ["event"],
  proposed: true,
});
