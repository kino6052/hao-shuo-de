import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 556,
  phase: 2,
  zh: "哪儿",
  py: "nǎr",
  en: "where",
  ru: "где",
  pos: "pronoun",
  hsd: ["{{word:na3}}-{{word:li3}}"],
  tts: ["哪里"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你去哪里？",
      en: "Where are you going?",
      ru: "Куда ты идёшь?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你的书在哪里？",
      en: "Where is your book?",
      ru: "Где твоя книга?",
    },
  ],
});
