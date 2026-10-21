import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8068,
  phase: 4,
  zh: "漂",
  py: "piāo",
  en: "float; drift",
  ru: "плавать на поверхности; дрейфовать",
  pos: "verb",
  hsd: [
    "{{word:zai4}} {{word:shui3}}-{{word:shang4}} {{word:dong4}}",
    "{{word:zai4}} {{word:shui3}} {{word:shang4}}-{{word:mian4}}, {{word:bu4}} {{word:xia4}}-{{word:qu4}}",
  ],
  tts: ["在水上动", "在水上面，不下去"],
  literal: "move on the water / be on top of the water, not go down",
  fit: "plain",
  topics: ["land-and-water"],
  isA: ["moving-action"],
  proposed: true,
});
