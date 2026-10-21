import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9320,
  phase: 4,
  zh: "监测",
  py: "jiāncè",
  en: "monitor; keep watch and record",
  ru: "мониторить; следить и фиксировать",
  pos: "verb",
  hsd: [
    "{{word:yi1}}-{{word:ci4}} {{word:yi1}}-{{word:ci4}} {{word:kan4}} X, {{word:ba3}} {{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:xie3}}-{{word:xia4}}-{{word:lai2}}",
    "{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:kan4}} X",
  ],
  tts: ["一次一次看X，把看到的写下来", "什么时间都在看X"],
  literal: "look at X time after time, write down what you saw / look at X at all times",
  fit: "plain",
  topics: ["checking-and-testing"],
  isA: ["perceiving"],
  proposed: true,
});
