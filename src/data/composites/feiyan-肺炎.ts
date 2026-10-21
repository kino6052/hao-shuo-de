import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8200,
  phase: 4,
  zh: "肺炎",
  py: "fèiyán",
  en: "pneumonia",
  ru: "пневмония",
  pos: "noun",
  hsd: [
    "{{word:qi4}} {{word:jin4}}-{{word:qu4}} {{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}",
  ],
  tts: ["气进去出来的地方的身体不好"],
  literal: "the unwellness of the place where air goes in and comes out",
  fit: "plain",
  topics: ["illness"],
  isA: ["state-name"],
  proposed: true,
});
