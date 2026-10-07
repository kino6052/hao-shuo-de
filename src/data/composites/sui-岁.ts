import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 386,
  phase: 1,
  zh: "岁",
  py: "suì",
  en: "(years of age)",
  ru: "лет (о возрасте)",
  pos: "classifier",
  hsd: ["{{word:ni3}} {{word:duo1}} {{word:da4}}?"],
  tts: ["你多大？"],
  literal: "how big are you?",
  fit: "natural",
  note: "The answer is just the number: wǒ èr-shí.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:duo1}} {{word:da4}}?",
      hanzi: "你多大？",
      en: "How old are you?",
      ru: "Сколько тебе лет?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:duo1}} {{word:da4}}?",
      hanzi: "你的孩子多大？",
      en: "How old is your child?",
      ru: "Сколько лет твоему ребёнку?",
    },
  ],
});
