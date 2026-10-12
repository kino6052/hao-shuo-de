import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1146,
  phase: 3,
  zh: "理由",
  py: "lǐyóu",
  en: "reason",
  ru: "причина, довод",
  pos: "noun",
  hsd: ["{{word:wei4}}-{{word:shen2me}}"],
  tts: ["为什么"],
  literal: "why",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:wei4}}-{{word:shen2me}}.",
      hanzi: "我知道为什么。",
      en: "I know the reason.",
      ru: "Я знаю причину.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:wei4}}-{{word:shen2me}}.",
      hanzi: "他说为什么。",
      en: "He gave the reason.",
      ru: "Он назвал причину.",
    },
  ],
});
