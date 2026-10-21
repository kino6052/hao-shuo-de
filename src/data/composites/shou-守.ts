import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6810,
  phase: 4,
  zh: "守",
  py: "shǒu",
  en: "guard; keep watch",
  ru: "охранять, сторожить",
  pos: "verb",
  hsd: [
    "{{word:liu2}} {{word:zai4}} X, {{word:bu4}} {{word:rang4}} {{word:huai4}}-{{word:ren2}} {{word:jin4}}-{{word:qu4}}",
    "{{word:liu2}} {{word:zai4}} X, {{word:kan4}}-{{word:hao3}} X",
  ],
  tts: ["留在X，不让坏人进去", "留在X，看好X"],
  literal: "stay at X, not let bad people go in / stay at X, look after X well",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["social-action"],
  proposed: true,
});
