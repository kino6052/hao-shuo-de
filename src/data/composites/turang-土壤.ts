import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7889,
  phase: 4,
  zh: "土壤",
  py: "tǔrǎng",
  en: "soil",
  ru: "почва",
  pos: "noun",
  hsd: [
    "{{word:zhi2wu4}} {{word:zai4}} {{word:li3}}-{{word:mian4}} {{word:huo2}}-{{word:de}} {{word:di4}}",
    "{{word:zai4}}-{{word:zhi2wu4}}-{{word:xia4}}-{{word:mian4}}-{{word:de}} {{word:di4}}",
  ],
  tts: ["植物在里面活的地", "在植物下面的地"],
  literal: "the ground plants live in / the ground under the plants",
  fit: "plain",
  topics: ["crops-and-farming"],
  isA: ["stone-or-earth"],
  proposed: true,
});
