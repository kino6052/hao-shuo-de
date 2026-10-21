import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 911,
  phase: 2,
  zh: "难过",
  py: "nánguò",
  en: "sad",
  ru: "грустный",
  pos: "adjective",
  hsd: ["{{word:nan2}}-{{word:guo4}}", "{{word:bu4}} {{word:kai1}}-{{word:xin1}}"],
  tts: ["难过", "不开心"],
  literal: "hard to get through / not happy",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["sad-and-angry"],
  isA: ["feeling-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:nan2}}-{{word:guo4}}.",
      hanzi: "我很难过。",
      en: "I'm sad.",
      ru: "Мне грустно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:nan2}}-{{word:guo4}}.",
      hanzi: "他很难过。",
      en: "He is sad.",
      ru: "Ему грустно.",
    },
  ],
});
