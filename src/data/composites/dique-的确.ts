import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1153,
  phase: 3,
  zh: "的确",
  py: "díquè",
  en: "indeed",
  ru: "действительно",
  pos: "adverb",
  hsd: ["{{word:zhen1}}"],
  tts: ["真"],
  fit: "word",
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "这真好。",
      en: "This is indeed good.",
      ru: "Это и вправду хорошо.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:lai2}} {{word:le}}.",
      hanzi: "他真来了。",
      en: "He did come.",
      ru: "Он и правда пришёл.",
    },
  ],
});
