import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 635,
  phase: 2,
  zh: "大学生",
  py: "dàxuéshēng",
  en: "university student",
  ru: "студент",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:xue2}}-{{word:sheng1}}",
    "{{word:da4}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["大学生", "大的学的人"],
  literal: "big-learning student / a big learner",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:da4}}-{{word:xue2}}-{{word:sheng1}}.",
      hanzi: "他是大学生。",
      en: "He is a university student.",
      ru: "Он студент.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shi4}} {{word:da4}}-{{word:xue2}}-{{word:sheng1}} {{word:ma}}?",
      hanzi: "你是大学生吗？",
      en: "Are you a university student?",
      ru: "Ты студент?",
    },
  ],
});
