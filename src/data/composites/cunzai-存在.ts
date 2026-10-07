import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 275,
  phase: 1,
  zh: "存在",
  py: "cúnzài",
  en: "exist",
  ru: "существовать",
  pos: "verb",
  hsd: ["{{word:you3}}", "{{word:zai4}}"],
  tts: ["有", "在"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:zhen1}}-{{word:de}} {{word:you3}} {{word:ma}}?",
      hanzi: "这个东西真的有吗？",
      en: "Does this thing really exist?",
      ru: "Эта вещь правда существует?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hai2}} {{word:zai4}}.",
      hanzi: "他还在。",
      en: "He's still around.",
      ru: "Он ещё здесь.",
    },
  ],
});
