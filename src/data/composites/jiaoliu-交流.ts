import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1238,
  phase: 3,
  zh: "交流",
  py: "jiāoliú",
  en: "communicate, exchange; communication",
  ru: "общаться, обмениваться",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}, {{word:yi1}}-{{word:qi3}} {{word:ting1}}"],
  tts: ["一起说，一起听"],
  literal: "talk together, listen together",
  fit: "plain",
  topics: ["chatting"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}, {{word:yi1}}-{{word:qi3}} {{word:ting1}}.",
      hanzi: "我们一起说，一起听。",
      en: "We exchange ideas.",
      ru: "Мы обмениваемся мыслями.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}, {{word:yi1}}-{{word:qi3}} {{word:ting1}}.",
      hanzi: "你和我一起说，一起听。",
      en: "You and I talk it over.",
      ru: "Мы с тобой всё обсуждаем.",
    },
  ],
});
