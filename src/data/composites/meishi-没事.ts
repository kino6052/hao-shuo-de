import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 563,
  phase: 2,
  zh: "没事",
  py: "méishì",
  en: "it's nothing",
  ru: "ничего",
  pos: "verb",
  hsd: ["{{word:mei2}}-{{word:shi4}}", "{{word:mei2}}-{{word:you3}} {{word:guan1xi}}"],
  tts: ["没事", "没有关系"],
  literal: "it doesn't matter",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:mei2}}-{{word:shi4}}, {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "没事，我很好。",
      en: "It's nothing, I'm fine.",
      ru: "Ничего, я в порядке.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:mei2}}-{{word:shi4}} {{word:ma}}?",
      hanzi: "你没事吗？",
      en: "Are you okay?",
      ru: "Ты в порядке?",
    },
  ],
});
