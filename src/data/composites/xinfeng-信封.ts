import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7201,
  phase: 4,
  zh: "信封",
  py: "xìnfēng",
  en: "envelope",
  ru: "конверт",
  pos: "noun",
  hsd: [
    "{{word:fang4}}-{{word:xie3}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:bao1}}",
    "{{word:fang4}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:bao1}}",
  ],
  tts: ["放写的东西的小的包", "放给远的人写的东西的包"],
  literal: "a small container for written things / a container for what is written for a far-away person",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["paper-thing"],
  proposed: true,
});
