import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 544,
  phase: 2,
  zh: "起床",
  py: "qǐchuáng",
  en: "get up",
  ru: "вставать",
  pos: "verb",
  hsd: ["{{word:qi3}}-{{word:lai2}}"],
  tts: ["起来"],
  literal: "rise",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qi1}}-{{word:dian3}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "我七点起来。",
      en: "I get up at seven.",
      ru: "Я встаю в семь.",
    },
    {
      pinyin: "{{Word:kuai4}} {{word:qi3}}-{{word:lai2}}!",
      hanzi: "快起来！",
      en: "Get up quickly!",
      ru: "Вставай скорее!",
    },
  ],
});
