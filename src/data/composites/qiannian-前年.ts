import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7943,
  phase: 4,
  zh: "前年",
  py: "qiánnián",
  en: "the year before last",
  ru: "позапрошлый год",
  pos: "noun",
  hsd: [
    "{{word:qian2}}-{{word:nian2}}",
    "{{word:qu4}}-{{word:nian2}}-{{word:de}} {{word:qu4}}-{{word:nian2}}",
  ],
  tts: ["前年", "去年的去年"],
  fit: "natural",
  topics: ["calendar"],
  isA: ["time-point"],
  proposed: true,
});
