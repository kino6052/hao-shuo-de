import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 402,
  phase: 1,
  zh: "慢",
  py: "màn",
  en: "slow",
  ru: "медленный",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:kuai4}}"],
  tts: ["不快"],
  literal: "not fast",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zou3}}-{{word:de}} {{word:bu4}} {{word:kuai4}}.",
      hanzi: "他走得不快。",
      en: "He walks slowly.",
      ru: "Он ходит медленно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:che1}} {{word:bu4}} {{word:kuai4}}.",
      hanzi: "这个车不快。",
      en: "This car is slow.",
      ru: "Эта машина медленная.",
    },
  ],
});
