import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9100,
  phase: 4,
  zh: "精通",
  py: "jīngtōng",
  en: "be proficient in; master",
  ru: "в совершенстве владеть; отлично знать",
  pos: "verb",
  hsd: [
    "{{word:dui4}} X {{word:zhi1dao4}}-{{word:de}} {{word:hen3}} {{word:duo1}}",
    "X {{word:dou1}} {{word:zhi1dao4}}, {{word:dou1}} {{word:neng2}} {{word:zuo4}}",
  ],
  tts: ["对X知道的很多", "X都知道，都能做"],
  literal: "know a lot about X / know all about X, can do all of it",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["thinking-action"],
  proposed: true,
});
