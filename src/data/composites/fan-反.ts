import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1276,
  phase: 3,
  zh: "反",
  py: "fǎn",
  en: "opposite",
  ru: "обратный, противоположный",
  pos: "adjective",
  hsd: ["{{word:dui4}}-{{word:mian4}}"],
  tts: ["对面"],
  literal: "the facing side",
  fit: "natural",
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:dui4}}-{{word:mian4}}.",
      hanzi: "他在我的对面。",
      en: "He is opposite me.",
      ru: "Он напротив меня.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:jia1}} {{word:zai4}} {{word:dui4}}-{{word:mian4}}.",
      hanzi: "那个家在对面。",
      en: "That home is on the opposite side.",
      ru: "Тот дом на другой стороне.",
    },
  ],
});
