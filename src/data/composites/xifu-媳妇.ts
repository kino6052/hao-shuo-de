import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8102,
  phase: 4,
  zh: "媳妇",
  py: "xífu",
  en: "wife; daughter-in-law",
  ru: "жена; невестка",
  pos: "noun",
  hsd: [
    "{{word:jia1}} {{word:li3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
    "X-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
  ],
  tts: ["家里的女人", "X的男孩子的女人"],
  literal: "the woman of the home / the woman of X's son",
  fit: "plain",
  topics: ["love-and-marriage"],
  isA: ["relative"],
  proposed: true,
});
