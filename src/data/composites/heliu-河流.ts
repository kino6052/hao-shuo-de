import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1366,
  phase: 3,
  zh: "河流",
  py: "héliú",
  en: "river",
  ru: "река",
  pos: "noun",
  hsd: [
    "{{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:dong4}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["长的有水的地方", "动的水"],
  literal: "moving water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:zai4}} {{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我家在长的有水的地方。",
      en: "My home is by the river.",
      ru: "Мой дом у реки.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:de}} {{word:shui3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "动的水很冷。",
      en: "The river is cold.",
      ru: "Река холодная.",
    },
  ],
});
