import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1404,
  phase: 3,
  zh: "表扬",
  py: "biǎoyáng",
  en: "praise",
  ru: "хвалить",
  pos: "verb",
  hsd: ["{{word:shuo1}} X {{word:hao3}}"],
  tts: ["说X好"],
  literal: "say X is good",
  fit: "plain",
  topics: ["praising-and-applause"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ba4ba}} {{word:shuo1}} {{word:wo3}} {{word:hao3}}.",
      hanzi: "爸爸说我好。",
      en: "Dad praised me.",
      ru: "Папа меня похвалил.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:ta1}} {{word:hao3}}.",
      hanzi: "我说他好。",
      en: "I praise him.",
      ru: "Я хвалю его.",
    },
  ],
});
