import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6798,
  phase: 4,
  zh: "准时",
  py: "zhǔnshí",
  en: "on time; punctual",
  ru: "вовремя, точно в срок",
  pos: "adjective",
  hsd: [
    "{{word:bu4}} {{word:zao3}} {{word:ye3}} {{word:bu4}} {{word:wan3}}",
    "{{word:zai4}} {{word:shuo1}}-{{word:hao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:dao4}}",
  ],
  tts: ["不早也不晚", "在说好的时间到"],
  literal: "not early and not late / arrive at the time that was agreed",
  fit: "plain",
  topics: ["clock"],
  isA: ["time-order"],
  proposed: true,
});
