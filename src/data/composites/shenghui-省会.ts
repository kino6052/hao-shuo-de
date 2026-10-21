import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6490,
  phase: 4,
  zh: "省会",
  py: "shěnghuì",
  en: "provincial capital",
  ru: "столица провинции",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:guo2}}-{{word:li3}}-{{word:de}}-{{word:da4}}-{{word:de}}-{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:tou2}}",
    "{{word:zai4}}-{{word:guo2}}-{{word:li3}}-{{word:de}} {{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["在国里的大的地方的头", "在国里的大的地方决定的地方"],
  literal: "the head of a big place in the country",
  fit: "plain",
  topics: ["cities-towns-and-provinces"],
  isA: ["settlement"],
  proposed: true,
});
