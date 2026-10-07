import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 191,
  phase: 1,
  zh: "电话",
  py: "diànhuà",
  en: "telephone",
  ru: "телефон",
  pos: "noun",
  hsd: ["{{word:hua4}}-{{word:ji1}}"],
  tts: ["话机"],
  literal: "talk machine",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:hua4}}-{{word:ji1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "话机在哪里？",
      en: "Where's the phone?",
      ru: "Где телефон?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:ta1}}-{{word:de}} {{word:hua4}}-{{word:ji1}}.",
      hanzi: "我用他的话机。",
      en: "I'm using his phone.",
      ru: "Я пользуюсь его телефоном.",
    },
  ],
});
