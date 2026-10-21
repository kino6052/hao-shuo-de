import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6443,
  phase: 4,
  zh: "秘密",
  py: "mìmì",
  en: "secret",
  ru: "секрет, тайный",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:rang4}} {{word:bie2}}-{{word:ren2}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:zhi3}} {{word:you3}} {{word:hen3}} {{word:shao3}}-{{word:de}} {{word:ren2}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["不让别人知道的东西", "只有很少的人知道的东西"],
  literal: "a thing you do not let other people know / a thing only very few people know",
  fit: "plain",
  topics: ["knowing-and-understanding"],
  isA: ["idea"],
  proposed: true,
});
