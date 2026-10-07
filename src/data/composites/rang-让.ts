import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 204,
  phase: 1,
  zh: "让",
  py: "ràng",
  en: "let",
  ru: "позволять",
  pos: "verb",
  hsd: [
    "{{word:rang4}}",
    "{{word:jiao4}} X + verb",
    "{{word:wo3}} {{word:lai2}} + verb",
    "{{word:gei3}} {{word:wo3}} + verb",
  ],
  tts: ["让", "叫X…", "我来…", "给我…"],
  literal: "have X … / I come … / give me …",
  fit: "word",
  note: "Lesson {{lesson:everyday-patterns}}: jiào tā jìn-lái (let him in), bù jiào (won't let), wǒ lái (let me), gěi wǒ kàn yī-xià (let me see).",
  examples: [
    {
      pinyin: "{{Word:rang4}} {{word:wo3}} {{word:kan4}}-{{word:kan4}}.",
      hanzi: "让我看看。",
      en: "Let me see.",
      ru: "Дай посмотреть.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:bu4}} {{word:rang4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "妈妈不让我去。",
      en: "Mom won't let me go.",
      ru: "Мама меня не пускает.",
    },
  ],
});
