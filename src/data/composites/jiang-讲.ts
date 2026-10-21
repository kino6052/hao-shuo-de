import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 892,
  phase: 2,
  zh: "讲",
  py: "jiǎng",
  en: "speak",
  ru: "говорить",
  pos: "verb",
  hsd: ["{{word:shuo1}}"],
  tts: ["说"],
  fit: "word",
  topics: ["talking"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我说这个。",
      en: "I speak about this.",
      ru: "Я говорю об этом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:shuo1}}.",
      hanzi: "他在说。",
      en: "He is speaking.",
      ru: "Он говорит.",
    },
  ],
});
