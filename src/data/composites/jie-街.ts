import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 465,
  phase: 1,
  zh: "街",
  py: "jiē",
  en: "street",
  ru: "улица",
  pos: "noun",
  hsd: ["{{word:lu4}}"],
  tts: ["路"],
  literal: "road",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:zai4}} {{word:zhe4}}-{{light:ge4}} {{word:lu4}}-{{word:shang4}}.",
      hanzi: "我家在这个路上。",
      en: "My home is on this street.",
      ru: "Мой дом на этой улице.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:wan2r}}.",
      hanzi: "孩子们在路上玩儿。",
      en: "The kids are playing in the street.",
      ru: "Дети играют на улице.",
    },
  ],
});
