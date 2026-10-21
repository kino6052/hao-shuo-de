import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8275,
  phase: 4,
  zh: "提示",
  py: "tíshì",
  en: "prompt; hint; remind; tip",
  ru: "подсказка; напомнить",
  pos: "verb",
  hsd: [
    "{{word:bang1}} X {{word:xiang3}}-{{word:qi3}}-{{word:lai2}}",
    "{{word:rang4}} X {{word:zhi1dao4}} {{word:yi1}}-{{word:dian3}}",
  ],
  tts: ["帮X想起来", "让X知道一点"],
  literal: "help X think of it / let X know a little",
  fit: "plain",
  topics: ["remembering-and-forgetting"],
  isA: ["thinking-action"],
  proposed: true,
});
