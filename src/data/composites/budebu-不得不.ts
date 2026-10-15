import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1229,
  phase: 3,
  zh: "不得不",
  py: "bùdébù",
  en: "have to",
  ru: "приходится",
  pos: "adverb",
  hsd: ["{{word:bu4}}-{{word:de2}}-{{word:bu4}}", "{{word:yao4}}"],
  tts: ["不得不", "要"],
  literal: "can't not",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}}-{{word:de2}}-{{word:bu4}} {{word:qu4}}.",
      hanzi: "我不得不去。",
      en: "I have to go.",
      ru: "Я должен идти.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}}-{{word:de2}}-{{word:bu4}} {{word:zuo4}}.",
      hanzi: "他不得不做。",
      en: "He has to do it.",
      ru: "Он должен это сделать.",
    },
  ],
});
