import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8090,
  phase: 4,
  zh: "庄稼",
  py: "zhuāngjia",
  en: "crops; standing crops in the field",
  ru: "посевы; урожай на поле",
  pos: "noun",
  hsd: [
    "{{word:chi1}}-{{word:de}} {{word:zhi2wu4}}",
    "{{word:zai4}} {{word:di4}}-{{word:li3}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}",
  ],
  tts: ["吃的植物", "在地里的吃的植物"],
  literal: "plants to eat / plants to eat that are in the field",
  fit: "plain",
  topics: ["crops-and-farming"],
  isA: ["crop"],
  proposed: true,
});
