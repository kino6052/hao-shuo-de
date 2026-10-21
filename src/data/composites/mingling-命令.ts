import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8161,
  phase: 4,
  zh: "命令",
  py: "mìnglìng",
  en: "order; command",
  ru: "приказывать; приказ",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} X {{word:zuo4}} Y, {{word:bu4}} {{word:neng2}} {{word:bu4}} {{word:zuo4}}",
    "{{word:jiao4}} {{word:ren2}} {{word:zuo4}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["叫X做Y，不能不做", "叫人做的话"],
  literal: "tell X to do Y, X cannot not do it / words that tell people to do something",
  fit: "plain",
  topics: ["talks-discussion-and-orders"],
  isA: ["speaking-action"],
  proposed: true,
});
