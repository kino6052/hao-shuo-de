import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8011,
  phase: 4,
  zh: "伤口",
  py: "shāngkǒu",
  en: "wound; cut",
  ru: "рана",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:shang4}} {{word:kai1}} {{word:le}}, {{word:tong4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:shen1ti3}} {{word:huai4}} {{word:le}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["身体上开了，痛的地方", "身体坏了的地方"],
  literal: "the place on the body that has opened and hurts / the place where the body is broken",
  fit: "plain",
  topics: ["injuries"],
  isA: ["state-name"],
  proposed: true,
});
