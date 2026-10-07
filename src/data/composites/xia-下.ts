import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 25,
  phase: 1,
  zh: "下",
  py: "xià",
  en: "down",
  ru: "вниз",
  pos: "noun",
  hsd: ["{{word:xia4}}"],
  tts: ["下面"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:xia4}}-{{word:mian4}}.",
      hanzi: "他在下面。",
      en: "He's down there.",
      ru: "Он внизу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}.",
      hanzi: "你坐下。",
      en: "Sit down.",
      ru: "Садись.",
    },
  ],
});
