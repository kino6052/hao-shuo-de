import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8267,
  phase: 4,
  zh: "神经",
  py: "shénjīng",
  en: "nerve",
  ru: "нерв",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:li3}} {{word:rang4}} {{word:tou2}} {{word:zhi1dao4}}-{{word:de}} {{word:xian4}}",
    "{{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:xian4}}, {{word:rang4}} {{word:shou3}} {{word:he2}} {{word:jiao3}} {{word:zhi1dao4}} {{word:tou2}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["身体里让头知道的线", "身体里的线，让手和脚知道头的话"],
  literal: "the line in the body that lets the head know / the line in the body that lets hands and feet know what the head says",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["body-part"],
  proposed: true,
});
