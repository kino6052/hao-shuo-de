import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 768,
  phase: 2,
  zh: "正在",
  py: "zhèngzài",
  en: "in the middle of (doing)",
  ru: "как раз (делать)",
  pos: "adverb",
  hsd: ["{{word:zai4}}"],
  tts: ["在"],
  fit: "word",
  topics: ["just-then-and-finally"],
  isA: ["adverb-word"],
  note: "Lesson {{lesson:when-it-happens}}: zài + verb.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:zuo4}}.",
      hanzi: "我在做。",
      en: "I'm doing it.",
      ru: "Я как раз делаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}}.",
      hanzi: "他在吃。",
      en: "He is eating.",
      ru: "Он как раз ест.",
    },
  ],
});
