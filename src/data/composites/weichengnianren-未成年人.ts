import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8840,
  phase: 4,
  zh: "未成年人",
  py: "wèichéngniánrén",
  en: "minor; underage person; juvenile",
  ru: "несовершеннолетний",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:dao4}} {{word:shi2}}-{{word:ba1}} {{word:nian2}}-{{word:de}} {{word:ren2}}",
    "{{word:hai2}} {{word:bu4}} {{word:shi4}} {{word:da4}}-{{word:ren2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["不到十八年的人", "还不是大人的人"],
  literal: "a person not yet eighteen years / a person who is not yet an adult",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
