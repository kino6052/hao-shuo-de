import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1042,
  phase: 3,
  zh: "利用",
  py: "lìyòng",
  en: "use",
  ru: "использовать",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:wo3}}.",
      hanzi: "他用我。",
      en: "He uses me.",
      ru: "Он пользуется мной.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yong4}} {{word:zhe4}}-{{light:ge4}} {{word:ma}}?",
      hanzi: "你用这个吗？",
      en: "Are you using this?",
      ru: "Ты этим пользуешься?",
    },
  ],
});
