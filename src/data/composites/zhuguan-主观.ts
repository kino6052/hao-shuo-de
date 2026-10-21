import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7376,
  phase: 4,
  zh: "主观",
  py: "zhǔguān",
  en: "subjective",
  ru: "субъективный",
  pos: "adjective",
  hsd: [
    "{{word:zhi3}} {{word:shi4}} {{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:zhe4}}-{{word:yang4}} {{word:xiang3}}",
    "{{word:shi4}} {{word:wo3}} {{word:jue2}}-{{word:de}}, {{word:bu4}} {{word:yi1}}-{{word:ding4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["只是一个人这样想", "是我觉得，不一定是真的"],
  literal: "only one person thinks it this way / it is what I feel, not surely true",
  fit: "plain",
  topics: ["ideas-and-opinions"],
  isA: ["truth-or-ease"],
  proposed: true,
});
