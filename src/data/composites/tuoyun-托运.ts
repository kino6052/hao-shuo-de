import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9235,
  phase: 4,
  zh: "托运",
  py: "tuōyùn",
  en: "check in (luggage); consign for shipment",
  ru: "сдать в багаж; отправить грузом",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:gei3}} {{word:fei1}}-{{word:ji1}}, {{word:rang4}} {{word:fei1}}-{{word:ji1}} {{word:na2}}-{{word:qu4}}",
    "{{word:ba3}} X {{word:gei3}} {{word:che1}}, {{word:rang4}} {{word:che1}} {{word:na2}}-{{word:qu4}}",
  ],
  tts: ["把X给飞机，让飞机拿去", "把X给车，让车拿去"],
  literal: "give X to the plane, let the plane take it away / give X to the car, let the car take it away",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["handling-action"],
  proposed: true,
});
