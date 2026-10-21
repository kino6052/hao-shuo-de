import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6483,
  phase: 4,
  zh: "商人",
  py: "shāngrén",
  en: "merchant; businessman",
  ru: "торговец; бизнесмен",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:dong1}}-{{light:xi1}} {{word:de2}}-{{word:dao4}} {{word:jin1}}-{{word:de}} {{word:ren2}}",
    "{{word:mai3}} {{word:dong1}}-{{light:xi1}} {{word:he2}} {{word:gei3}} {{word:dong1}}-{{light:xi1}} {{word:de2}} {{word:jin1}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["给东西得到金的人", "买东西和给东西得金的人"],
  literal: "a person who gives things and gets money",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
