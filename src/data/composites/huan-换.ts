import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 849,
  phase: 2,
  zh: "换",
  py: "huàn",
  en: "exchange, change",
  ru: "менять",
  pos: "verb",
  hsd: ["{{word:huan4}}"],
  tts: ["换"],
  fit: "word",
  topics: ["mixing-passing-on-and-changing"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:huan4}} {{word:che1}}.",
      hanzi: "我换车。",
      en: "I change buses.",
      ru: "Я делаю пересадку.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}.",
      hanzi: "我不去，换他去。",
      en: "I won't go; he goes instead.",
      ru: "Я не пойду, пойдёт он.",
    },
  ],
  proposed: true,
});
