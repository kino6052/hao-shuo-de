import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7259,
  phase: 4,
  zh: "小伙子",
  py: "xiǎohuǒzi",
  en: "young man; lad",
  ru: "парень, молодой человек",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:lao3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}",
    "{{word:bu4}} {{word:shi4}} {{word:hai2}}-{{word:zi}}, {{word:hai2}} {{word:bu4}} {{word:lao3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}",
  ],
  tts: ["不老的男人", "不是孩子，还不老的男人"],
  literal: "a man who is not old / a man who is not a child and still not old",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
