import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1313,
  phase: 3,
  zh: "家长",
  py: "jiāzhǎng",
  en: "parent",
  ru: "родитель",
  pos: "noun",
  hsd: ["{{word:ba4ba}}-{{word:ma1ma}}"],
  tts: ["爸爸妈妈"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我的爸爸妈妈在家。",
      en: "My parents are at home.",
      ru: "Мои родители дома.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的爸爸妈妈很好。",
      en: "His parents are kind.",
      ru: "Его родители добрые.",
    },
  ],
});
