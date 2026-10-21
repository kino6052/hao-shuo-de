import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6739,
  phase: 4,
  zh: "时间表",
  py: "shíjiānbiǎo",
  en: "schedule; timetable",
  ru: "расписание",
  pos: "noun",
  hsd: [
    "{{word:xie3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:zuo4}} {{word:shen2me}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:zuo4}} {{word:shen2me}}",
  ],
  tts: ["写什么时间做什么的东西", "什么时间做什么"],
  literal: "the written thing: what to do at what time / what to do at what time",
  fit: "plain",
  topics: ["clock"],
  isA: ["paper-thing"],
  proposed: true,
});
