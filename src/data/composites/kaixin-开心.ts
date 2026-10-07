import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 251,
  phase: 1,
  zh: "开心",
  py: "kāixīn",
  en: "happy",
  ru: "весёлый",
  pos: "adjective",
  hsd: ["{{word:kai1}}-{{word:xin1}}"],
  tts: ["开心"],
  literal: "open heart",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kai1}}-{{word:xin1}} {{word:ma}}?",
      hanzi: "你开心吗？",
      en: "Are you happy?",
      ru: "Ты рад?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhen1}} {{word:rang4}} {{word:ren2}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "这个真让人开心。",
      en: "This really makes people happy.",
      ru: "Это правда радует.",
    },
  ],
});
