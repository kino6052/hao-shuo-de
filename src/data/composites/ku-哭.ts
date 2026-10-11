import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 511,
  phase: 2,
  zh: "哭",
  py: "kū",
  en: "cry",
  ru: "плакать",
  pos: "verb",
  hsd: ["{{word:yan3jing}} {{word:chu1}} {{word:shui3}}"],
  tts: ["眼睛出水"],
  literal: "water comes out of the eyes",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yan3jing}} {{word:chu1}} {{word:shui3}} {{word:le}}.",
      hanzi: "他的眼睛出水了。",
      en: "He's crying.",
      ru: "Он плачет.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:yan3jing}} {{word:chu1}} {{word:shui3}} {{word:le}}, {{word:wei4}}-{{word:shen2me}}?",
      hanzi: "你的眼睛出水了，为什么？",
      en: "You're crying. Why?",
      ru: "Ты плачешь. Почему?",
    },
  ],
});
