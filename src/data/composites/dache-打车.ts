import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 939,
  phase: 2,
  zh: "打车",
  py: "dǎchē",
  en: "take a taxi",
  ru: "взять такси",
  pos: "verb",
  hsd: ["{{word:da3}} {{word:che1}}", "{{word:jiao4}} {{word:che1}}"],
  tts: ["打车", "叫车"],
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:da3}} {{word:che1}}.",
      hanzi: "我要打车。",
      en: "I want to take a taxi.",
      ru: "Я хочу взять такси.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:da3}} {{word:che1}} {{word:qu4}} {{word:ma}}?",
      hanzi: "你打车去吗？",
      en: "Are you taking a taxi?",
      ru: "Ты поедешь на такси?",
    },
  ],
});
