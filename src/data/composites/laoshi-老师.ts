import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 201,
  phase: 1,
  zh: "老师",
  py: "lǎoshī",
  en: "teacher",
  ru: "учитель",
  pos: "noun",
  hsd: ["{{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}"],
  tts: ["帮人学的人"],
  literal: "the one who helps people learn",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "她是帮人学的人。",
      en: "She's a teacher.",
      ru: "Она учительница.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我们的帮人学的人很好。",
      en: "Our teacher is nice.",
      ru: "Наш учитель хороший.",
    },
  ],
});
