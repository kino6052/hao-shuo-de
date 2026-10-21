import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 700,
  phase: 2,
  zh: "虽然",
  py: "suīrán",
  en: "although",
  ru: "хотя",
  pos: "conjunction",
  hsd: ["…, {{word:dan4}}-{{word:shi4}} …"],
  tts: ["…，但是…"],
  literal: "…, but …",
  fit: "natural",
  topics: ["joining-words"],
  isA: ["conjunction"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "我很冷，但是我不怕。",
      en: "Although I'm cold, I'm not afraid.",
      ru: "Хотя мне холодно, я не боюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:leng3}}, {{word:dan4}}-{{word:shi4}} {{word:ta1}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "他很冷，但是他不怕。",
      en: "Although he's cold, he isn't afraid.",
      ru: "Хотя ему холодно, он не боится.",
    },
  ],
});
