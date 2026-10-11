import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 578,
  phase: 2,
  zh: "聊天儿",
  py: "liáotiānr",
  en: "chat",
  ru: "болтать",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}"],
  tts: ["一起说话"],
  literal: "talk together",
  fit: "plain",
  note: "Lesson {{lesson:doubling-words}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "我们一起说话。",
      en: "Let's chat.",
      ru: "Давай поболтаем.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he2}} {{word:ni3}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "我要和你一起说话。",
      en: "I want to chat with you.",
      ru: "Я хочу с тобой поболтать.",
    },
  ],
});
