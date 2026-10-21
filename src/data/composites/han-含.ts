import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6392,
  phase: 4,
  zh: "含",
  py: "hán",
  en: "contain",
  ru: "содержать",
  pos: "verb",
  hsd: [
    "X {{word:li3}}-{{word:mian4}} {{word:you3}} Y",
    "Y {{word:zai4}} X {{word:li3}}-{{word:mian4}}",
  ],
  tts: ["X里面有Y", "Y在X里面"],
  literal: "inside X there is Y",
  fit: "plain",
  topics: ["inside-and-outside"],
  isA: ["owning"],
  proposed: true,
});
