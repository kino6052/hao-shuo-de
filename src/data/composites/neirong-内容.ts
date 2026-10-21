import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1039,
  phase: 3,
  zh: "内容",
  py: "nèiróng",
  en: "content",
  ru: "содержание",
  pos: "noun",
  hsd: [
    "{{word:li3}}-{{word:mian4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:kan4}}-{{word:de}}",
    "{{word:shuo1}}-{{word:de}}",
  ],
  tts: ["里面的东西", "看的", "说的"],
  literal: "what is inside / what you watch / what is said",
  fit: "plain",
  topics: ["writing"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看里面的东西。",
      en: "I look at the contents.",
      ru: "Я смотрю на содержимое.",
    },
    {
      pinyin: "{{Word:li3}}-{{word:mian4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "里面的东西很好。",
      en: "The content is good.",
      ru: "Содержание хорошее.",
    },
  ],
});
