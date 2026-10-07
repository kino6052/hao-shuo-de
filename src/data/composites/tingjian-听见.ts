import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 375,
  phase: 1,
  zh: "听见",
  py: "tīngjiàn",
  en: "hear",
  ru: "слышать",
  pos: "verb",
  hsd: ["{{word:ting1}}-{{word:jian4}}", "{{word:ting1}}-{{word:dao4}}"],
  tts: ["听见", "听到"],
  literal: "listen-arrive",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:jian4}} {{word:le}} {{word:ma}}?",
      hanzi: "你听见了吗？",
      en: "Did you hear that?",
      ru: "Ты слышал?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:jian4}} {{word:yi1}}-{{light:ge4}} {{word:sheng1yin1}}.",
      hanzi: "我听见一个声音。",
      en: "I heard a sound.",
      ru: "Я услышал звук.",
    },
  ],
});
