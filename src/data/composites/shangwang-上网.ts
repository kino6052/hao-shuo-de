import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 342,
  phase: 1,
  zh: "上网",
  py: "shàngwǎng",
  en: "go online",
  ru: "выходить в интернет",
  pos: "verb",
  hsd: ["{{word:shang4}} {{word:wang3}}"],
  tts: ["上网"],
  literal: "go onto the net",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:shang4}} {{word:wang3}}.",
      hanzi: "我在上网。",
      en: "I'm online.",
      ru: "Я в интернете.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:tian1}}-{{word:tian1}} {{word:shang4}} {{word:wang3}}.",
      hanzi: "他天天上网。",
      en: "He goes online every day.",
      ru: "Он каждый день сидит в интернете.",
    },
  ],
});
