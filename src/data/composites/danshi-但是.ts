import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 115,
  phase: 1,
  zh: "但是",
  py: "dànshì",
  en: "but",
  ru: "но",
  pos: "conjunction",
  hsd: ["{{word:dan4}}-{{word:shi4}}"],
  tts: ["但是"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:qu4}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我想去，但是我没有时间。",
      en: "I'd like to go, but I have no time.",
      ru: "Я хочу пойти, но у меня нет времени.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:xiao3}}, {{word:dan4}}-{{word:shi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个很小，但是很好。",
      en: "It's small, but it's good.",
      ru: "Он маленький, но хороший.",
    },
  ],
});
