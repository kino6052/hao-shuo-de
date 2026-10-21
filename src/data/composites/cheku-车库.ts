import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7685,
  phase: 4,
  zh: "车库",
  py: "chēkù",
  en: "garage",
  ru: "гараж",
  pos: "noun",
  hsd: [
    "{{word:fang4}} {{word:che1}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
    "{{word:ba3}} {{word:che1}} {{word:fang4}} {{word:hao3}}-{{word:de}} {{word:fang2}}-{{word:zi}}",
  ],
  tts: ["放车的房间", "把车放好的房子"],
  literal: "the room for putting the car / the house where you put the car away",
  fit: "plain",
  topics: ["vehicles"],
  isA: ["room"],
  proposed: true,
});
