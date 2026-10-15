import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 467,
  phase: 1,
  zh: "记得",
  py: "jìde",
  en: "remember",
  ru: "помнить",
  pos: "verb",
  hsd: ["{{word:ji4}}-{{light:de2}}", "{{word:hai2}} {{word:zhi1dao4}}"],
  tts: ["记得", "还知道"],
  literal: "remember-get",
  fit: "plain",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ji4}}-{{light:de2}} {{word:ta1}}-{{word:de}} {{word:ming2}}-{{light:zi4}} {{word:ma}}?",
      hanzi: "你记得他的名字吗？",
      en: "Do you remember his name?",
      ru: "Ты помнишь, как его зовут?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ji4}}-{{light:de2}} {{word:lu4}}.",
      hanzi: "我记得路。",
      en: "I remember the way.",
      ru: "Я помню дорогу.",
    },
  ],
});
