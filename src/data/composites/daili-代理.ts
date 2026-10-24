import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9007,
  phase: 4,
  zh: "代理",
  py: "dàilǐ",
  en: "act on behalf of; act as agent",
  ru: "представлять кого-либо; замещать",
  pos: "verb",
  hsd: [
    "{{word:bang1}} X {{word:zuo4}} X {{word:yao4}} {{word:zuo4}}-{{word:de}}",
    "{{word:bang1}} X {{word:zuo4}}",
  ],
  tts: ["帮X做X要做的", "帮X做"],
  literal: "do for X what X has to do / do it for X",
  fit: "plain",
  topics: ["managing-and-progress"],
  isA: ["working"],
  proposed: true,
});
