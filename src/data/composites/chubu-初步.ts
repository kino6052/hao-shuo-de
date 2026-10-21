import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8603,
  phase: 4,
  zh: "初步",
  py: "chūbù",
  en: "preliminary; initial; first-step",
  ru: "предварительный; начальный",
  pos: "adjective",
  hsd: [
    "{{word:hai2}} {{word:mei2}} {{word:zuo4}}-{{word:wan2}}, {{word:zhi3}} {{word:kai1shi3}} {{word:le}}",
    "{{word:di4}}-{{word:yi1}}-{{word:ci4}} {{word:zuo4}}-{{word:de}}, {{word:hai2}} {{word:mei2}} {{word:zuo4}}-{{word:hao3}}",
  ],
  tts: ["还没做完，只开始了", "第一次做的，还没做好"],
  literal: "not yet done, only started / done for the first time, not yet done well",
  fit: "plain",
  topics: ["before-and-after"],
  isA: ["time-order"],
  proposed: true,
});
