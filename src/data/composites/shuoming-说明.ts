import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1204,
  phase: 3,
  zh: "说明",
  py: "shuōmíng",
  en: "explain",
  ru: "объяснять",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:ming2}}"],
  tts: ["说明"],
  literal: "say it clear",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:shuo1}}-{{word:ming2}} {{word:ma}}?",
      hanzi: "你能说明吗？",
      en: "Can you explain?",
      ru: "Ты можешь объяснить?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:ming2}} {{word:le}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我说明了这个。",
      en: "I explained this.",
      ru: "Я объяснил это.",
    },
  ],
});
