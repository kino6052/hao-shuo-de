import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 779,
  phase: 2,
  zh: "美丽",
  py: "měilì",
  en: "beautiful",
  ru: "прекрасный",
  pos: "adjective",
  hsd: ["{{word:hao3}}-{{word:kan4}}", "{{word:hen3}}-{{word:hao3}}-{{word:kan4}}"],
  tts: ["好看", "很好看"],
  literal: "very good to look at",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["sound-or-light-quality"],
  examples: [
    {
      pinyin: "{{Word:tian1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "天很好看。",
      en: "The sky is beautiful.",
      ru: "Небо очень красивое.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "他的家很好看。",
      en: "His home is beautiful.",
      ru: "Его дом очень красивый.",
    },
  ],
});
