import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7676,
  phase: 4,
  zh: "出院",
  py: "chūyuàn",
  en: "be discharged from hospital; leave hospital",
  ru: "выписаться из больницы",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}} {{word:hao3}} {{word:le}}, {{word:hui2}} {{word:jia1}}",
    "{{word:shen1ti3}} {{word:hao3}} {{word:le}}, {{word:bu4}} {{word:liu2}} {{word:zai4}} {{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:le}}",
  ],
  tts: ["身体好了，回家", "身体好了，不留在把身体做好的地方了"],
  literal: "the body is well, go home / the body is well, no longer staying at the place that makes bodies well",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["moving-action"],
  proposed: true,
});
