import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 810,
  phase: 2,
  zh: "出门",
  py: "chūmén",
  en: "go out",
  ru: "выходить",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:men2}}", "{{word:chu1}}-{{word:qu4}}"],
  tts: ["出门", "出去"],
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:chu1}}-{{word:men2}} {{word:le}}.",
      hanzi: "他出门了。",
      en: "He went out.",
      ru: "Он вышел из дома.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chu1}}-{{word:men2}}.",
      hanzi: "我要出门。",
      en: "I'm going out.",
      ru: "Я собираюсь выйти.",
    },
  ],
});
