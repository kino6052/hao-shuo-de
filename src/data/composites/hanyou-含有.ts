import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7439,
  phase: 4,
  zh: "含有",
  py: "hányǒu",
  en: "contain; have in it",
  ru: "содержать",
  pos: "verb",
  hsd: [
    "X {{word:li3}}-{{word:mian4}} {{word:you3}} Y",
    "Y {{word:zai4}} X {{word:li3}}-{{word:mian4}}",
  ],
  tts: ["X里面有Y", "Y在X里面"],
  literal: "inside X there is Y / Y is inside X",
  fit: "plain",
  topics: ["up-down-in-out"],
  isA: ["belonging"],
  proposed: true,
});
