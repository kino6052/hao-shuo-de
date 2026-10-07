import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 299,
  phase: 1,
  zh: "医生",
  py: "yīshēng",
  en: "doctor",
  ru: "врач",
  pos: "noun",
  hsd: ["{{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}"],
  tts: ["帮身体不好的人"],
  literal: "the one who helps bodies that aren't well",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是帮身体不好的人。",
      en: "He's a doctor.",
      ru: "Он врач.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}} {{word:kan4}} {{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我要去看帮身体不好的人。",
      en: "I need to see a doctor.",
      ru: "Мне надо к врачу.",
    },
  ],
});
