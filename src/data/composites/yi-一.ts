import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1,
  phase: 1,
  zh: "一",
  py: "yī",
  en: "one",
  ru: "один",
  pos: "number",
  hsd: ["{{word:yi1}}"],
  tts: ["一"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "我有一个包。",
      en: "I have one bag.",
      ru: "У меня одна сумка.",
    },
    {
      pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}!",
      hanzi: "一、二、三！",
      en: "One, two, three!",
      ru: "Раз, два, три!",
    },
  ],
});
