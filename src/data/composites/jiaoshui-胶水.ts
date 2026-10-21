import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8055,
  phase: 4,
  zh: "胶水",
  py: "jiāoshuǐ",
  en: "glue",
  ru: "клей",
  pos: "noun",
  hsd: [
    "{{word:rang4}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:fen1}}-{{word:kai1}}-{{word:de}} {{word:shui3}}",
    "{{word:rang4}} {{word:liang3}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:bu4}} {{word:dong4}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["让东西不分开的水", "让两个东西在一起不动的水"],
  literal: "water that keeps things from coming apart / water that keeps two things together and not moving",
  fit: "plain",
  topics: ["repairs"],
  isA: ["liquid-or-gas"],
  proposed: true,
});
