import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 717,
  phase: 2,
  zh: "速度",
  py: "sùdù",
  en: "speed",
  ru: "скорость",
  pos: "noun",
  hsd: ["{{word:kuai4}} {{word:bu4}} {{word:kuai4}}"],
  tts: ["快不快"],
  literal: "how fast",
  fit: "natural",
  topics: ["speed-and-strength"],
  isA: ["speed-or-strength"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:kuai4}} {{word:bu4}} {{word:kuai4}}?",
      hanzi: "他快不快？",
      en: "How fast is he?",
      ru: "Насколько он быстрый?",
    },
    {
      pinyin: "{{Word:che1}} {{word:kuai4}} {{word:bu4}} {{word:kuai4}}?",
      hanzi: "车快不快？",
      en: "How fast is the car?",
      ru: "Какая у машины скорость?",
    },
  ],
});
