import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 580,
  phase: 2,
  zh: "嗯",
  py: "ǹg",
  en: "uh-huh",
  ru: "угу",
  pos: "interjection",
  hsd: ["\"ng\"", "{{word:dui4}}"],
  tts: ["嗯", "对"],
  fit: "natural",
  examples: [
    {
      pinyin: "\"ng\", {{word:wo3}} {{word:zhi1dao4}} {{word:le}}.",
      hanzi: "嗯，我知道了。",
      en: "Mm, I know.",
      ru: "Угу, я знаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shui3}} {{word:ma}}? \"ng\".",
      hanzi: "你要水吗？嗯。",
      en: "Do you want water? Mm.",
      ru: "Хочешь воды? Угу.",
    },
  ],
});
