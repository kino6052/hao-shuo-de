import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7970,
  phase: 4,
  zh: "空闲",
  py: "kòngxián",
  en: "free (not busy); free time",
  ru: "свободный; свободное время",
  pos: "adjective",
  hsd: [
    "{{word:mei2}}-{{word:you3}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}",
    "{{word:mei2}}-{{word:you3}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["没有东西要做", "没有东西要做的时间"],
  literal: "nothing to do / the time when there is nothing to do",
  fit: "plain",
  topics: ["working-life"],
  isA: ["condition-quality"],
  proposed: true,
});
