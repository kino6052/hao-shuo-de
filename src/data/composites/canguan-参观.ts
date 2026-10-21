import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 743,
  phase: 2,
  zh: "参观",
  py: "cānguān",
  en: "visit, tour",
  ru: "посещать",
  pos: "verb",
  hsd: ["{{word:qu4}} {{word:kan4}}-kan"],
  tts: ["去看看"],
  literal: "go and have a look",
  fit: "natural",
  topics: ["hobbies-and-outings"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:kan4}}-{{light:kan4}}.",
      hanzi: "我去看看。",
      en: "I'm going to take a look around.",
      ru: "Я пойду посмотрю.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:kan4}}-{{light:kan4}} {{word:jia1}}.",
      hanzi: "我们去看看家。",
      en: "We are going to look around the house.",
      ru: "Мы идём осмотреть дом.",
    },
  ],
});
