import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9286,
  phase: 4,
  zh: "退税",
  py: "tuìshuì",
  en: "tax refund; refund taxes",
  ru: "возврат налога",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:gei3}} {{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jin1}} {{word:na2}} {{word:hui2}}-{{word:lai2}}",
    "{{word:guo2}}-{{word:jia1}} {{word:ba3}} {{word:ni3}} {{word:gei3}} {{word:ta1}}-{{word:de}} {{word:jin1}} {{word:gei3}} {{word:hui2}}-{{word:lai2}}",
  ],
  tts: ["把给国家的金拿回来", "国家把你给他的金给回来"],
  literal: "take back the money given to the state / the state gives back the money you gave it",
  fit: "plain",
  topics: ["buying-supplying-and-launching"],
  isA: ["trade-action"],
  proposed: true,
});
