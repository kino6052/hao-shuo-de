import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 729,
  phase: 2,
  zh: "中学生",
  py: "zhōngxuéshēng",
  en: "middle-school student",
  ru: "школьник",
  pos: "noun",
  hsd: [
    "{{word:zhong1}}-{{word:xue2}}-{{word:sheng1}}",
    "{{word:bu4}} {{word:da4}} {{word:bu4}} {{word:xiao3}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["中学生", "不大不小的学的人"],
  literal: "middle-learning student / a not-big, not-small learner",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["teachers-and-students"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zhong1}}-{{word:xue2}}-{{word:sheng1}}.",
      hanzi: "他是中学生。",
      en: "He is a middle-school student.",
      ru: "Он школьник.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:shi4}} {{word:zhong1}}-{{word:xue2}}-{{word:sheng1}}.",
      hanzi: "我的孩子是中学生。",
      en: "My child is a middle-school student.",
      ru: "Мой ребёнок — школьник.",
    },
  ],
});
