import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 466,
  phase: 1,
  zh: "记",
  py: "jì",
  en: "remember",
  ru: "помнить",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}}"],
  tts: ["知道"],
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hai2}} {{word:zhi1dao4}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你还知道我吗？",
      en: "Do you remember me?",
      ru: "Ты меня помнишь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hai2}} {{word:zhi1dao4}} {{word:na4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我还知道那个地方。",
      en: "I remember that place.",
      ru: "Я помню то место.",
    },
  ],
});
