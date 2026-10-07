import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 174,
  phase: 1,
  zh: "快",
  py: "kuài",
  en: "fast",
  ru: "быстрый",
  pos: "adjective",
  hsd: ["{{word:kuai4}}"],
  tts: ["快"],
  fit: "word",
  note: "Lesson {{lesson:how-much}}.",
  examples: [
    {
      pinyin: "{{Word:kuai4}} {{word:lai2}}!",
      hanzi: "快来！",
      en: "Come quickly!",
      ru: "Иди скорее!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zou3}}-{{word:de}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他走得很快。",
      en: "He walks fast.",
      ru: "Он ходит быстро.",
    },
  ],
});
