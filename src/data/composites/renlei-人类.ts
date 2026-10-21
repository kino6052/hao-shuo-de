import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1020,
  phase: 3,
  zh: "人类",
  py: "rénlèi",
  en: "humanity",
  ru: "человечество",
  pos: "noun",
  hsd: ["{{word:ren2}}"],
  tts: ["人"],
  fit: "word",
  topics: ["men-and-women"],
  isA: ["person"],
  note: "rén covers people in general.",
  examples: [
    {
      pinyin: "{{Word:ren2}} {{word:bu4}} {{word:neng2}} {{word:fei1}}.",
      hanzi: "人不能飞。",
      en: "Humans can't fly.",
      ru: "Человек не может летать.",
    },
    {
      pinyin: "{{Word:ren2}} {{word:zhi1dao4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "人知道很多。",
      en: "Humans know a lot.",
      ru: "Человечество знает много.",
    },
  ],
});
