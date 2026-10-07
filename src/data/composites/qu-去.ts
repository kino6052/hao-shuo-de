import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 20,
  phase: 1,
  zh: "去",
  py: "qù",
  en: "go",
  ru: "идти",
  pos: "verb",
  hsd: ["{{word:qu4}}"],
  tts: ["去"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "我们去学校。",
      en: "We're going to school.",
      ru: "Мы идём в школу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ming2}}-{{word:tian1}} {{word:qu4}}.",
      hanzi: "他明天去。",
      en: "He's going tomorrow.",
      ru: "Он пойдёт завтра.",
    },
  ],
});
