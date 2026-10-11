import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 211,
  phase: 1,
  zh: "还是",
  py: "háishi",
  en: "or (choosing)",
  ru: "или",
  pos: "adverb",
  hsd: ["{{word:hai2}}-{{word:shi4}}"],
  tts: ["还是"],
  fit: "natural",
  note: "See the Lesson {{lesson:inside-a-sentence}} questions.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shui3}} {{word:hai2}}-{{word:shi4}} {{word:fan4}}?",
      hanzi: "你要水还是饭？",
      en: "Do you want water or food?",
      ru: "Тебе воды или еды?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ming2}}-{{word:tian1}} {{word:hai2}}-{{word:shi4}} {{word:hou4}}-{{word:tian1}} {{word:lai2}}?",
      hanzi: "你明天还是后天来？",
      en: "Are you coming tomorrow or the day after?",
      ru: "Ты придёшь завтра или послезавтра?",
    },
  ],
});
