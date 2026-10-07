import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 210,
  phase: 1,
  zh: "车",
  py: "chē",
  en: "vehicle",
  ru: "машина",
  pos: "noun",
  hsd: ["{{word:che1}}"],
  tts: ["车"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:che1}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "我的车在外面。",
      en: "My car is outside.",
      ru: "Моя машина на улице.",
    },
    {
      pinyin: "{{Word:che1}} {{word:lai2}} {{word:le}}.",
      hanzi: "车来了。",
      en: "The car's here.",
      ru: "Машина приехала.",
    },
  ],
});
