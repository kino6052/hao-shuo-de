import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7058,
  phase: 4,
  zh: "大巴",
  py: "dàbā",
  en: "large bus; coach",
  ru: "большой автобус",
  pos: "noun",
  hsd: [
    "{{word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:da4}} {{word:che1}}",
    "{{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:da4}} {{word:che1}}",
  ],
  tts: ["很多人的大车", "很多人在里面的大车"],
  literal: "a big vehicle for very many people / a big vehicle with very many people in it",
  fit: "plain",
  topics: ["vehicles"],
  isA: ["vehicle"],
  proposed: true,
});
