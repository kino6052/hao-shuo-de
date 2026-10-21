import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7341,
  phase: 4,
  zh: "案例",
  py: "ànlì",
  en: "case; example (from real life)",
  ru: "случай, пример (из практики)",
  pos: "noun",
  hsd: [
    "{{word:zhen1}}-{{word:de}} {{word:fa1}}-{{word:sheng1}}-{{word:guo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:rang4}} {{word:ren2}} {{word:xue2}}-{{word:de}} {{word:zhen1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["真的发生过的东西", "让人学的真的东西"],
  literal: "a real thing that happened / a real thing that lets people learn",
  fit: "plain",
  topics: ["school-subjects-and-courses"],
  isA: ["event"],
  proposed: true,
});
