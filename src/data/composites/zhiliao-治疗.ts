import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1133,
  phase: 3,
  zh: "治疗",
  py: "zhìliáo",
  en: "treat (medically)",
  ru: "лечить",
  pos: "verb",
  hsd: ["{{word:ba3}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}}"],
  tts: ["把身体做好"],
  literal: "make the body good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:wo3}} {{word:ba3}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "他帮我把身体做好。",
      en: "He treats me.",
      ru: "Он лечит меня.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我把身体做好了。",
      en: "I treated the body.",
      ru: "Я вылечил тело.",
    },
  ],
});
