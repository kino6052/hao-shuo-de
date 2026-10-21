import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1283,
  phase: 3,
  zh: "只要",
  py: "zhǐyào",
  en: "as long as",
  ru: "если только",
  pos: "conjunction",
  hsd: ["{{word:zhi3}}-{{word:yao4}}", "{{word:ru2guo3}}"],
  tts: ["只要", "如果"],
  literal: "if",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["if-unless-and-even-if"],
  isA: ["conjunction"],
  note: "rúguǒ X, jiù Y.",
  examples: [
    {
      pinyin: "{{Word:zhi3}}-{{word:yao4}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:hao3}}.",
      hanzi: "只要你来，我就好。",
      en: "As long as you come, I'm fine.",
      ru: "Лишь бы ты пришёл, и мне хорошо.",
    },
    {
      pinyin: "{{Word:zhi3}}-{{word:yao4}} {{word:you3}} {{word:shui3}}, {{word:wo3}} {{word:jiu4}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "只要有水，我就能做。",
      en: "As long as there is water, I can do it.",
      ru: "Лишь бы была вода, и я смогу.",
    },
  ],
});
