import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6823,
  phase: 4,
  zh: "胃",
  py: "wèi",
  en: "stomach",
  ru: "желудок",
  pos: "noun",
  hsd: [
    "{{word:du4zi}}-{{word:li3}} {{word:fang4}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:du4zi}}-{{word:li3}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:dao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["肚子里放吃的东西的地方", "肚子里吃的东西到的地方"],
  literal: "the place in the belly where food is put / the place in the belly where the eaten things arrive",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["body-part"],
  proposed: true,
});
