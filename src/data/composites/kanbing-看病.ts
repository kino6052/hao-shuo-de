import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 532,
  phase: 2,
  zh: "看病",
  py: "kànbìng",
  en: "see a doctor",
  ru: "идти к врачу",
  pos: "verb",
  hsd: ["{{word:qu4}} {{word:zhao3}} {{word:ren2}} {{word:kan4}} {{word:shen1ti3}}"],
  tts: ["去找人看身体"],
  literal: "go find someone to look at the body",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}, {{word:wo3}} {{word:yao4}} {{word:qu4}} {{word:zhao3}} {{word:ren2}} {{word:kan4}} {{word:shen1ti3}}.",
      hanzi: "我身体不好，我要去找人看身体。",
      en: "I'm unwell, so I'm going to see a doctor.",
      ru: "Мне нездоровится, я иду к врачу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:qu4}} {{word:zhao3}} {{word:ren2}} {{word:kan4}} {{word:shen1ti3}} {{word:ma}}?",
      hanzi: "你要去找人看身体吗？",
      en: "Do you want to see a doctor?",
      ru: "Ты хочешь сходить к врачу?",
    },
  ],
});
