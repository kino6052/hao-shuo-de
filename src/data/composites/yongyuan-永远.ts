import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1364,
  phase: 3,
  zh: "永远",
  py: "yǒngyuǎn",
  en: "forever",
  ru: "навсегда",
  pos: "adverb",
  hsd: ["{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} …"],
  tts: ["什么时间都"],
  literal: "at any time",
  fit: "plain",
  topics: ["how-often"],
  isA: ["frequency"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:ai4}} {{word:ni3}}.",
      hanzi: "我什么时间都爱你。",
      en: "I will love you forever.",
      ru: "Я буду любить тебя вечно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "他什么时间都在家。",
      en: "He is always at home.",
      ru: "Он всегда дома.",
    },
  ],
});
