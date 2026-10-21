import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8086,
  phase: 4,
  zh: "枝",
  py: "zhī",
  en: "branch; twig; (counting word for long thin things)",
  ru: "ветка; (счётное слово для длинных тонких предметов)",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:de}} {{word:zhi2wu4}}-{{word:shang4}}-{{word:de}} {{word:chang2}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    "{{word:ge4}}",
  ],
  tts: ["大的植物上的长的部分", "个"],
  literal: "the long part on a big plant",
  fit: "plain",
  topics: ["trees-and-flowers"],
  isA: ["plant"],
  proposed: true,
});
