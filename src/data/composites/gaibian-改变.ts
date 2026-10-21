import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 661,
  phase: 2,
  zh: "改变",
  py: "gǎibiàn",
  en: "change",
  ru: "изменить",
  pos: "verb",
  hsd: ["{{word:bian4}}", "{{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["变", "做的不一样"],
  literal: "make it different",
  fit: "natural",
  topics: ["changing"],
  isA: ["becoming"],
  note: "Lesson {{lesson:roles-of-a-word}}: verb-de + how.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}} {{word:le}}.",
      hanzi: "他做的不一样了。",
      en: "He's changed how he does it.",
      ru: "Он стал делать иначе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:de}} {{word:bu4}} {{word:yi1}}-{{word:yang4}} {{word:le}}.",
      hanzi: "你做的不一样了。",
      en: "You've changed how you do it.",
      ru: "Ты стал делать иначе.",
    },
  ],
});
