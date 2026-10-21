import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6655,
  phase: 4,
  zh: "地震",
  py: "dìzhèn",
  en: "earthquake",
  ru: "землетрясение",
  pos: "noun",
  hsd: [
    "{{word:di4}} {{word:dong4}}",
    "{{word:di4}} {{word:zai4}} {{word:dong4}}, {{word:fang2}}-{{word:zi}} {{word:huai4}} {{word:le}}",
  ],
  tts: ["地动", "地在动，房子坏了"],
  literal: "the ground moves; the ground is moving, houses are broken",
  fit: "plain",
  topics: ["land-and-water"],
  isA: ["happening"],
  proposed: true,
});
