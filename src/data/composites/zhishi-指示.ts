import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7662,
  phase: 4,
  zh: "指示",
  py: "zhǐshì",
  en: "instruct; direct; instruction",
  ru: "давать указание; указание",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} {{word:ren2}} {{word:zuo4}} X",
    "{{word:jiao4}} {{word:ren2}} {{word:zuo4}} {{word:shen2me}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["叫人做X", "叫人做什么的话"],
  literal: "tell people to do X / the words telling people what to do",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  proposed: true,
});
