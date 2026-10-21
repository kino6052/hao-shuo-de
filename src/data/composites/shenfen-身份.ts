import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1208,
  phase: 3,
  zh: "身份",
  py: "shēnfèn",
  en: "identity",
  ru: "личность (кто ты)",
  pos: "noun",
  hsd: ["{{word:shi4}} {{word:shei2}}"],
  tts: ["是谁"],
  literal: "who someone is",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ta1}} {{word:shi4}} {{word:shei2}}.",
      hanzi: "我不知道他是谁。",
      en: "I don't know his identity.",
      ru: "Я не знаю, кто он.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:yao4}} {{word:ren2}} {{word:zhi1dao4}} {{word:ta1}} {{word:shi4}} {{word:shei2}}.",
      hanzi: "他不要人知道他是谁。",
      en: "He doesn't want people to know who he is.",
      ru: "Он не хочет, чтобы люди знали, кто он.",
    },
  ],
});
