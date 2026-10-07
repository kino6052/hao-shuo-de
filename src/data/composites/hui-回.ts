import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 157,
  phase: 1,
  zh: "回",
  py: "huí",
  en: "return",
  ru: "возвращаться",
  pos: "verb",
  hsd: ["{{word:hui2}}"],
  tts: ["回"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}: huí jiā, huí-lái.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shen2me}} {{word:shi2}}-{{light:hou4}} {{word:hui2}}-{{word:lai2}}?",
      hanzi: "你什么时候回来？",
      en: "When are you coming back?",
      ru: "Когда ты вернёшься?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hui2}} \"Zhōngguó\" {{word:le}}.",
      hanzi: "他回中国了。",
      en: "He went back to China.",
      ru: "Он вернулся в Китай.",
    },
  ],
});
