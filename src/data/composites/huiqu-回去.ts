import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 823,
  phase: 2,
  zh: "回去",
  py: "huíqù",
  en: "go back",
  ru: "вернуться",
  pos: "verb",
  hsd: ["{{word:hui2}}-{{word:qu4}}"],
  tts: ["回去"],
  fit: "natural",
  kinds: ["built"],
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hui2}}-{{word:qu4}} {{word:le}}.",
      hanzi: "我回去了。",
      en: "I'm going back.",
      ru: "Я возвращаюсь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hui2}}-{{word:qu4}} {{word:ma}}?",
      hanzi: "你回去吗？",
      en: "Are you going back?",
      ru: "Ты возвращаешься?",
    },
  ],
});
