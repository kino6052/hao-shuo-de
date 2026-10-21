import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6502,
  phase: 4,
  zh: "书法",
  py: "shūfǎ",
  en: "calligraphy",
  ru: "каллиграфия",
  pos: "noun",
  hsd: [
    "{{word:shu1}}-{{word:fa3}}",
    "{{word:xie3}} {{word:zi4}}-{{word:de}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:fang1}}-{{word:fa3}}",
  ],
  tts: ["书法", "写字的好看的方法"],
  fit: "natural",
  topics: ["art-and-drawing"],
  isA: ["activity-name"],
  proposed: true,
});
