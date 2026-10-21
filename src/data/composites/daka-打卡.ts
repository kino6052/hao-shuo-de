import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7807,
  phase: 4,
  zh: "打卡",
  py: "dǎkǎ",
  en: "clock in; check in",
  ru: "отмечаться (на работе)",
  pos: "verb",
  hsd: [
    "{{word:da3}} \"kǎ\"",
    "{{word:rang4}} {{word:ji1}} {{word:ji4}}-{{word:xia4}} {{word:wo3}} {{word:lai2}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["打\"卡\"", "让机记下我来工作的时间"],
  fit: "natural",
  topics: ["office"],
  isA: ["working"],
  proposed: true,
});
