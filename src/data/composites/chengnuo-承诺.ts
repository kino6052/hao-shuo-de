import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8583,
  phase: 4,
  zh: "承诺",
  py: "chéngnuò",
  en: "promise; make a commitment",
  ru: "обещать; обещание",
  pos: "verb",
  hsd: [
    "{{word:dui4}} X {{word:shuo1}} {{word:yi1}}-{{word:ding4}} {{word:hui4}} {{word:zuo4}} Y",
    "{{word:shuo1}} {{word:yi1}}-{{word:ding4}} {{word:hui4}} {{word:zuo4}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["对X说一定会做Y", "说一定会做的话"],
  literal: "say to X that one will surely do Y / the words that say one will surely do it",
  fit: "plain",
  topics: ["advising-and-promising"],
  isA: ["speaking-action"],
  proposed: true,
});
