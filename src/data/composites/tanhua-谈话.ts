import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1416,
  phase: 3,
  zh: "谈话",
  py: "tánhuà",
  en: "talk, chat",
  ru: "беседовать",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}", "{{word:shuo1}}"],
  tts: ["一起说话", "说"],
  fit: "word",
  topics: ["chatting"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "我们一起说话。",
      en: "We chat together.",
      ru: "Мы разговариваем вместе.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "他和我一起说话。",
      en: "He chats with me.",
      ru: "Он разговаривает со мной.",
    },
  ],
});
