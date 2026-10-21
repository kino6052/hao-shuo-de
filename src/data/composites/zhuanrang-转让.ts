import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8893,
  phase: 4,
  zh: "转让",
  py: "zhuǎnràng",
  en: "transfer; hand over (ownership)",
  ru: "передавать (право); переуступать",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:wo3}}-{{word:de}} X {{word:gei3}} {{word:bie2}}-{{word:ren2}}",
    "{{word:rang4}} X {{word:bu4}} {{word:shi4}} {{word:wo3}}-{{word:de}}, {{word:shi4}} {{word:bie2}}-{{word:ren2}}-{{word:de}}",
  ],
  tts: ["把我的X给别人", "让X不是我的，是别人的"],
  literal: "give my X to other people / make X not mine but other people's",
  fit: "plain",
  topics: ["spending-trading-and-returning"],
  isA: ["handling-action"],
  proposed: true,
});
