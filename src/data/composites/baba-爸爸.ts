import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 257,
  phase: 1,
  zh: "爸爸",
  py: "bàba",
  en: "dad",
  ru: "папа",
  pos: "noun",
  hsd: ["{{word:ba4ba}}"],
  tts: ["爸爸"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "我爸爸很高。",
      en: "My dad is tall.",
      ru: "Мой папа высокий.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:qu4}} {{word:gong1}}-{{word:zuo4}} {{word:le}}.",
      hanzi: "爸爸去工作了。",
      en: "Dad went to work.",
      ru: "Папа ушёл на работу.",
    },
  ],
});
