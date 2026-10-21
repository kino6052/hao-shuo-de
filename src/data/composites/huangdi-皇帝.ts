import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8222,
  phase: 4,
  zh: "皇帝",
  py: "huángdì",
  en: "emperor",
  ru: "император",
  pos: "noun",
  hsd: [
    "{{word:yi3}}-{{word:qian2}} {{word:guo2}}-{{word:jia1}}-{{word:li3}} {{word:zui4}} {{word:da4}}-{{word:de}} {{word:ren2}}",
    "{{word:yi3}}-{{word:qian2}} \"Zhōngguó\" {{word:zui4}} {{word:da4}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["以前国家里最大的人", "以前中国最大的人"],
  literal: "the biggest person in the country long ago / the biggest person of China long ago",
  fit: "plain",
  topics: ["history-and-culture"],
  isA: ["person"],
  proposed: true,
});
