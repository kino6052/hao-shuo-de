import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1086,
  phase: 3,
  zh: "开放",
  py: "kāifàng",
  en: "open (up)",
  ru: "открытый, открывать",
  pos: "verb",
  hsd: ["{{word:kai1}}-{{word:fang4}}"],
  tts: ["开放"],
  literal: "open-put",
  fit: "natural",
  kinds: ["built"],
  topics: ["changing"],
  isA: ["starting-and-stopping"],
  note: "Real Mandarin: 开放.",
  examples: [
    {
      pinyin: "{{Word:men2}} {{word:kai1}}-{{word:fang4}} {{word:le}}.",
      hanzi: "门开放了。",
      en: "The door is open.",
      ru: "Дверь открыта.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:kai1}}-{{word:fang4}}.",
      hanzi: "这个地方开放。",
      en: "This place is open.",
      ru: "Это место открыто.",
    },
  ],
});
