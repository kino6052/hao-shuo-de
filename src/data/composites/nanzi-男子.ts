import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6450,
  phase: 4,
  zh: "男子",
  py: "nánzǐ",
  en: "man",
  ru: "мужчина",
  pos: "noun",
  hsd: [
    "{{word:nan2}}-{{word:ren2}}",
    "{{word:bu4}} {{word:shi4}} {{word:nv3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["男人", "不是女的人"],
  fit: "natural",
  topics: ["men-and-women"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
