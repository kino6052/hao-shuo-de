import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1347,
  phase: 3,
  zh: "救",
  py: "jiù",
  en: "save, rescue",
  ru: "спасать",
  pos: "verb",
  hsd: ["{{word:bang1}} X {{word:bu4}} {{word:si3}}"],
  tts: ["帮X不死"],
  literal: "help X not die",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ta1}} {{word:bu4}} {{word:si3}}.",
      hanzi: "我帮他不死。",
      en: "I save him.",
      ru: "Я спасаю его.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:bang1}} {{word:wo3}} {{word:bu4}} {{word:si3}} {{word:ma}}?",
      hanzi: "你能帮我不死吗？",
      en: "Can you save me?",
      ru: "Ты можешь меня спасти?",
    },
  ],
});
