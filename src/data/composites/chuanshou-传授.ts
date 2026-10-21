import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9003,
  phase: 4,
  zh: "传授",
  py: "chuánshòu",
  en: "pass on (knowledge or skill); impart",
  ru: "передавать (знания, навыки)",
  pos: "verb",
  hsd: [
    "{{word:bang1}} X {{word:xue2}} {{word:wo3}} {{word:neng2}} {{word:zuo4}}-{{word:de}}",
    "{{word:ba3}} {{word:wo3}}-{{word:de}} {{word:zuo4}}-{{word:fa3}} {{word:gei3}} X",
  ],
  tts: ["帮X学我能做的", "把我的做法给X"],
  literal: "help X learn what I can do / give my way of doing it to X",
  fit: "plain",
  topics: ["teaching-homework-and-questions"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
