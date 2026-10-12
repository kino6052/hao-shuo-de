import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1334,
  phase: 3,
  zh: "感情",
  py: "gǎnqíng",
  en: "emotion, feeling",
  ru: "чувство",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["在心里的东西"],
  literal: "what's in the heart",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zai4}}-{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "在心里的东西很重要。",
      en: "Feelings are important.",
      ru: "Чувства важны.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:zai4}}-{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他有很多在心里的东西。",
      en: "He has many feelings.",
      ru: "У него много чувств.",
    },
  ],
});
