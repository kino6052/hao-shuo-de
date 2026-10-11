import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 590,
  phase: 2,
  zh: "文化",
  py: "wénhuà",
  en: "culture",
  ru: "культура",
  pos: "noun",
  hsd: ["{{word:sheng1}}-{{word:huo2}}-{{word:de}} {{word:fang1}}-{{word:fa3}}"],
  tts: ["生活的方法"],
  literal: "the way of life",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:zhe4}}-{{word:xie1}} {{word:ren2}} {{word:sheng1}}-{{word:huo2}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "这个是这些人生活的方法。",
      en: "This is these people's culture.",
      ru: "Это культура этих людей.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{word:li3}} {{word:ren2}} {{word:sheng1}}-{{word:huo2}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我爱这里人生活的方法。",
      en: "I love the culture of the people here.",
      ru: "Я люблю культуру здешних людей.",
    },
  ],
});
