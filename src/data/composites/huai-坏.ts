import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 159,
  phase: 1,
  zh: "坏",
  py: "huài",
  en: "bad",
  ru: "плохой",
  pos: "adjective",
  hsd: ["{{word:huai4}}"],
  tts: ["坏"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}} {{word:huai4}} {{word:le}}.",
      hanzi: "我的手机坏了。",
      en: "My phone broke.",
      ru: "Мой телефон сломался.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:shi4}} {{word:huai4}} {{word:ren2}}.",
      hanzi: "他不是坏人。",
      en: "He's not a bad person.",
      ru: "Он не плохой человек.",
    },
  ],
});
