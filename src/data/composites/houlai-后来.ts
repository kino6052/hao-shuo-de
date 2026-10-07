import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 373,
  phase: 1,
  zh: "后来",
  py: "hòulái",
  en: "later",
  ru: "потом",
  pos: "noun",
  hsd: ["{{word:hou4}}-{{word:lai2}}"],
  tts: ["后来"],
  fit: "natural",
  note: "A real word: hòu + lái.",
  examples: [
    {
      pinyin: "{{Word:hou4}}-{{word:lai2}} {{word:ta1}} {{word:zou3}} {{word:le}}.",
      hanzi: "后来他走了。",
      en: "Later he left.",
      ru: "Потом он ушёл.",
    },
    {
      pinyin: "{{Word:hou4}}-{{word:lai2}} {{word:wo3}}-{{word:men}} {{word:dou1}} {{word:ming2}}-{{word:bai2}} {{word:le}}.",
      hanzi: "后来我们都明白了。",
      en: "Later we all understood.",
      ru: "Потом мы все поняли.",
    },
  ],
});
