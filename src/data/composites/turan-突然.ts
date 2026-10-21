import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 774,
  phase: 2,
  zh: "突然",
  py: "tūrán",
  en: "suddenly",
  ru: "вдруг",
  pos: "adjective",
  hsd: ["{{word:yi1}}-{{word:xia4}}"],
  tts: ["一下"],
  literal: "in a moment",
  fit: "plain",
  topics: ["suddenly-and-on-time"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yi1}}-{{word:xia4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他一下来了。",
      en: "He suddenly came.",
      ru: "Он вдруг пришёл.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:yi1}}-{{word:xia4}} {{word:mei2}} {{word:you3}} {{word:le}}.",
      hanzi: "水一下没有了。",
      en: "The water suddenly ran out.",
      ru: "Вода вдруг кончилась.",
    },
  ],
});
