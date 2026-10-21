import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 902,
  phase: 2,
  zh: "邻居",
  py: "línjū",
  en: "neighbor",
  ru: "сосед",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:jia1}}-{{word:fu4jin4}}-{{word:de}} {{word:ren2}}"],
  tts: ["在家附近的人"],
  literal: "a person who is near home",
  fit: "plain",
  topics: ["friends-and-neighbours"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zai4}}-{{word:jia1}}-{{word:fu4jin4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是在家附近的人。",
      en: "He is my neighbor.",
      ru: "Он мой сосед.",
    },
    {
      pinyin: "{{Word:zai4}}-{{word:jia1}}-{{word:fu4jin4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "在家附近的人很好。",
      en: "My neighbor is nice.",
      ru: "Мой сосед хороший.",
    },
  ],
});
