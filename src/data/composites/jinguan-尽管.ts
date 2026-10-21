import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1320,
  phase: 3,
  zh: "尽管",
  py: "jǐnguǎn",
  en: "although; despite",
  ru: "хотя",
  pos: "adverb",
  hsd: ["…, {{word:dan4}}-{{word:shi4}} …", "{{word:dan4}}-{{word:shi4}}"],
  tts: ["…，但是…", "但是"],
  literal: "but",
  fit: "plain",
  topics: ["but-and-although"],
  isA: ["conjunction"],
  note: "Say it with dàn-shì: X, dàn-shì Y.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:leng3}}, {{word:dan4}}-{{word:shi4}} {{word:ta1}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他很冷，但是他出去了。",
      en: "Although he was cold, he went out.",
      ru: "Хотя ему было холодно, он вышел.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:xiang3}} {{word:qu4}}, {{word:dan4}}-{{word:shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我很想去，但是我没有金。",
      en: "Although I want to go, I have no money.",
      ru: "Хотя я очень хочу пойти, у меня нет денег.",
    },
  ],
});
