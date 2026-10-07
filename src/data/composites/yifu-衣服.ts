import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 92,
  phase: 1,
  zh: "衣服",
  py: "yīfu",
  en: "clothing",
  ru: "одежда",
  pos: "noun",
  hsd: ["{{word:yi1fu}}"],
  tts: ["衣服"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yi1fu}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "这个衣服很好看。",
      en: "These clothes look nice.",
      ru: "Эта одежда красивая.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "我的衣服在哪里？",
      en: "Where are my clothes?",
      ru: "Где моя одежда?",
    },
  ],
});
