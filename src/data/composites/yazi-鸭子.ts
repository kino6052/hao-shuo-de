import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7205,
  phase: 4,
  zh: "鸭子",
  py: "yāzi",
  en: "duck",
  ru: "утка",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:zou3}}-{{word:de}}, {{word:jiao4}} \"gā-gā\"-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    "{{word:zai4}} {{word:shui3}}-{{word:li3}} {{word:zou3}}-{{word:de}} {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
  ],
  tts: ["在水里走的，叫嘎嘎的动物", "在水里走的飞的动物"],
  literal: "an animal that walks in the water and calls gā-gā / a flying animal that walks in the water",
  fit: "plain",
  topics: ["farm-animals"],
  isA: ["bird"],
  proposed: true,
});
