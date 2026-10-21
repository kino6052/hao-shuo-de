import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7384,
  phase: 4,
  zh: "背景",
  py: "bèijǐng",
  en: "background; backdrop",
  ru: "фон; предыстория",
  pos: "noun",
  hsd: [
    "X {{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "X {{word:yi3}}-{{word:qian2}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["X后面的东西", "X以前发生的东西"],
  literal: "the things behind X / the things that happened before X",
  fit: "plain",
  topics: ["front-and-back"],
  isA: ["idea"],
  proposed: true,
});
