import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 125,
  phase: 1,
  zh: "电脑",
  py: "diànnǎo",
  en: "computer",
  ru: "компьютер",
  pos: "noun",
  hsd: ["{{word:suan4}}-{{word:de}} {{word:ji1}}"],
  tts: ["算的机"],
  literal: "the calculating machine",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:suan4}}-{{word:de}} {{word:ji1}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我用算的机工作。",
      en: "I work on a computer.",
      ru: "Я работаю на компьютере.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:suan4}}-{{word:de}} {{word:ji1}} {{word:huai4}} {{word:le}}.",
      hanzi: "他的算的机坏了。",
      en: "His computer broke.",
      ru: "Его компьютер сломался.",
    },
  ],
});
