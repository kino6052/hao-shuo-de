import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8337,
  phase: 4,
  zh: "阻碍",
  py: "zǔ’ài",
  en: "hinder; obstruct; obstacle",
  ru: "препятствовать; помеха",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:rang4}} X {{word:guo4}}-{{word:qu4}}",
    "{{word:bu4}} {{word:rang4}} X {{word:dao4}} Y",
    "{{word:bu4}} {{word:rang4}} {{word:ren2}} {{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["不让X过去", "不让X到Y", "不让人过去的东西"],
  literal: "not let X pass / not let X get to Y / a thing that does not let people pass",
  fit: "plain",
  topics: ["blocking-and-controlling"],
  isA: ["handling-action"],
  proposed: true,
});
