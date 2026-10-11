import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 407,
  phase: 1,
  zh: "打开",
  py: "dǎkāi",
  en: "open",
  ru: "открывать",
  pos: "verb",
  hsd: ["{{word:da3}}-{{word:kai1}}", "{{word:kai1}}"],
  tts: ["打开", "开"],
  literal: "hit-open",
  fit: "natural",
  note: "A real pair: dǎ + kāi.",
  examples: [
    {
      pinyin: "{{Word:da3}}-{{word:kai1}} {{word:men2}}.",
      hanzi: "打开门。",
      en: "Open the door.",
      ru: "Открой дверь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:da3}}-{{word:kai1}} {{word:le}} {{word:bao1}}.",
      hanzi: "他打开了包。",
      en: "He opened the bag.",
      ru: "Он открыл сумку.",
    },
  ],
});
