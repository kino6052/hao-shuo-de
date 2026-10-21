import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8132,
  phase: 4,
  zh: "惩罚",
  py: "chéngfá",
  en: "punish; punishment",
  ru: "наказывать; наказание",
  pos: "verb",
  hsd: [
    "{{word:yin1wei4}} X {{word:zuo4}} {{word:le}} {{word:bu4}} {{word:dui4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, {{word:rang4}} X {{word:bu4}} {{word:kai1}}-{{word:xin1}}",
    "{{word:rang4}} {{word:zuo4}} {{word:le}} {{word:bu4}} {{word:dui4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}} {{word:bu4}} {{word:kai1}}-{{word:xin1}}",
  ],
  tts: ["因为X做了不对的东西，让X不开心", "让做了不对的东西的人不开心"],
  literal: "because X did a wrong thing, make X unhappy / make the person who did a wrong thing unhappy",
  fit: "plain",
  topics: ["law-and-crime"],
  isA: ["social-action"],
  proposed: true,
});
