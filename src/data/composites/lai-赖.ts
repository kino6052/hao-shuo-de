import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8502,
  phase: 4,
  zh: "赖",
  py: "lài",
  en: "bad; poor; blame (falsely); rely on",
  ru: "плохой; сваливать вину; полагаться",
  pos: "adjective",
  hsd: [
    "{{word:bu4}} {{word:hao3}}",
    "{{word:shuo1}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} X {{word:zuo4}}-{{word:de}}",
  ],
  tts: ["不好", "说不好的东西是X做的"],
  literal: "not good / say the bad thing was done by X",
  fit: "plain",
  topics: ["good-bad-and-okay"],
  isA: ["value-quality"],
  proposed: true,
});
