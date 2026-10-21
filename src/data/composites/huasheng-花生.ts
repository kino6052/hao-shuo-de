import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8051,
  phase: 4,
  zh: "花生",
  py: "huāshēng",
  en: "peanut",
  ru: "арахис",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:di4}} {{word:xia4}}-{{word:mian4}} {{word:sheng1}}-{{word:de}}, {{word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:ying4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:chi1}}-{{word:de}}",
  ],
  tts: ["在地下面生的，外面很硬的小的吃的"],
  literal: "a small food born under the ground, very hard on the outside",
  fit: "plain",
  topics: ["sweets-and-snacks"],
  isA: ["snack-or-sweet"],
  proposed: true,
});
