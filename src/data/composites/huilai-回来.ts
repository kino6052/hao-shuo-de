import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 377,
  phase: 1,
  zh: "回来",
  py: "huílái",
  en: "come back",
  ru: "возвращаться",
  pos: "verb",
  hsd: ["{{word:hui2}}-{{word:lai2}}"],
  tts: ["回来"],
  literal: "back-come",
  fit: "natural",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hui2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他回来了。",
      en: "He's back.",
      ru: "Он вернулся.",
    },
    {
      pinyin: "{{Word:kuai4}} {{word:hui2}}-{{word:lai2}}!",
      hanzi: "快回来！",
      en: "Come back quickly!",
      ru: "Возвращайся скорей!",
    },
  ],
});
