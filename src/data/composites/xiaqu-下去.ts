import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 795,
  phase: 2,
  zh: "下去",
  py: "xiàqù",
  en: "go down; keep going",
  ru: "спуститься; продолжать",
  pos: "verb",
  hsd: ["{{word:xia4}}-{{word:qu4}}"],
  tts: ["下去"],
  fit: "natural",
  kinds: ["built"],
  topics: ["climbing-and-falling"],
  isA: ["moving-action"],
  note: "Lesson {{lesson:direction-and-result}}: shuō-xià-qù, keep talking.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xia4}}-{{word:qu4}}.",
      hanzi: "我下去。",
      en: "I'm going down.",
      ru: "Я спускаюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xia4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他下去了。",
      en: "He went down.",
      ru: "Он спустился.",
    },
  ],
});
