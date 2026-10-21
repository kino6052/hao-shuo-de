import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1109,
  phase: 3,
  zh: "效率",
  py: "xiàolǜ",
  en: "efficiency",
  ru: "эффективность",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:de}} {{word:duo1}} {{word:kuai4}}"],
  tts: ["做的多快"],
  literal: "how fast you get it done",
  fit: "plain",
  topics: ["working-life"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:de}} {{word:duo1}} {{word:kuai4}}!",
      hanzi: "他做的多快！",
      en: "How efficient he is!",
      ru: "Как он эффективен!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}} {{word:zuo4}}-{{word:de}} {{word:duo1}} {{word:kuai4}}.",
      hanzi: "我看他做的多快。",
      en: "I see how efficient he is.",
      ru: "Я вижу, как он эффективен.",
    },
  ],
});
