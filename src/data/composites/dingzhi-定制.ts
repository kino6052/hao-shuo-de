import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9328,
  phase: 4,
  zh: "定制",
  py: "dìngzhì",
  en: "make to order; customize",
  ru: "делать на заказ",
  pos: "verb",
  hsd: [
    "{{word:zuo4}} {{word:ren2}} {{word:yao4}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
    "{{word:gei3}} X {{word:zuo4}} {{word:ta1}} {{word:yao4}}-{{word:de}} {{word:yang4}}-{{word:zi}}",
  ],
  tts: ["做人要的样子", "给X做他要的样子"],
  literal: "make the look a person wants / make X the look he wants",
  fit: "plain",
  topics: ["making-and-doing"],
  isA: ["making"],
  proposed: true,
});
