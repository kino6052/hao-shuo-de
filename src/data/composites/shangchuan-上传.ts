import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1226,
  phase: 3,
  zh: "上传",
  py: "shàngchuán",
  en: "upload",
  ru: "загружать (в сеть)",
  pos: "verb",
  hsd: ["{{word:fang4}}-{{word:dao4}} {{word:wang3}}-{{word:shang4}}"],
  tts: ["放到网上"],
  literal: "put it on the net",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:fang4}}-{{word:dao4}} {{word:wang3}}-{{word:shang4}} {{word:le}}.",
      hanzi: "我放到网上了。",
      en: "I uploaded it.",
      ru: "Я загрузил это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:shu1}} {{word:fang4}}-{{word:dao4}} {{word:wang3}}-{{word:shang4}}.",
      hanzi: "他把书放到网上。",
      en: "He uploaded the book.",
      ru: "Он загрузил книгу.",
    },
  ],
});
