import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8515,
  phase: 4,
  zh: "山峰",
  py: "shānfēng",
  en: "mountain peak; summit",
  ru: "горная вершина; пик",
  pos: "noun",
  hsd: [
    "{{word:gao1}}-{{word:di4}}-{{word:de}} {{word:zui4}} {{word:gao1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:gao1}}-{{word:di4}} {{word:zui4}} {{word:shang4}}-{{word:mian4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["高地的最高的地方", "高地最上面的部分"],
  literal: "the highest place of the high ground / the topmost part of the high ground",
  fit: "plain",
  topics: ["land-and-water"],
  isA: ["landform"],
  proposed: true,
});
