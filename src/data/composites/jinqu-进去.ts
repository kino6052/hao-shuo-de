import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 901,
  phase: 2,
  zh: "进去",
  py: "jìnqù",
  en: "go in",
  ru: "войти",
  pos: "verb",
  hsd: ["{{word:jin4}}-{{word:qu4}}"],
  tts: ["进去"],
  fit: "natural",
  kinds: ["built"],
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jin4}}-{{word:qu4}}.",
      hanzi: "我进去。",
      en: "I go in.",
      ru: "Я захожу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:jin4}}-{{word:qu4}} {{word:ma}}?",
      hanzi: "你要进去吗？",
      en: "Do you want to go in?",
      ru: "Ты хочешь войти?",
    },
  ],
});
