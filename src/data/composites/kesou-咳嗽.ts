import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7244,
  phase: 4,
  zh: "咳嗽",
  py: "késou",
  en: "cough",
  ru: "кашлять",
  pos: "verb",
  hsd: [
    "{{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:qi4}} {{word:hen3}} {{word:kuai4}} {{word:cong2}} {{word:kou3}} {{word:chu1}}-{{word:lai2}}, {{word:fa1}} {{word:sheng1yin1}}",
  ],
  tts: ["身体里的气很快从口出来，发声音"],
  literal: "the air in the body comes out of the mouth very fast and makes a sound",
  fit: "plain",
  topics: ["pain-and-feeling-unwell"],
  isA: ["body-action"],
  proposed: true,
});
