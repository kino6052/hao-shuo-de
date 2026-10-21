import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6323,
  phase: 4,
  zh: "保险",
  py: "bǎoxiǎn",
  en: "insurance; safe",
  ru: "страховка; надёжный",
  pos: "noun",
  hsd: [
    "{{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:fa1}}-{{word:sheng1}}-{{word:hou4}} {{word:gei3}} {{word:ni3}} {{word:jin1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:huai4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hui4}} {{word:fa1}}-{{word:sheng1}}",
  ],
  tts: ["坏的东西发生后给你金的东西", "坏的东西不会发生"],
  literal: "a thing that gives you money after a bad thing happens",
  fit: "plain",
  topics: ["stocks-and-investing"],
  isA: ["abstract-thing"],
  proposed: true,
});
