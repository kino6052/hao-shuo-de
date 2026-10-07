import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 364,
  phase: 1,
  zh: "去年",
  py: "qùnián",
  en: "last year",
  ru: "в прошлом году",
  pos: "noun",
  hsd: ["{{word:qu4}}-{{word:nian2}}", "{{word:qian2}} {{word:shi2}}-{{word:er4}}-ge {{word:yue4}}"],
  tts: ["去年", "前十二个月"],
  literal: "go-year / the twelve months before",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:qu4}}-{{word:nian2}} {{word:wo3}} {{word:qu4}} {{word:le}} \"Zhōngguó\".",
      hanzi: "去年我去了中国。",
      en: "Last year I went to China.",
      ru: "В прошлом году я ездил в Китай.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qu4}}-{{word:nian2}} {{word:kai1shi3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他去年开始工作。",
      en: "He started working last year.",
      ru: "Он начал работать в прошлом году.",
    },
  ],
});
