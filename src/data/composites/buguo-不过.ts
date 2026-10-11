import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 728,
  phase: 2,
  zh: "不过",
  py: "búguò",
  en: "but",
  ru: "однако",
  pos: "conjunction",
  hsd: ["{{word:bu4}}-{{word:guo4}}", "{{word:dan4}}-{{word:shi4}}"],
  tts: ["不过", "但是"],
  literal: "not past",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:qu4}}, {{word:bu4}}-{{word:guo4}} {{word:wo3}} {{word:mei2}} {{word:you3}} {{word:jin1}}.",
      hanzi: "我想去，不过我没有金。",
      en: "I want to go, but I have no money.",
      ru: "Я хочу пойти, но у меня нет денег.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:hao3}}, {{word:bu4}}-{{word:guo4}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他很好，不过他不来。",
      en: "He is nice, but he isn't coming.",
      ru: "Он хороший, но не придёт.",
    },
  ],
});
