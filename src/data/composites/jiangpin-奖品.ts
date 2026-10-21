import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8385,
  phase: 4,
  zh: "奖品",
  py: "jiǎngpǐn",
  en: "prize",
  ru: "приз",
  pos: "noun",
  hsd: [
    "{{word:gei3}}-{{word:zuo4}}-{{word:de}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zuo4}}-{{word:hao3}} {{word:le}}, {{word:de2}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["给做的好的人的东西", "做好了，得到的东西"],
  literal: "a thing for the person who did well / a thing one gets for doing well",
  fit: "plain",
  topics: ["parties-and-gifts"],
  isA: ["made-thing"],
  proposed: true,
});
