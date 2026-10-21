import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8802,
  phase: 4,
  zh: "商标",
  py: "shāngbiāo",
  en: "trademark; brand mark",
  ru: "товарный знак",
  pos: "noun",
  hsd: [
    "{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shang4}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
    "{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shang4}}-{{word:de}} {{word:zi4}}, {{word:shuo1}} {{word:shi4}} {{word:shei2}} {{word:zuo4}}-{{word:de}}",
  ],
  tts: ["买的东西上的名字", "买的东西上的字，说是谁做的"],
  literal: "the name on a thing that is bought / the characters on a thing that is bought, saying who made it",
  fit: "plain",
  topics: ["shopping"],
  isA: ["idea"],
  proposed: true,
});
