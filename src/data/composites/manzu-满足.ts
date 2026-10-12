import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1136,
  phase: 3,
  zh: "满足",
  py: "mǎnzú",
  en: "satisfy",
  ru: "удовлетворять",
  pos: "verb",
  hsd: ["{{word:gei3}} X {{word:yao4}}-{{word:de}}"],
  tts: ["给X要的"],
  literal: "give X what X wants",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:yao4}}-{{word:de}}.",
      hanzi: "我给他要的。",
      en: "I satisfy him.",
      ru: "Я удовлетворяю его.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:wo3}} {{word:yao4}}-{{word:de}}.",
      hanzi: "他给我要的。",
      en: "He satisfies me.",
      ru: "Он удовлетворяет меня.",
    },
  ],
});
