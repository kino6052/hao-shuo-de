import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7444,
  phase: 4,
  zh: "货物",
  py: "huòwù",
  en: "goods; cargo",
  ru: "товары; груз",
  pos: "noun",
  hsd: [
    "{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:yao4}} {{word:na2}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["买的东西", "要拿到别的地方的东西"],
  literal: "things that are bought / things to be taken to another place",
  fit: "plain",
  topics: ["shopping"],
  isA: ["made-thing"],
  proposed: true,
});
