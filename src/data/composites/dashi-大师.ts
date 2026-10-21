import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8609,
  phase: 4,
  zh: "大师",
  py: "dàshī",
  en: "master; grandmaster",
  ru: "мастер; великий мастер",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} X {{word:zui4}} {{word:hao3}}, {{word:bie2}}-{{word:ren2}} {{word:dou1}} {{word:xiang3}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
    "{{word:zuo4}} X {{word:zui4}} {{word:hao3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["做X最好，别人都想学的人", "做X最好的人"],
  literal: "a person who does X best, whom others all want to learn from / the person who does X best",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
