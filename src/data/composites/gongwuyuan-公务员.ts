import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6381,
  phase: 4,
  zh: "公务员",
  py: "gōngwùyuán",
  en: "civil servant",
  ru: "госслужащий",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} {{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
    "{{word:wei4}} {{word:guo2}}-{{word:jia1}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["做国家的工作的人", "为国家工作的人"],
  literal: "a person who does the country's work",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
