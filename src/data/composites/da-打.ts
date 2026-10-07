import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 87,
  phase: 1,
  zh: "打",
  py: "dǎ",
  en: "hit",
  ru: "бить",
  pos: "verb",
  hsd: ["{{word:da3}}"],
  tts: ["打"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:da3}} {{word:ren2}}!",
      hanzi: "不要打人！",
      en: "Don't hit people!",
      ru: "Не бей людей!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:da3}} {{word:hua4}}-{{word:ji1}} {{word:gei3}} {{word:ni3}}.",
      hanzi: "我打话机给你。",
      en: "I'll call you.",
      ru: "Я тебе позвоню.",
    },
  ],
});
