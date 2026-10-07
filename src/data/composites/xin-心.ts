import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 85,
  phase: 1,
  zh: "心",
  py: "xīn",
  en: "heart",
  ru: "сердце",
  pos: "noun",
  hsd: ["{{word:xin1}}"],
  tts: ["心"],
  fit: "word",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:xin1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的心很好。",
      en: "He has a good heart.",
      ru: "У него доброе сердце.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我很开心。",
      en: "I'm happy.",
      ru: "Я рад.",
    },
  ],
});
