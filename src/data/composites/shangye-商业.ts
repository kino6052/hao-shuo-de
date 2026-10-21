import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1060,
  phase: 3,
  zh: "商业",
  py: "shāngyè",
  en: "commerce",
  ru: "торговля, бизнес",
  pos: "noun",
  hsd: [
    "{{word:mai3}} {{word:dong1}}-{{light:xi1}} {{word:he2}} {{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}",
  ],
  tts: ["买东西和给东西得金"],
  literal: "buying and selling",
  fit: "plain",
  topics: ["trade-and-the-market"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:mai3}} {{word:dong1}}-{{light:xi1}} {{word:he2}} {{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}.",
      hanzi: "我学买东西和给东西得金。",
      en: "I study commerce.",
      ru: "Я изучаю торговлю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:mai3}} {{word:dong1}}-{{light:xi1}} {{word:he2}} {{word:gei3}}-{{word:dong1}}-{{light:xi1}}-{{word:de2}}-{{word:jin1}}.",
      hanzi: "他做买东西和给东西得金。",
      en: "He works in commerce.",
      ru: "Он занимается торговлей.",
    },
  ],
});
