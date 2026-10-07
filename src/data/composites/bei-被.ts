import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 110,
  phase: 1,
  zh: "被",
  py: "bèi",
  en: "(passive)",
  ru: "(пассив)",
  pos: "preposition",
  hsd: ["X {{word:rang4}} Y + verb"],
  tts: ["X让Y…"],
  literal: "X lets Y do it",
  fit: "natural",
  note: "Spoken Mandarin uses 让 for the passive too: wǒ-de bāo ràng tā ná-zǒu le, my bag got taken by him.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:rang4}} {{word:ta1}} {{word:na2}}-{{word:zou3}} {{word:le}}.",
      hanzi: "我的包让他拿走了。",
      en: "My bag got taken by him.",
      ru: "Он забрал мою сумку.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:rang4}} {{word:ta1}} {{word:he1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "水让他喝完了。",
      en: "The water got drunk up by him.",
      ru: "Он выпил всю воду.",
    },
  ],
});
