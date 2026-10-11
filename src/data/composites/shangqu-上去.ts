import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 793,
  phase: 2,
  zh: "上去",
  py: "shàngqù",
  en: "go up",
  ru: "подняться",
  pos: "verb",
  hsd: ["{{word:shang4}}-{{word:qu4}}"],
  tts: ["上去"],
  fit: "natural",
  note: "Lesson {{lesson:moving}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shang4}}-{{word:qu4}}.",
      hanzi: "我上去。",
      en: "I'm going up.",
      ru: "Я поднимаюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他上去了。",
      en: "He went up.",
      ru: "Он поднялся.",
    },
  ],
});
