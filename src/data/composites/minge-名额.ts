import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9112,
  phase: 4,
  zh: "名额",
  py: "míng’é",
  en: "quota; number of places",
  ru: "квота; количество мест",
  pos: "noun",
  hsd: [
    "{{word:neng2}} {{word:yao4}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:shu4}}",
    "{{word:zui4}} {{word:duo1}} {{word:neng2}} {{word:yao4}} {{word:duo1}}-{{word:shao3}}-{{light:ge4}} {{word:ren2}}",
  ],
  tts: ["能要的人的数", "最多能要多少个人"],
  literal: "the number of people that can be taken / at most how many people can be taken",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["amount-word"],
  proposed: true,
});
