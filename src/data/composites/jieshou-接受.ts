import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 657,
  phase: 2,
  zh: "接受",
  py: "jiēshòu",
  en: "accept",
  ru: "принимать",
  pos: "verb",
  hsd: ["{{word:na2}}", "{{word:shuo1}} {{word:hao3}}"],
  tts: ["拿", "说好"],
  literal: "take / say okay",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:na2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我拿这个。",
      en: "I'll accept this.",
      ru: "Я возьму это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:hao3}} {{word:le}}.",
      hanzi: "他说好了。",
      en: "He said yes.",
      ru: "Он согласился.",
    },
  ],
});
