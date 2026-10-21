import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9365,
  phase: 4,
  zh: "场次",
  py: "chǎngcì",
  en: "showing; session; number of showings",
  ru: "сеанс; количество сеансов",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:yi1}}-{{word:ci4}}",
    "{{word:yi1}}-{{word:ci4}} {{word:gei3}} {{word:ren2}} {{word:kan4}}",
  ],
  tts: ["给人看的一次", "一次给人看"],
  literal: "one time of showing to people / one time given to people to look at",
  fit: "plain",
  topics: ["acting-and-roles"],
  isA: ["event"],
  proposed: true,
});
