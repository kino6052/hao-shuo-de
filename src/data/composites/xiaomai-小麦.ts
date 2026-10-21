import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8565,
  phase: 4,
  zh: "小麦",
  py: "xiǎomài",
  en: "wheat",
  ru: "пшеница",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} {{word:mian4}}-{{word:bao1}}-{{word:de}} {{word:zhi2wu4}}",
    "{{word:di4}}-{{word:li3}}-{{word:de}} {{word:zhi2wu4}}, {{word:ke3}}-{{word:yi3}} {{word:zuo4}} {{word:mian4}}-{{word:bao1}}",
  ],
  tts: ["做面包的植物", "地里的植物，可以做面包"],
  literal: "the plant that bread is made from / a plant of the field, bread can be made from it",
  fit: "plain",
  topics: ["crops-and-farming"],
  isA: ["crop"],
  proposed: true,
});
