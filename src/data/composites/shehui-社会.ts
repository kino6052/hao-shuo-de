import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 992,
  phase: 2,
  zh: "社会",
  py: "shèhuì",
  en: "society",
  ru: "общество",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:hen3}}-{{word:duo1}} {{word:ren2}}"],
  tts: ["在一起的很多人"],
  literal: "many people together",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "在一起的很多人很好。",
      en: "Society is good.",
      ru: "Общество хорошее.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:hen3}}-{{word:duo1}} {{word:ren2}}.",
      hanzi: "我爱在一起的很多人。",
      en: "I love society.",
      ru: "Я люблю общество.",
    },
  ],
});
