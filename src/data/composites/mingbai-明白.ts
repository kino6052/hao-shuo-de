import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 181,
  phase: 1,
  zh: "明白",
  py: "míngbai",
  en: "understand",
  ru: "понимать",
  pos: "adjective",
  hsd: ["{{word:ming2}}-{{word:bai2}}", "{{word:zhi1dao4}}"],
  tts: ["明白", "知道"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ming2}}-{{word:bai2}} {{word:le}}.",
      hanzi: "我明白了。",
      en: "I understand now.",
      ru: "Теперь понятно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:bai2}} {{word:ma}}?",
      hanzi: "你明白吗？",
      en: "Do you understand?",
      ru: "Ты понимаешь?",
    },
  ],
});
