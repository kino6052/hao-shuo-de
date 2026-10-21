import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6606,
  phase: 4,
  zh: "病房",
  py: "bìngfáng",
  en: "sickroom; hospital ward",
  ru: "больничная палата",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:ren2}} {{word:shui4jiao4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
    "{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:ren2}} {{word:zai4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
  ],
  tts: ["身体不好的人睡觉的房间", "身体不好的人在的房间"],
  literal: "the room where people with an unwell body sleep / the room where people with an unwell body are",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["room"],
  proposed: true,
});
