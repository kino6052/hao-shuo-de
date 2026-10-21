import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 958,
  phase: 2,
  zh: "赶",
  py: "gǎn",
  en: "hurry",
  ru: "спешить",
  pos: "verb",
  hsd: ["{{word:kuai4}} {{word:qu4}}"],
  tts: ["快去"],
  literal: "go fast",
  fit: "natural",
  topics: ["walking-and-running"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kuai4}} {{word:qu4}}.",
      hanzi: "我快去。",
      en: "I'm hurrying.",
      ru: "Я спешу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kuai4}} {{word:qu4}}!",
      hanzi: "你快去！",
      en: "Hurry up!",
      ru: "Спеши!",
    },
  ],
});
