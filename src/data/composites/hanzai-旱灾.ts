import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8916,
  phase: 4,
  zh: "旱灾",
  py: "hànzāi",
  en: "drought (as a disaster)",
  ru: "засуха (бедствие)",
  pos: "noun",
  hsd: [
    "{{word:tian1}}-{{word:shang4}} {{word:hen3}} {{word:chang2}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:xia4}} {{word:shui3}}-{{word:de}} {{word:huai4}} {{word:dong1}}-{{light:xi1}}",
    "{{word:mei2}}-{{word:you3}} {{word:shui3}}-{{word:de}} {{word:da4}} {{word:huai4}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["天上很长时间不下水的坏东西", "没有水的大坏东西"],
  literal: "the bad thing when for a long time no water comes down from the sky / a big bad thing with no water",
  fit: "plain",
  topics: ["weather-and-clouds"],
  isA: ["event"],
  proposed: true,
});
