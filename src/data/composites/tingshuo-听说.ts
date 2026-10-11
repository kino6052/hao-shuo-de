import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 508,
  phase: 2,
  zh: "听说",
  py: "tīngshuō",
  en: "hear (it said)",
  ru: "слышать, что",
  pos: "verb",
  hsd: ["{{word:ting1}}-{{word:shuo1}}", "{{word:ting1}} {{word:ren2}} {{word:shuo1}}"],
  tts: ["听说", "听人说"],
  literal: "hear say / hear people say",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:shuo1}} {{word:ta1}} {{word:bu4}} {{word:lai2}} {{word:le}}.",
      hanzi: "我听说他不来了。",
      en: "I heard he isn't coming.",
      ru: "Я слышал, что он не придёт.",
    },
    {
      pinyin: "{{Word:ting1}}-{{word:shuo1}} {{word:zhe4}}-{{word:li3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "听说这里很好。",
      en: "I hear it's nice here.",
      ru: "Говорят, здесь хорошо.",
    },
  ],
});
