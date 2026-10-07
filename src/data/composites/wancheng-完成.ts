import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 276,
  phase: 1,
  zh: "完成",
  py: "wánchéng",
  en: "complete",
  ru: "завершить",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:wan2}}"],
  tts: ["做完"],
  literal: "do-finish",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我做完了。",
      en: "I've finished.",
      ru: "Я закончил.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:tian1}} {{word:neng2}} {{word:zuo4}}-{{word:wan2}} {{word:ma}}?",
      hanzi: "你明天能做完吗？",
      en: "Can you finish it tomorrow?",
      ru: "Ты сможешь закончить завтра?",
    },
  ],
});
