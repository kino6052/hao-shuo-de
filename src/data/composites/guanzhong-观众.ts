import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1406,
  phase: 3,
  zh: "观众",
  py: "guānzhòng",
  en: "audience",
  ru: "зрители",
  pos: "noun",
  hsd: ["{{word:kan4}}-{{word:de}} {{word:ren2}}"],
  tts: ["看的人"],
  literal: "the people watching",
  fit: "plain",
  topics: ["acting-and-roles"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:kan4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "看的人很多。",
      en: "The audience is large.",
      ru: "Зрителей много.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:kan4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我是看的人。",
      en: "I am in the audience.",
      ru: "Я зритель.",
    },
  ],
});
