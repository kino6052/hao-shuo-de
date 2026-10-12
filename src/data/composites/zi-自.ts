import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1180,
  phase: 3,
  zh: "自",
  py: "zì",
  en: "from",
  ru: "от, с",
  pos: "preposition",
  hsd: ["{{word:cong2}}"],
  tts: ["从"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:wai4}} {{word:lai2}}.",
      hanzi: "我从外来。",
      en: "I come from outside.",
      ru: "Я пришёл снаружи.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:cong2}} {{word:ta1}} {{word:lai2}}.",
      hanzi: "这从他来。",
      en: "This comes from him.",
      ru: "Это идёт от него.",
    },
  ],
});
