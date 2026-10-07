import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 250,
  phase: 1,
  zh: "头发",
  py: "tóufa",
  en: "hair",
  ru: "волосы",
  pos: "noun",
  hsd: ["{{word:tou2}}-{{light:fa1}}", "{{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}}"],
  tts: ["头发", "头上的毛"],
  literal: "the fur on the head",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{light:fa1}} {{word:hen3}} {{word:hei1}}.",
      hanzi: "她的头发很黑。",
      en: "Her hair is very black.",
      ru: "У неё очень чёрные волосы.",
    },
    {
      pinyin: "{{Word:ba4ba}}-{{word:de}} {{word:tou2}}-{{light:fa1}} {{word:bian4}} {{word:bai2}} {{word:le}}.",
      hanzi: "爸爸的头发变白了。",
      en: "Dad's hair has turned white.",
      ru: "Папины волосы поседели.",
    },
  ],
});
