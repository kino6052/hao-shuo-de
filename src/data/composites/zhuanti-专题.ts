import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8890,
  phase: 4,
  zh: "专题",
  py: "zhuāntí",
  en: "special topic; feature; special subject",
  ru: "специальная тема; тематический материал",
  pos: "noun",
  hsd: [
    "{{word:zhi3}} {{word:shuo1}} {{word:yi1}}-{{light:ge4}} {{word:ti2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zhi3}} {{word:shuo1}} {{word:yi1}}-{{light:ge4}} {{word:da4}} {{word:ti2}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["只说一个题的东西", "只说一个大题的话"],
  literal: "a thing that speaks of only one topic / words on only one big topic",
  fit: "plain",
  topics: ["topics-and-examples"],
  isA: ["language-thing"],
  proposed: true,
});
