import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1480,
  phase: 3,
  zh: "好处",
  py: "hǎochù",
  en: "benefit",
  ru: "польза",
  pos: "noun",
  hsd: ["{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["好的地方"],
  literal: "the good points",
  fit: "plain",
  topics: ["how-good"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这有好的地方。",
      en: "This has benefits.",
      ru: "В этом есть польза.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这个有很多好的地方。",
      en: "This has many benefits.",
      ru: "У этого много достоинств.",
    },
  ],
});
