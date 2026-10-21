import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7534,
  phase: 4,
  zh: "不幸",
  py: "búxìng",
  en: "unfortunate; misfortune",
  ru: "несчастливый; несчастье",
  pos: "adjective",
  hsd: [
    "{{word:fa1}}-{{word:sheng1}} {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:dui4}} X {{word:bu4}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:fa1}}-{{word:sheng1}} {{word:le}}",
  ],
  tts: ["发生不好的东西", "对X不好的东西发生了"],
  literal: "bad things happen / things that are not good for X have happened",
  fit: "plain",
  topics: ["how-good"],
  isA: ["value-quality"],
  proposed: true,
});
