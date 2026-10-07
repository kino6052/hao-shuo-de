import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8,
  phase: 1,
  zh: "好",
  py: "hǎo",
  en: "good",
  ru: "хороший",
  pos: "adjective",
  hsd: ["{{word:hao3}}"],
  tts: ["好"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang1}}-{{word:fa3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个方法很好。",
      en: "This way is good.",
      ru: "Этот способ хороший.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yi1}}-{{light:ge4}} {{word:hao3}} {{word:ren2}}.",
      hanzi: "他是一个好人。",
      en: "He's a good person.",
      ru: "Он хороший человек.",
    },
  ],
});
