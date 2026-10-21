import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7233,
  phase: 4,
  zh: "大妈",
  py: "dàmā",
  en: "aunt; older woman",
  ru: "тётушка; пожилая женщина",
  pos: "noun",
  hsd: [
    "{{word:bi3}} {{word:wo3}} {{word:ma1ma}} {{word:da4}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
    "{{word:lao3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
  ],
  tts: ["比我妈妈大的女人", "老的女人"],
  literal: "a woman older than my mom / an old woman",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["person-by-age-or-sex"],
  proposed: true,
});
