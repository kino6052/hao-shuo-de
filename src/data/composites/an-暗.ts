import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1513,
  phase: 3,
  zh: "暗",
  py: "àn",
  en: "dark",
  ru: "тёмный",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:ming2}}"],
  tts: ["不明"],
  literal: "not bright",
  fit: "plain",
  topics: ["bright-dark-quiet-noisy"],
  isA: ["sound-or-light-quality"],
  examples: [
    {
      pinyin: "{{Word:fang2}}-{{word:jian1}} {{word:bu4}} {{word:ming2}}.",
      hanzi: "房间不明。",
      en: "The room is dark.",
      ru: "В комнате темно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:bu4}} {{word:ming2}}.",
      hanzi: "这里不明。",
      en: "It is dark here.",
      ru: "Здесь темно.",
    },
  ],
});
