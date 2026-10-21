import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1372,
  phase: 3,
  zh: "深",
  py: "shēn",
  en: "deep",
  ru: "глубокий",
  pos: "adjective",
  hsd: ["{{word:xia4}}-{{word:mian4}} {{word:hen3}} {{word:yuan3}}"],
  tts: ["下面很远"],
  literal: "the bottom is far",
  fit: "plain",
  topics: ["size"],
  isA: ["size-quality"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:xia4}}-{{word:mian4}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "水下面很远。",
      en: "The water is deep.",
      ru: "Вода глубокая.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shui3}} {{word:xia4}}-{{word:mian4}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "这个水下面很远。",
      en: "This water is deep.",
      ru: "Эта вода глубокая.",
    },
  ],
});
