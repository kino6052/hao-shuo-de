import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6845,
  phase: 4,
  zh: "转告",
  py: "zhuǎngào",
  en: "pass on (a message); relay",
  ru: "передавать (слова другого)",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:shuo1}}-{{word:de}} {{word:hua4}} {{word:shuo1}} {{word:gei3}} Y {{word:ting1}}",
    "{{word:ti4}} X {{word:dui4}} Y {{word:shuo1}}",
  ],
  tts: ["把X说的话说给Y听", "替X对Y说"],
  literal: "tell Y the words X said / say to Y in X's place",
  fit: "plain",
  topics: ["introducing-and-passing-on"],
  isA: ["speaking-action"],
  proposed: true,
});
