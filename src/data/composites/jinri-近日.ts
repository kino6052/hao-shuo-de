import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8226,
  phase: 4,
  zh: "近日",
  py: "jìnrì",
  en: "recently; these days",
  ru: "в последние дни; недавно",
  pos: "noun",
  hsd: [
    "{{word:he2}} {{word:xian4}}-{{word:zai4}} {{word:bu4}} {{word:yuan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:zhe4}}-{{word:xie1}} {{word:tian1}}",
  ],
  tts: ["和现在不远的时间", "这些天"],
  literal: "the time that is not far from now / these days",
  fit: "plain",
  topics: ["now-and-recently"],
  isA: ["time-point"],
  proposed: true,
});
