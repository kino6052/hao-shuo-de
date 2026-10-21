import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6909,
  phase: 4,
  zh: "假日",
  py: "jiàrì",
  en: "holiday; day off",
  ru: "выходной день",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ri4}}",
    "{{word:bu4}} {{word:xue2}}, {{word:bu4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:ri4}}",
  ],
  tts: ["不工作的日", "不学，不工作的日"],
  literal: "a day of not working / a day of not studying and not working",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["event"],
  proposed: true,
});
