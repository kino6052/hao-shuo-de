import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1511,
  phase: 3,
  zh: "景色",
  py: "jǐngsè",
  en: "scenery",
  ru: "пейзаж",
  pos: "noun",
  hsd: ["{{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:wai4}}-{{word:mian4}}"],
  tts: ["好看的外面"],
  literal: "the beautiful outdoors",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "我爱看好看的外面。",
      en: "I love looking at the scenery.",
      ru: "Я люблю смотреть на пейзажи.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "这里有好看的外面。",
      en: "There is beautiful scenery here.",
      ru: "Здесь красивые пейзажи.",
    },
  ],
});
