import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 138,
  phase: 1,
  zh: "他们",
  py: "tāmen",
  en: "they",
  ru: "они",
  pos: "pronoun",
  hsd: ["{{word:ta1}}-{{word:men}}"],
  tts: ["他们"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "他们是学生。",
      en: "They're students.",
      ru: "Они студенты.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:qu4}} {{word:na3}}-{{word:li3}} {{word:le}}?",
      hanzi: "他们去哪里了？",
      en: "Where did they go?",
      ru: "Куда они пошли?",
    },
  ],
});
