import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1122,
  phase: 3,
  zh: "时期",
  py: "shíqī",
  en: "period",
  ru: "период",
  pos: "noun",
  hsd: ["X-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["X的时间"],
  literal: "the time of X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我小的时间很好。",
      en: "My childhood period was good.",
      ru: "Мой детский период был хорошим.",
    },
    {
      pinyin: "{{Word:na4}} {{word:shi4}} {{word:wo3}} {{word:xue2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "那是我学的时间。",
      en: "That was my study period.",
      ru: "То был мой период учёбы.",
    },
  ],
});
