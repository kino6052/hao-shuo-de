import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 546,
  phase: 2,
  zh: "跑步",
  py: "pǎobù",
  en: "run, jog",
  ru: "бегать",
  pos: "verb",
  hsd: ["{{word:zou3}}-{{word:de}} {{word:hen3}} {{word:kuai4}}"],
  tts: ["走得很快"],
  literal: "walk very fast",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zou3}}-{{word:de}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他走得很快。",
      en: "He runs fast.",
      ru: "Он быстро бегает.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zou3}}-{{word:de}} {{word:hen3}} {{word:kuai4}} {{word:ma}}?",
      hanzi: "你走得很快吗？",
      en: "Do you run fast?",
      ru: "Ты быстро бегаешь?",
    },
  ],
});
