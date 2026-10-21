import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 660,
  phase: 2,
  zh: "支持",
  py: "zhīchí",
  en: "support",
  ru: "поддерживать",
  pos: "verb",
  hsd: ["{{word:bang1}}"],
  tts: ["帮"],
  literal: "help",
  fit: "natural",
  topics: ["helping-and-supporting"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}}.",
      hanzi: "我帮你。",
      en: "I support you.",
      ru: "Я тебя поддерживаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:wo3}}-{{word:de}} {{word:ba4ba}}.",
      hanzi: "他帮我的爸爸。",
      en: "He supports my dad.",
      ru: "Он поддерживает моего папу.",
    },
  ],
});
