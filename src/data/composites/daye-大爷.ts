import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7234,
  phase: 4,
  zh: "大爷",
  py: "dàye",
  en: "uncle; older man",
  ru: "дедушка; пожилой мужчина",
  pos: "noun",
  hsd: [
    "{{word:bi3}} {{word:wo3}} {{word:ba4ba}} {{word:da4}}-{{word:de}} {{word:nan2}}-{{word:ren2}}",
    "{{word:lao3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}",
  ],
  tts: ["比我爸爸大的男人", "老的男人"],
  literal: "a man older than my dad / an old man",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
