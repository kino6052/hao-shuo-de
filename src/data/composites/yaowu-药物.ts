import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7370,
  phase: 4,
  zh: "药物",
  py: "yàowù",
  en: "medicine; medication",
  ru: "лекарство; медикамент",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:rang4}} {{word:shen1ti3}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["身体不好的人吃的东西", "让身体好的东西"],
  literal: "a thing eaten by people whose body is not good / a thing that makes the body well",
  fit: "plain",
  topics: ["at-the-doctor"],
  isA: ["made-thing"],
  proposed: true,
});
