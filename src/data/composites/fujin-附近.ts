import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 484,
  phase: 1,
  zh: "附近",
  py: "fùjìn",
  en: "nearby",
  ru: "рядом",
  pos: "noun",
  hsd: ["{{word:fu4jin4}}"],
  tts: ["附近"],
  fit: "word",
  note: "fùjìn-de dì-fang: a nearby place. Lesson {{lesson:moving}}.",
  examples: [
    {
      pinyin: "{{Word:fu4jin4}} {{word:you3}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:ma}}?",
      hanzi: "附近有买东西的地方吗？",
      en: "Is there a shop nearby?",
      ru: "Поблизости есть магазин?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fu4jin4}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他在附近工作。",
      en: "He works nearby.",
      ru: "Он работает рядом.",
    },
  ],
});
