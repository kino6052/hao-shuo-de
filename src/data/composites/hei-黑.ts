import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 492,
  phase: 1,
  zh: "黑",
  py: "hēi",
  en: "black",
  ru: "чёрный",
  pos: "adjective",
  hsd: ["{{word:hei1}}", "{{word:hei1}}-{{word:se4}}"],
  tts: ["黑", "黑色"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:hei1}}.",
      hanzi: "外面很黑。",
      en: "It's dark outside.",
      ru: "На улице темно.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "他的包是黑色的。",
      en: "His bag is black.",
      ru: "У него чёрная сумка.",
    },
  ],
});
