import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8333,
  phase: 4,
  zh: "助理",
  py: "zhùlǐ",
  en: "assistant",
  ru: "помощник; ассистент",
  pos: "noun",
  hsd: [
    "{{word:bang1}} {{word:wo3}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}} {{word:bie2}}-{{word:ren2}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["帮我工作的人", "帮别人工作的人"],
  literal: "a person who helps me work / a person who helps others work",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
