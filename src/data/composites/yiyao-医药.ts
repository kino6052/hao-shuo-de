import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7781,
  phase: 4,
  zh: "医药",
  py: "yīyào",
  en: "medicine; medical drugs",
  ru: "лекарства; медицина",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:rang4}} {{word:shen1ti3}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["身体不好的人吃的东西", "让身体好的东西"],
  literal: "what people with a bad body eat / things that make the body well",
  fit: "plain",
  topics: ["at-the-doctor"],
  isA: ["made-thing"],
  proposed: true,
});
