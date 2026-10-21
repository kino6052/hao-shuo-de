import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1493,
  phase: 3,
  zh: "底",
  py: "dǐ",
  en: "bottom",
  ru: "дно, низ",
  pos: "noun",
  hsd: ["{{word:zui4}} {{word:xia4}}-{{word:mian4}}"],
  tts: ["最下面"],
  literal: "the lowest side",
  fit: "plain",
  topics: ["near-and-far"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:zui4}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "水在最下面。",
      en: "The water is at the bottom.",
      ru: "Вода на дне.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:zui4}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "我的书在最下面。",
      en: "My book is at the bottom.",
      ru: "Моя книга внизу.",
    },
  ],
});
