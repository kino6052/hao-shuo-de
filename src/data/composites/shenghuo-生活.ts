import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 323,
  phase: 1,
  zh: "生活",
  py: "shēnghuó",
  en: "life; live",
  ru: "жизнь; жить",
  pos: "noun",
  hsd: ["{{word:sheng1}}-{{word:huo2}}", "{{word:huo2}}"],
  tts: ["生活", "活"],
  literal: "be born, live",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:sheng1}}-{{word:huo2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的生活很好。",
      en: "My life is good.",
      ru: "У меня хорошая жизнь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} \"Zhōngguó\" {{word:sheng1}}-{{word:huo2}}.",
      hanzi: "他在中国生活。",
      en: "He lives in China.",
      ru: "Он живёт в Китае.",
    },
  ],
});
