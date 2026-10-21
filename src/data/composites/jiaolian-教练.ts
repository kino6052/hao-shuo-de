import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6915,
  phase: 4,
  zh: "教练",
  py: "jiàoliàn",
  en: "coach; trainer",
  ru: "тренер",
  pos: "noun",
  hsd: [
    "{{word:bang1}} {{word:ren2}} {{word:xue2}} {{word:dong4}} {{word:shen1ti3}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}} {{word:ren2}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}, {{word:bian4}} {{word:hao3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["帮人学动身体的人", "帮人很多次做，变好的人"],
  literal: "the person who helps people learn to move the body / the person who helps people do it many times and get better",
  fit: "plain",
  topics: ["sports"],
  isA: ["worker"],
  proposed: true,
});
