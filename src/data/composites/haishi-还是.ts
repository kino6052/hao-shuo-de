import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 211,
  phase: 1,
  zh: "还是",
  py: "háishi",
  en: "or (choosing)",
  ru: "или",
  pos: "adverb",
  hsd: ["{{word:hai2}}-{{word:shi4}}", "{{word:huo4}}-{{word:zhe3}}"],
  tts: ["还是", "或者"],
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
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:huo4}}-{{word:zhe3}} {{word:hou4}}-{{word:tian1}}.",
      hanzi: "明天或者后天。",
      en: "Tomorrow or the day after.",
      ru: "Завтра или послезавтра.",
    },
  ],
});
