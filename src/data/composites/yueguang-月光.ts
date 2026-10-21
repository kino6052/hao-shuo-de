import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8082,
  phase: 4,
  zh: "月光",
  py: "yuèguāng",
  en: "moonlight",
  ru: "лунный свет",
  pos: "noun",
  hsd: [
    "{{word:yue4}} {{word:fa1}}-{{word:chu1}}-{{word:de}} {{word:deng1}}",
    "{{word:yue4}} {{word:fa1}}-{{word:chu1}}-{{word:de}} {{word:ming2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["月发出的灯", "月发出的明的东西"],
  literal: "the lamp the moon gives out / the bright thing the moon gives out",
  fit: "plain",
  topics: ["sky-and-space"],
  isA: ["fire-or-light"],
  proposed: true,
});
