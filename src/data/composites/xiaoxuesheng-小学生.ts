import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 750,
  phase: 2,
  zh: "小学生",
  py: "xiǎoxuéshēng",
  en: "primary-school pupil",
  ru: "школьник",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:xue2}}-{{word:sheng1}}",
    "{{word:xiao3}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["小学生", "小的学的人"],
  literal: "small-learning student / a small learner",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:xiao3}}-{{word:xue2}}-{{word:sheng1}}.",
      hanzi: "他是小学生。",
      en: "He is a primary-school pupil.",
      ru: "Он младший школьник.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:shi4}} {{word:xiao3}}-{{word:xue2}}-{{word:sheng1}}.",
      hanzi: "我的孩子是小学生。",
      en: "My child is a primary-school pupil.",
      ru: "Мой ребёнок — младший школьник.",
    },
  ],
});
