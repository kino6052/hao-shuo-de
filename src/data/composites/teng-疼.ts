import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 443,
  phase: 1,
  zh: "疼",
  py: "téng",
  en: "hurt",
  ru: "болеть",
  pos: "adjective",
  hsd: ["{{word:tong4}}"],
  tts: ["痛"],
  literal: "pain",
  fit: "word",
  topics: ["pain-and-feeling-unwell"],
  isA: ["bodily-state"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:tong4}}.",
      hanzi: "我的头很痛。",
      en: "My head hurts.",
      ru: "У меня болит голова.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:tong4}}, {{word:yao4}} {{word:qu4}} {{word:kan4}} {{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他很痛，要去看帮身体不好的人。",
      en: "He's in pain and has to see a doctor.",
      ru: "Ему больно, ему надо к врачу.",
    },
  ],
});
