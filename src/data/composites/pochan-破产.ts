import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8777,
  phase: 4,
  zh: "破产",
  py: "pòchǎn",
  en: "go bankrupt; bankruptcy",
  ru: "обанкротиться; банкротство",
  pos: "verb",
  hsd: [
    "{{word:jin1}} {{word:dou1}} {{word:mei2}} {{word:le}}, {{word:bu4}} {{word:neng2}} {{word:gong1}}-{{word:zuo4}} {{word:le}}",
    "{{word:yi1}}-{{word:qi3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:mei2}}-{{word:you3}} {{word:jin1}} {{word:le}}",
  ],
  tts: ["金都没了，不能工作了", "一起工作的地方没有金了"],
  literal: "all the money is gone, cannot work any more / the place where people work together has no money any more",
  fit: "plain",
  topics: ["business-and-economy"],
  isA: ["being-affected"],
  proposed: true,
});
