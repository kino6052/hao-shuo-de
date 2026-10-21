import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 646,
  phase: 2,
  zh: "建议",
  py: "jiànyì",
  en: "suggest; suggestion",
  ru: "предлагать",
  pos: "verb",
  hsd: ["…, {{word:hao3}} {{word:ma}}?"],
  tts: ["…，好吗？"],
  literal: "…, okay?",
  fit: "natural",
  topics: ["agreeing-and-praising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "我们一起去，好吗？",
      en: "Let's go together, okay?",
      ru: "Пойдём вместе, хорошо?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:tian1}} {{word:lai2}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "你明天来，好吗？",
      en: "Why don't you come tomorrow?",
      ru: "Может, придёшь завтра?",
    },
  ],
});
