import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 467,
  phase: 1,
  zh: "记得",
  py: "jìde",
  en: "remember",
  ru: "помнить",
  pos: "verb",
  hsd: ["{{word:hai2}} {{word:zhi1dao4}}"],
  tts: ["还知道"],
  literal: "still know",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hai2}} {{word:zhi1dao4}} {{word:ta1}}-{{word:de}} {{word:ming2}}-{{light:zi4}} {{word:ma}}?",
      hanzi: "你还知道他的名字吗？",
      en: "Do you remember his name?",
      ru: "Ты помнишь, как его зовут?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hai2}} {{word:zhi1dao4}} {{word:lu4}}.",
      hanzi: "我还知道路。",
      en: "I remember the way.",
      ru: "Я помню дорогу.",
    },
  ],
});
