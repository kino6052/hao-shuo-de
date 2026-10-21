import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 761,
  phase: 2,
  zh: "方向",
  py: "fāngxiàng",
  en: "direction",
  ru: "направление",
  pos: "noun",
  hsd: ["{{word:qu4}}-{{word:de}} {{word:bian1}}"],
  tts: ["去的边"],
  literal: "the side you go to",
  fit: "plain",
  topics: ["directions"],
  isA: ["direction"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:de}} {{word:bian1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "我去的边很远。",
      en: "The direction I'm going is far.",
      ru: "Туда, куда я иду, далеко.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:qu4}}-{{word:de}} {{word:bian1}} {{word:shi4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "你去的边是这里。",
      en: "The direction you go is here.",
      ru: "Ты идёшь в эту сторону.",
    },
  ],
});
