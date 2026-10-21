import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6725,
  phase: 4,
  zh: "青年",
  py: "qīngnián",
  en: "young person; youth",
  ru: "молодой человек, молодёжь",
  pos: "noun",
  hsd: [
    "{{word:bu4}}-{{word:lao3}}-{{word:de}} {{word:ren2}}",
    "{{word:bu4}} {{word:shi4}} {{word:hai2}}-{{word:zi}}, {{word:hai2}} {{word:bu4}} {{word:lao3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["不老的人", "不是孩子，还不老的人"],
  literal: "a person who is not old / not a child, still not old",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
