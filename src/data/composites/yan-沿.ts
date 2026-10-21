import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6538,
  phase: 4,
  zh: "沿",
  py: "yán",
  en: "along; follow; edge",
  ru: "вдоль; по; край",
  pos: "preposition",
  hsd: [
    "{{word:zai4}} X {{word:pang2bian1}} {{word:zou3}}",
    "{{word:cong2}} X-{{word:de}} {{word:zhe4}}-{{word:bian1}} {{word:zou3}} {{word:dao4}} {{word:na4}}-{{word:bian1}}",
    "X-{{word:de}} {{word:bian1}}",
  ],
  tts: ["在X旁边走", "从X的这边走到那边", "X的边"],
  literal: "walk beside X",
  fit: "plain",
  topics: ["directions"],
  isA: ["place-relation"],
  proposed: true,
});
