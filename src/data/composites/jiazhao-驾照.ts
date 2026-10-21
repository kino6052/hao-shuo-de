import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6717,
  phase: 4,
  zh: "驾照",
  py: "jiàzhào",
  en: "driver's license",
  ru: "водительские права",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:ren2}} {{word:kai1}}-{{word:che1}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:kai1}}-{{word:che1}} {{word:yao4}} {{word:you3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让人开车的写的东西", "开车要有的写的东西"],
  literal: "the written thing that lets a person drive; the written thing you need to drive",
  fit: "plain",
  topics: ["vehicles"],
  isA: ["paper-thing"],
  proposed: true,
});
