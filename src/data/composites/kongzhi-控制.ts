import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1105,
  phase: 3,
  zh: "控制",
  py: "kòngzhì",
  en: "control",
  ru: "контролировать",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:zuo4}} Y"],
  tts: ["把X做Y"],
  literal: "make X do Y",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:che1}} {{word:zuo4}} {{word:dong4}}.",
      hanzi: "我把车做动。",
      en: "I control the car.",
      ru: "Я управляю машиной.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:wo3}}-{{word:de}} {{word:che1}} {{word:zuo4}} {{word:dong4}}.",
      hanzi: "他把我的车做动。",
      en: "He controls my car.",
      ru: "Он управляет моей машиной.",
    },
  ],
});
