import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1145,
  phase: 3,
  zh: "现实",
  py: "xiànshí",
  en: "reality",
  ru: "реальность",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:shi2}}", "{{word:zhen1}}-{{word:de}}"],
  tts: ["现实", "真的"],
  literal: "what's real",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xian4}}-{{word:shi2}}.",
      hanzi: "这是现实。",
      en: "This is reality.",
      ru: "Это реальность.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:shi2}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "现实很难。",
      en: "Reality is hard.",
      ru: "Реальность трудна.",
    },
  ],
});
