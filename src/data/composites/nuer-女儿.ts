import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 381,
  phase: 1,
  zh: "女儿",
  py: "nǚ’ér",
  en: "daughter",
  ru: "дочь",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:hai2}}-{{light:zi}}"],
  tts: ["女孩子"],
  literal: "girl (said of your daughter)",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:ke3}}-{{word:ai4}}.",
      hanzi: "我的女孩子很可爱。",
      en: "My daughter is cute.",
      ru: "Моя дочка милая.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:liang3}}-{{light:ge4}} {{word:nv3}}-{{word:hai2}}-{{word:zi}}.",
      hanzi: "她有两个女孩子。",
      en: "She has two daughters.",
      ru: "У неё две дочери.",
    },
  ],
});
