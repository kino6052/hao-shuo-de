import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8284,
  phase: 4,
  zh: "违规",
  py: "wéiguī",
  en: "break the rules; violation",
  ru: "нарушать правила",
  pos: "verb",
  hsd: [
    "{{word:zuo4}} {{word:bu4}} {{word:rang4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:bu4}} {{word:ting1}} {{word:shuo1}} {{word:yao4}} {{word:zen3me}} {{word:zuo4}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["做不让做的东西", "不听说要怎么做的话"],
  literal: "do what is not allowed / not obey the words that say how to do it",
  fit: "plain",
  topics: ["laws-and-rules"],
  isA: ["social-action"],
  proposed: true,
});
