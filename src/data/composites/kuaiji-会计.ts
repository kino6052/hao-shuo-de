import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8748,
  phase: 4,
  zh: "会计",
  py: "kuàijì",
  en: "accountant; accounting",
  ru: "бухгалтер; бухгалтерия",
  pos: "noun",
  hsd: [
    "{{word:suan4}} {{word:jin1}}, {{word:kan4}}-{{word:hao3}} {{word:jin1}}-{{word:de}} {{word:ren2}}",
    "{{word:zuo4}} {{word:jin1}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["算金，看好金的人", "做金的工作的人"],
  literal: "a person who counts the money and looks after it / a person who does the work of money",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
