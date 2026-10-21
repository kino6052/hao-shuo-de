import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8089,
  phase: 4,
  zh: "砖",
  py: "zhuān",
  en: "brick",
  ru: "кирпич",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} {{word:fang2}}-{{word:zi}} {{word:yong4}}-{{word:de}} {{word:ying4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zuo4}} {{word:fang2}}-{{word:zi}} {{word:yong4}}-{{word:de}}, {{word:hong2}}-{{word:de}} {{word:ying4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["做房子用的硬的东西", "做房子用的，红的硬的东西"],
  literal: "a hard thing used to make houses / used to make houses, a red hard thing",
  fit: "plain",
  topics: ["materials"],
  isA: ["made-thing"],
  proposed: true,
});
