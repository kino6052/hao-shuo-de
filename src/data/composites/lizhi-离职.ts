import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7613,
  phase: 4,
  zh: "离职",
  py: "lízhí",
  en: "resign; leave a job",
  ru: "уволиться; уйти с работы",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:gong1}}-{{word:zuo4}} {{word:le}}",
    "{{word:bu4}} {{word:zai4}} X {{word:gong1}}-{{word:zuo4}} {{word:le}}",
  ],
  tts: ["不工作了", "不在X工作了"],
  literal: "not working any more / not working at X any more",
  fit: "plain",
  topics: ["jobs-and-hiring"],
  isA: ["working"],
  proposed: true,
});
