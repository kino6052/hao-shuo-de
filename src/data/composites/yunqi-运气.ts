import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 900,
  phase: 2,
  zh: "运气",
  py: "yùnqi",
  en: "luck",
  ru: "удача",
  pos: "noun",
  hsd: ["{{word:fa1}}-{{word:sheng1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["发生好的东西"],
  literal: "good things happening",
  fit: "plain",
  topics: ["events-and-luck"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:fa1}}-{{word:sheng1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "今天发生好的东西。",
      en: "Today I'm lucky.",
      ru: "Сегодня мне везёт.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:fa1}}-{{word:sheng1}} {{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我发生好的东西。",
      en: "I'm lucky.",
      ru: "Мне везёт.",
    },
  ],
});
