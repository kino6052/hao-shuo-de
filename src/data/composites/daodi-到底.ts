import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1467,
  phase: 3,
  zh: "到底",
  py: "dàodǐ",
  en: "after all; finally",
  ru: "в конце концов; всё-таки",
  pos: "adverb",
  hsd: ["{{word:zui4}}-{{word:hou4}}", "{{word:zhen1}}-{{word:de}}"],
  tts: ["最后", "真的"],
  literal: "at last / really",
  fit: "plain",
  topics: ["adverbs"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:zui4}}-{{word:hou4}} {{word:wo3}} {{word:qu4}} {{word:le}}.",
      hanzi: "最后我去了。",
      en: "In the end I went.",
      ru: "В конце концов я пошёл.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}}-{{word:de}} {{word:qu4}} {{word:ma}}?",
      hanzi: "你真的去吗？",
      en: "Are you really going?",
      ru: "Ты правда идёшь?",
    },
  ],
});
