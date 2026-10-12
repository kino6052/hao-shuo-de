import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1500,
  phase: 3,
  zh: "忽然",
  py: "hūrán",
  en: "suddenly",
  ru: "вдруг",
  pos: "adverb",
  hsd: ["{{word:yi1}}-{{word:xia4}}"],
  tts: ["一下"],
  literal: "in a moment",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yi1}}-{{word:xia4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他一下来了。",
      en: "He suddenly came.",
      ru: "Он вдруг пришёл.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:yi1}}-{{word:xia4}} {{word:leng3}} {{word:le}}.",
      hanzi: "水一下冷了。",
      en: "Suddenly the water turned cold.",
      ru: "Вдруг вода стала холодной.",
    },
  ],
});
