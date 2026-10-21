import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8381,
  phase: 4,
  zh: "环",
  py: "huán",
  en: "ring; loop; circle; surround",
  ru: "кольцо; круг; окружать",
  pos: "noun",
  hsd: [
    "{{word:yuan2}}-{{word:de}} {{word:xian4}}",
    "{{word:yuan2}}-{{word:de}}, {{word:kong1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["圆的线", "圆的，空的东西"],
  literal: "a round line / a round, empty thing",
  fit: "plain",
  topics: ["shapes"],
  isA: ["made-thing"],
  proposed: true,
});
