import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 796,
  phase: 2,
  zh: "下来",
  py: "xiàlái",
  en: "come down",
  ru: "спуститься (сюда)",
  pos: "verb",
  hsd: ["{{word:xia4}}-{{word:lai2}}"],
  tts: ["下来"],
  fit: "natural",
  kinds: ["built"],
  topics: ["climbing-and-falling"],
  isA: ["moving-action"],
  note: "Lesson {{lesson:moving}}.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:xia4}}-{{word:lai2}}.",
      hanzi: "你下来。",
      en: "Come down.",
      ru: "Спускайся сюда.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xia4}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他下来了。",
      en: "He came down.",
      ru: "Он спустился сюда.",
    },
  ],
});
