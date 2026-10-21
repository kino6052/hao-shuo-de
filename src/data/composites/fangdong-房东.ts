import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6885,
  phase: 4,
  zh: "房东",
  py: "fángdōng",
  en: "landlord; landlady",
  ru: "хозяин жилья, арендодатель",
  pos: "noun",
  hsd: [
    "{{word:fang2}}-{{word:dong1}}",
    "{{word:ba3}} {{word:fang2}}-{{word:zi}} {{word:gei3}} {{word:ren2}} {{word:yong4}}, {{word:de2}} {{word:jin1}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["房东", "把房子给人用，得金的人"],
  literal: "the person who gives a house to people to use and gets money",
  fit: "plain",
  topics: ["housing"],
  isA: ["social-role"],
  proposed: true,
});
