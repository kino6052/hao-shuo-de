import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 177,
  phase: 1,
  zh: "手机",
  py: "shǒujī",
  en: "mobile phone",
  ru: "телефон",
  pos: "noun",
  hsd: ["{{word:shou3}}-{{word:ji1}}"],
  tts: ["手机"],
  literal: "hand machine",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "我的手机在哪里？",
      en: "Where's my phone?",
      ru: "Где мой телефон?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:kan4}} {{word:shou3}}-{{word:ji1}}.",
      hanzi: "他在看手机。",
      en: "He's looking at his phone.",
      ru: "Он смотрит в телефон.",
    },
  ],
});
