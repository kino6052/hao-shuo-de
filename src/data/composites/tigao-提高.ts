import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 659,
  phase: 2,
  zh: "提高",
  py: "tígāo",
  en: "raise, improve",
  ru: "повысить",
  pos: "verb",
  hsd: ["{{word:bi3}} {{word:qian2}} {{word:zuo4}}-{{word:hao3}} {{word:yi1}}-{{word:dian3}}"],
  tts: ["比前做好一点"],
  literal: "do it a bit better than before",
  fit: "natural",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bi3}} {{word:qian2}} {{word:zuo4}}-{{word:hao3}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "我要比前做好一点。",
      en: "I want to do better than before.",
      ru: "Я хочу делать лучше, чем раньше.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:bi3}} {{word:qian2}} {{word:zuo4}}-{{word:hao3}} {{word:yi1}}-{{word:dian3}} {{word:ma}}?",
      hanzi: "你能比前做好一点吗？",
      en: "Can you do better than before?",
      ru: "Ты можешь сделать лучше, чем раньше?",
    },
  ],
});
