import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 541,
  phase: 2,
  zh: "要是",
  py: "yàoshi",
  en: "if",
  ru: "если",
  pos: "conjunction",
  hsd: ["{{word:yao4}}-{{word:shi4}}", "{{word:ru2guo3}}"],
  tts: ["要是", "如果"],
  literal: "want-is",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:yao4}}-{{word:shi4}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:qu4}}.",
      hanzi: "要是你来，我就去。",
      en: "If you come, I'll go.",
      ru: "Если ты придёшь, я пойду.",
    },
    {
      pinyin: "{{Word:yao4}}-{{word:shi4}} {{word:leng3}}, {{word:ni3}} {{word:jiu4}} {{word:yao4}} {{word:yi1fu}}.",
      hanzi: "要是冷，你就要衣服。",
      en: "If it's cold, you'll want clothes.",
      ru: "Если холодно, тебе нужна одежда.",
    },
  ],
});
