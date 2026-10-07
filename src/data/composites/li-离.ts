import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 325,
  phase: 1,
  zh: "离",
  py: "lí",
  en: "be away from",
  ru: "находиться далеко от",
  pos: "verb",
  hsd: ["{{word:cong2}} Y {{word:dao4}} X {{word:hen3}} {{word:yuan3}}"],
  tts: ["从Y到X很远"],
  literal: "from Y to X is far",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:cong2}} {{word:wo3}} {{word:jia1}} {{word:dao4}} {{word:xue2}}-{{word:xiao4}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "从我家到学校很远。",
      en: "My home is far from the school.",
      ru: "Мой дом далеко от школы.",
    },
    {
      pinyin: "{{Word:cong2}} {{word:zhe4}}-{{word:li3}} {{word:dao4}} {{word:na4}}-{{word:li3}} {{word:hen3}} {{word:yuan3}} {{word:ma}}?",
      hanzi: "从这里到那里很远吗？",
      en: "Is it far from here?",
      ru: "Отсюда далеко?",
    },
  ],
});
