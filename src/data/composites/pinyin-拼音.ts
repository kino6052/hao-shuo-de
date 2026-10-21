import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1505,
  phase: 3,
  zh: "拼音",
  py: "pīnyīn",
  en: "pinyin",
  ru: "пиньинь",
  pos: "verb",
  hsd: [
    "{{word:xie3}}-\"Zhōngguó\"-{{word:hua4}} {{word:sheng1yin1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}",
  ],
  tts: ["写中国话声音的方法"],
  literal: "the way to write the sounds of Chinese",
  fit: "plain",
  topics: ["words-and-characters"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-\"Zhōngguó\"-{{word:hua4}} {{word:sheng1yin1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "这是写中国话声音的方法。",
      en: "This is pinyin.",
      ru: "Это пиньинь.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:xie3}}-\"Zhōngguó\"-{{word:hua4}} {{word:sheng1yin1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我学写中国话声音的方法。",
      en: "I learn pinyin.",
      ru: "Я учу пиньинь.",
    },
  ],
});
