import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1348,
  phase: 3,
  zh: "教师",
  py: "jiàoshī",
  en: "teacher",
  ru: "учитель",
  pos: "noun",
  hsd: ["{{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}"],
  tts: ["帮人学的人"],
  literal: "the one who helps people learn",
  fit: "plain",
  topics: ["classroom"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是帮人学的人。",
      en: "He is a teacher.",
      ru: "Он учитель.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爸爸是帮人学的人。",
      en: "My father is a teacher.",
      ru: "Мой папа учитель.",
    },
  ],
});
