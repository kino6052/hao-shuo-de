import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8302,
  phase: 4,
  zh: "引导",
  py: "yǐndǎo",
  en: "guide; lead; direct",
  ru: "направлять; вести",
  pos: "verb",
  hsd: [
    "{{word:zou3}} {{word:zai4}} {{word:qian2}}-{{word:mian4}}, {{word:rang4}} X {{word:zhi1dao4}} {{word:lu4}}",
    "{{word:bang1}} X {{word:zhi1dao4}} {{word:zen3me}} {{word:zou3}}",
  ],
  tts: ["走在前面，让X知道路", "帮X知道怎么走"],
  literal: "walk in front and let X know the way / help X know how to go",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  proposed: true,
});
