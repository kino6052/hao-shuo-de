import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 678,
  phase: 2,
  zh: "现代",
  py: "xiàndài",
  en: "modern",
  ru: "современный",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:zai4}}-{{word:de}}"],
  tts: ["现在的"],
  literal: "of now",
  fit: "natural",
  topics: ["history-and-culture"],
  isA: ["time-point"],
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}}-{{word:de}} {{word:ren2}} {{word:ai4}} {{word:wang3}}.",
      hanzi: "现在的人爱网。",
      en: "Modern people love the internet.",
      ru: "Современные люди любят интернет.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}}-{{word:de}} {{word:che1}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "现在的车很快。",
      en: "Modern cars are fast.",
      ru: "Современные машины быстрые.",
    },
  ],
});
