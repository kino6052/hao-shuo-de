import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1519,
  phase: 3,
  zh: "歌曲",
  py: "gēqǔ",
  en: "song",
  ru: "песня",
  pos: "noun",
  hsd: ["{{word:hao3}}-{{word:ting1}}-{{word:de}} {{word:sheng1yin1}}"],
  tts: ["好听的声音"],
  literal: "a nice-sounding sound",
  fit: "plain",
  topics: ["music"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hao3}}-{{word:ting1}}-{{word:de}} {{word:sheng1yin1}}.",
      hanzi: "我爱好听的声音。",
      en: "I love songs.",
      ru: "Я люблю песни.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hao3}}-{{word:ting1}}-{{word:de}} {{word:sheng1yin1}}.",
      hanzi: "这是好听的声音。",
      en: "This is a nice song.",
      ru: "Это красивая песня.",
    },
  ],
});
