import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 358,
  phase: 1,
  zh: "公园",
  py: "gōngyuán",
  en: "park",
  ru: "парк",
  pos: "noun",
  hsd: [
    "{{word:gong1}}-{{word:yuan2}}",
    "{{word:you3}}-{{word:zhi2wu4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["公园", "有植物的地方"],
  literal: "place with plants",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:gong1}}-{{word:yuan2}} {{word:wan2r}}.",
      hanzi: "我们去公园玩儿。",
      en: "We're going to the park to play.",
      ru: "Мы идём гулять в парк.",
    },
    {
      pinyin: "{{Word:gong1}}-{{word:yuan2}}-{{word:li3}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "公园里人很多。",
      en: "There are lots of people in the park.",
      ru: "В парке много людей.",
    },
  ],
});
