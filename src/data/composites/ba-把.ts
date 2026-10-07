import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 60,
  phase: 1,
  zh: "把",
  py: "bǎ",
  en: "grammatical object-introducing particle",
  ru: "грамматическая частица",
  pos: "classifier",
  hsd: ["{{word:ba3}}"],
  tts: ["把"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:shui3}} {{word:gei3}} {{word:wo3}}.",
      hanzi: "把水给我。",
      en: "Give me the water.",
      ru: "Дай мне воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:men2}} {{word:kai1}} {{word:le}}.",
      hanzi: "他把门开了。",
      en: "He opened the door.",
      ru: "Он открыл дверь.",
    },
  ],
});
