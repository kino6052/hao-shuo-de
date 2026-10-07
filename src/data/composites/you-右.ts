import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 369,
  phase: 1,
  zh: "右",
  py: "yòu",
  en: "right (side)",
  ru: "правый",
  pos: "noun",
  hsd: ["{{word:you4}}-{{word:bian1}}"],
  tts: ["右边"],
  fit: "word",
  note: "Lesson {{lesson:where-it-is}}.",
  examples: [
    {
      pinyin: "{{Word:men2}} {{word:zai4}} {{word:you4}}-{{word:bian1}}.",
      hanzi: "门在右边。",
      en: "The door is on the right.",
      ru: "Дверь справа.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:you4}}-{{word:bian1}}.",
      hanzi: "你去右边。",
      en: "Go to the right.",
      ru: "Иди направо.",
    },
  ],
});
