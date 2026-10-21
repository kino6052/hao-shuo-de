import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7788,
  phase: 4,
  zh: "职务",
  py: "zhíwù",
  en: "duty; post; job",
  ru: "должность; служебные обязанности",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:zuo4}}-{{word:li3}} {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "X-{{word:de}} {{word:gong1}}-{{word:zuo4}}",
  ],
  tts: ["工作里要做的东西", "X的工作"],
  literal: "what is to be done in the work / X's work",
  fit: "plain",
  topics: ["working-life"],
  isA: ["idea"],
  proposed: true,
});
