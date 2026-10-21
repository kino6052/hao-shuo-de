import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 746,
  phase: 2,
  zh: "地铁",
  py: "dìtiě",
  en: "subway",
  ru: "метро",
  pos: "noun",
  hsd: ["{{word:di4}}-{{word:xia4}}-{{word:de}} {{word:che1}}"],
  tts: ["地下的车"],
  literal: "the underground car",
  fit: "plain",
  topics: ["trains-and-stations"],
  isA: ["vehicle"],
  examples: [
    {
      pinyin: "{{Word:di4}}-{{word:xia4}}-{{word:de}} {{word:che1}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "地下的车很快。",
      en: "The subway is fast.",
      ru: "Метро быстрое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:di4}}-{{word:xia4}}-{{word:de}} {{word:che1}}.",
      hanzi: "我去地下的车。",
      en: "I'm taking the subway.",
      ru: "Я иду к метро.",
    },
  ],
});
