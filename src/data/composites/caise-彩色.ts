import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1497,
  phase: 3,
  zh: "彩色",
  py: "cǎisè",
  en: "colorful",
  ru: "цветной",
  pos: "noun",
  hsd: ["{{word:hen3}}-{{word:duo1}}-{{word:yan2se4}}-{{word:de}}"],
  tts: ["很多颜色的"],
  literal: "many-colored",
  fit: "plain",
  topics: ["colours-and-patterns"],
  isA: ["colour-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:hen3}}-{{word:duo1}}-{{word:yan2se4}}-{{word:de}}.",
      hanzi: "他的衣服是很多颜色的。",
      en: "His clothes are colorful.",
      ru: "Его одежда разноцветная.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:hen3}}-{{word:duo1}}-{{word:yan2se4}}-{{word:de}}.",
      hanzi: "这个是很多颜色的。",
      en: "This one is colorful.",
      ru: "Этот разноцветный.",
    },
  ],
});
