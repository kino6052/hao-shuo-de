import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 253,
  phase: 1,
  zh: "饿",
  py: "è",
  en: "hungry",
  ru: "голодный",
  pos: "adjective",
  hsd: ["{{word:xiang3}} {{word:chi1}}-{{word:fan4}}"],
  tts: ["想吃饭"],
  literal: "want to eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:chi1}}-{{word:fan4}} {{word:le}}.",
      hanzi: "我想吃饭了。",
      en: "I'm hungry.",
      ru: "Я проголодался.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:xiang3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "孩子们想吃饭。",
      en: "The children are hungry.",
      ru: "Дети голодны.",
    },
  ],
});
