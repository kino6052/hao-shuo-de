import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 408,
  phase: 1,
  zh: "打算",
  py: "dǎsuàn",
  en: "plan, intend",
  ru: "собираться",
  pos: "verb",
  hsd: ["{{word:da3}}-{{word:suan4}}", "{{word:yao4}}"],
  tts: ["打算", "要"],
  literal: "hit-calculate",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:da3}}-{{word:suan4}} {{word:zuo4}} {{word:shen2me}}?",
      hanzi: "你打算做什么？",
      en: "What do you plan to do?",
      ru: "Что ты собираешься делать?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:da3}}-{{word:suan4}} {{word:ming2}}-{{word:nian2}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "我打算明年去中国。",
      en: "I plan to go to China next year.",
      ru: "Я собираюсь поехать в Китай в следующем году.",
    },
  ],
});
