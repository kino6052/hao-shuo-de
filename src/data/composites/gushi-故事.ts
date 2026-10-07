import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 311,
  phase: 1,
  zh: "故事",
  py: "gùshi",
  en: "story",
  ru: "история",
  pos: "noun",
  hsd: ["{{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["说的东西"],
  literal: "a told thing",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}-{{word:ting1}}.",
      hanzi: "这个说的东西很好听。",
      en: "This story is lovely.",
      ru: "Эта история интересная.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你知道这个说的东西吗？",
      en: "Do you know this story?",
      ru: "Ты знаешь эту историю?",
    },
  ],
});
