import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8360,
  phase: 4,
  zh: "方言",
  py: "fāngyán",
  en: "dialect",
  ru: "диалект; говор",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hua4}}",
    "{{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:ren2}} {{word:shuo1}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["一个地方的话", "一个地方的人说的话"],
  literal: "the talk of one place / the words people of one place say",
  fit: "plain",
  topics: ["languages"],
  isA: ["language-thing"],
  proposed: true,
});
