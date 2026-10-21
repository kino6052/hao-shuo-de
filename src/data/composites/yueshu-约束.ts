import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8880,
  phase: 4,
  zh: "约束",
  py: "yuēshù",
  en: "restrain; bind; constrain",
  ru: "ограничивать; сдерживать; связывать",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:rang4}} X {{word:xiang3}} {{word:zuo4}} {{word:shen2me}} {{word:jiu4}} {{word:zuo4}} {{word:shen2me}}",
    "{{word:rang4}} X {{word:bu4}} {{word:neng2}} {{word:luan4}} {{word:zuo4}}",
  ],
  tts: ["不让X想做什么就做什么", "让X不能乱做"],
  literal: "not let X do whatever X wants / make X unable to do things carelessly",
  fit: "plain",
  topics: ["law-and-crime"],
  isA: ["social-action"],
  proposed: true,
});
