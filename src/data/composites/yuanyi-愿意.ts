import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 401,
  phase: 1,
  zh: "愿意",
  py: "yuànyì",
  en: "be willing",
  ru: "быть готовым",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:qu4}} {{word:ma}}?",
      hanzi: "你要和我一起去吗？",
      en: "Are you willing to go with me?",
      ru: "Ты согласен пойти со мной?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bang1}} {{word:ni3}}.",
      hanzi: "我要帮你。",
      en: "I'm willing to help you.",
      ru: "Я готов тебе помочь.",
    },
  ],
});
