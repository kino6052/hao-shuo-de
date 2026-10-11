import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 504,
  phase: 2,
  zh: "午饭",
  py: "wǔfàn",
  en: "lunch",
  ru: "обед",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:er4}}-{{word:dian3}}-{{word:chi1}}-{{word:de}} {{word:fan4}}"],
  tts: ["十二点吃的饭"],
  literal: "the meal eaten at twelve",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}}-{{word:chi1}}-{{word:de}} {{word:fan4}} {{word:yao4}} {{word:shen2me}}?",
      hanzi: "你十二点吃的饭要什么？",
      en: "What do you want for lunch?",
      ru: "Что ты хочешь на обед?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}} {{word:shi2}}-{{word:er4}}-{{word:dian3}}-{{word:chi1}}-{{word:de}} {{word:fan4}}.",
      hanzi: "我们一起吃十二点吃的饭。",
      en: "Let's have lunch together.",
      ru: "Давай пообедаем вместе.",
    },
  ],
});
