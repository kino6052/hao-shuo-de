import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 330,
  phase: 1,
  zh: "起来",
  py: "qǐlái",
  en: "get up",
  ru: "вставать",
  pos: "verb",
  hsd: ["{{word:qi3}}-{{word:lai2}}"],
  tts: ["起来"],
  literal: "rise-come",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:kuai4}} {{word:qi3}}-{{word:lai2}}!",
      hanzi: "快起来！",
      en: "Get up, quick!",
      ru: "Вставай скорей!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qi1}} {{word:dian3}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "我七点起来。",
      en: "I get up at seven.",
      ru: "Я встаю в семь.",
    },
  ],
});
