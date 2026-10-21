import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8635,
  phase: 4,
  zh: "汇报",
  py: "huìbào",
  en: "report (to a superior); give an account",
  ru: "докладывать; отчитываться",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:shuo1}} {{word:gei3}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}} {{word:ting1}}",
    "{{word:dui4}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}} {{word:shuo1}} X",
  ],
  tts: ["把X说给做决定的人听", "对做决定的人说X"],
  literal: "tell X to the leader to hear / say X to the leader",
  fit: "plain",
  topics: ["managing-and-progress"],
  isA: ["speaking-action"],
  proposed: true,
});
