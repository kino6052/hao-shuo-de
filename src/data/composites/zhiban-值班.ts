import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8046,
  phase: 4,
  zh: "值班",
  py: "zhíbān",
  en: "be on duty; work a shift",
  ru: "дежурить",
  pos: "verb",
  hsd: [
    "{{word:bie2}}-{{word:ren2}} {{word:bu4}} {{word:zai4}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:gong1}}-{{word:zuo4}}",
  ],
  tts: ["别人不在的时候工作"],
  literal: "wait at the workplace, do it if something comes up / work when the others are not there",
  fit: "plain",
  topics: ["work-days-and-busy"],
  isA: ["working"],
  proposed: true,
});
