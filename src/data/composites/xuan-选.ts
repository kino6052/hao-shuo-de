import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 480,
  phase: 1,
  zh: "选",
  py: "xuǎn",
  en: "choose",
  ru: "выбирать",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "plain",
  note: "wǒ yào zhè-ge: I'll take this one.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:na3}}-{{light:ge4}}?",
      hanzi: "你要哪个？",
      en: "Which do you choose?",
      ru: "Какой ты выберешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我要红色的。",
      en: "I'll take the red one.",
      ru: "Я возьму красный.",
    },
  ],
});
