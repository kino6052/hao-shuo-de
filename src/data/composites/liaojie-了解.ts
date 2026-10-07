import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 290,
  phase: 1,
  zh: "了解",
  py: "liǎojiě",
  en: "understand",
  ru: "понимать",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}}"],
  tts: ["知道"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:ta1}}.",
      hanzi: "我知道他。",
      en: "I know him.",
      ru: "Я его знаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:ma}}?",
      hanzi: "你知道这个地方吗？",
      en: "Do you know this place?",
      ru: "Ты знаешь это место?",
    },
  ],
});
