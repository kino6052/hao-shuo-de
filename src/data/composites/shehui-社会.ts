import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 992,
  phase: 2,
  zh: "社会",
  py: "shèhuì",
  en: "society",
  ru: "общество",
  pos: "noun",
  hsd: ["{{word:hen3}}-{{word:duo1}} {{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}}"],
  tts: ["很多在一起的人"],
  literal: "many people together",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}} {{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "很多在一起的人很好。",
      en: "Society is good.",
      ru: "Общество хорошее.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hen3}}-{{word:duo1}} {{word:zai4}}-{{word:yi1}}-{{word:qi3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爱很多在一起的人。",
      en: "I love society.",
      ru: "Я люблю общество.",
    },
  ],
});
