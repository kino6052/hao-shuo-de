import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1515,
  phase: 3,
  zh: "本地",
  py: "běndì",
  en: "local; native",
  ru: "местный",
  pos: "noun",
  hsd: ["{{word:zhe4}}-{{word:li3}}"],
  tts: ["这里"],
  literal: "here",
  fit: "natural",
  topics: ["here-there-everywhere"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:chi1}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这里的吃的很好。",
      en: "The local food is good.",
      ru: "Местная еда хорошая.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:ai4}} {{word:wan2r}}.",
      hanzi: "这里的人爱玩儿。",
      en: "The local people love to have fun.",
      ru: "Местные жители любят развлекаться.",
    },
  ],
});
