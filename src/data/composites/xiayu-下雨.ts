import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 494,
  phase: 1,
  zh: "下雨",
  py: "xià yǔ",
  en: "rain (verb)",
  ru: "идёт дождь",
  pos: "verb",
  hsd: ["{{word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}}"],
  tts: ["天上下水"],
  literal: "the sky drops water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:xia4}} {{word:shui3}} {{word:le}}.",
      hanzi: "天上下水了。",
      en: "It's raining.",
      ru: "Идёт дождь.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:tian1}}-{{word:shang4}} {{word:hui4}} {{word:xia4}} {{word:shui3}}.",
      hanzi: "明天天上会下水。",
      en: "It'll rain tomorrow.",
      ru: "Завтра будет дождь.",
    },
  ],
});
