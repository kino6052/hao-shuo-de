import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 120,
  phase: 1,
  zh: "工作",
  py: "gōngzuò",
  en: "work",
  ru: "работа",
  pos: "verb",
  hsd: ["{{word:gong1}}-{{word:zuo4}}", "{{word:zuo4}}", "{{word:zuo4}}-{{word:de}}"],
  tts: ["工作", "做", "做的"],
  literal: "do / what you do",
  fit: "natural",
  note: "As a verb, zuò. As a thing, zuò-de.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:na3}}-{{word:li3}} {{word:gong1}}-{{word:zuo4}}?",
      hanzi: "他在哪里工作？",
      en: "Where does he work?",
      ru: "Где он работает?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的工作很好。",
      en: "My job is good.",
      ru: "У меня хорошая работа.",
    },
  ],
});
