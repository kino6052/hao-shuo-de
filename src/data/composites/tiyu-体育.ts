import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1249,
  phase: 3,
  zh: "体育",
  py: "tǐyù",
  en: "sports, PE",
  ru: "физкультура, спорт",
  pos: "noun",
  hsd: ["{{word:dong4}} {{word:shen1ti3}}"],
  tts: ["动身体"],
  literal: "move the body",
  fit: "plain",
  topics: ["sports"],
  isA: ["activity-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:dong4}} {{word:shen1ti3}}.",
      hanzi: "我爱动身体。",
      en: "I love sports.",
      ru: "Я люблю спорт.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}}-{{word:men}} {{word:dong4}} {{word:shen1ti3}}.",
      hanzi: "今天我们动身体。",
      en: "Today we have PE.",
      ru: "Сегодня у нас физкультура.",
    },
  ],
});
