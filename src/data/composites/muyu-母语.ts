import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8252,
  phase: 4,
  zh: "母语",
  py: "mǔyǔ",
  en: "mother tongue; native language",
  ru: "родной язык",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:shi2}}-{{light:hou4}} {{word:di4}}-{{word:yi1}}-{{light:ge4}} {{word:xue2}}-{{word:de}} {{word:hua4}}",
    "{{word:ba4ba}}-{{word:ma1ma}} {{word:shuo1}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["小时候第一个学的话", "爸爸妈妈说的话"],
  literal: "the speech learned first as a child / the speech of one's parents",
  fit: "plain",
  topics: ["languages"],
  isA: ["language-thing"],
  proposed: true,
});
