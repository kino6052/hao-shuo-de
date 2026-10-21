import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6685,
  phase: 4,
  zh: "公寓",
  py: "gōngyù",
  en: "apartment",
  ru: "квартира (в многоэтажном доме)",
  pos: "noun",
  hsd: [
    "{{word:gao1}}-{{word:de}} {{word:fang2}}-{{word:zi}} {{word:li3}}-{{word:de}} {{word:jia1}}",
    "{{word:hen3}} {{word:duo1}} {{word:jia1}} {{word:zai4}} {{word:yi1}}-{{light:ge4}} {{word:fang2}}-{{word:zi}} {{word:li3}}",
  ],
  tts: ["高的房子里的家", "很多家在一个房子里"],
  literal: "a home inside a tall house; many homes in one house",
  fit: "plain",
  topics: ["housing"],
  isA: ["room"],
  proposed: true,
});
