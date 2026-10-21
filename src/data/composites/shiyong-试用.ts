import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6500,
  phase: 4,
  zh: "试用",
  py: "shìyòng",
  en: "try out; use on trial",
  ru: "пробовать; использовать на пробу",
  pos: "verb",
  hsd: [
    "{{word:yong4}} {{word:yi1}}-{{word:xia4}}, {{word:kan4}} {{word:hao3}} {{word:bu4}} {{word:hao3}}",
    "{{word:yong4}} {{word:yi1}}-{{word:xia4}}",
  ],
  tts: ["用一下，看好不好", "用一下"],
  literal: "use it for a moment and see if it is good",
  fit: "plain",
  topics: ["deciding"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
