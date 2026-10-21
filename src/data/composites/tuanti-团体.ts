import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8282,
  phase: 4,
  zh: "团体",
  py: "tuántǐ",
  en: "group; organization; collective",
  ru: "группа; коллектив; организация",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:qi3}} {{word:zuo4}}-{{word:de}} {{word:hen3}}-{{word:duo1}} {{word:ren2}}",
    "{{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["一起做的很多人", "很多人一起"],
  literal: "many people who do things together / many people together",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["group-of-people"],
  proposed: true,
});
