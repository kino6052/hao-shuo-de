import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1194,
  phase: 3,
  zh: "视频",
  py: "shìpín",
  en: "video",
  ru: "видео",
  pos: "noun",
  hsd: ["{{word:dong4}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["动的看的东西"],
  literal: "a moving thing to watch",
  fit: "plain",
  topics: ["films-and-media"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:dong4}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是动的看的东西。",
      en: "This is a video.",
      ru: "Это видео.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:dong4}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有动的看的东西。",
      en: "I have a video.",
      ru: "У меня есть видео.",
    },
  ],
});
