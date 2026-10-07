import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 51,
  phase: 1,
  zh: "学生",
  py: "xuéshēng",
  en: "student",
  ru: "ученик",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:sheng1}}", "{{word:xue2}}-{{word:de}} {{word:ren2}}"],
  tts: ["学生", "学的人"],
  literal: "learn-born / one who learns",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:xue2}}-{{word:sheng1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这些学生很好。",
      en: "These students are good.",
      ru: "Эти студенты хорошие.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}} {{word:ma}}?",
      hanzi: "你是学生吗？",
      en: "Are you a student?",
      ru: "Ты студент?",
    },
  ],
});
