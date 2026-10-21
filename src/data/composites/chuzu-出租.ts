import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6613,
  phase: 4,
  zh: "出租",
  py: "chūzū",
  en: "rent out; let",
  ru: "сдавать в аренду",
  pos: "verb",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:gei3}} {{word:jin1}} {{word:yong4}} X",
    "{{word:ba3}} X {{word:gei3}} {{word:ren2}} {{word:yong4}}, {{word:yao4}} {{word:jin1}}",
  ],
  tts: ["让人给金用X", "把X给人用，要金"],
  literal: "let people give money to use X / give X to people to use, want money",
  fit: "plain",
  topics: ["housing"],
  isA: ["trade-action"],
  proposed: true,
});
