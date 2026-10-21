import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6850,
  phase: 4,
  zh: "租金",
  py: "zūjīn",
  en: "rent (money)",
  ru: "арендная плата",
  pos: "noun",
  hsd: [
    "{{word:yong4}} {{word:bie2}}-{{word:ren2}}-{{word:de}} {{word:fang2}}-{{word:zi}} {{word:yao4}} {{word:gei3}}-{{word:de}} {{word:jin1}}",
    "{{word:yong4}} {{word:bie2}}-{{word:ren2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:gei3}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["用别人的房子要给的金", "用别人的东西要给的金"],
  literal: "the money to be given for using someone else's house / thing",
  fit: "plain",
  topics: ["housing"],
  isA: ["money-thing"],
  proposed: true,
});
