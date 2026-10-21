import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1102,
  phase: 3,
  zh: "指出",
  py: "zhǐchū",
  en: "point out",
  ru: "указать",
  pos: "verb",
  hsd: ["{{word:rang4}} {{word:ren2}} {{word:kan4}}-{{word:dao4}}"],
  tts: ["让人看到"],
  literal: "make people see it",
  fit: "plain",
  topics: ["talking"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:rang4}} {{word:ren2}} {{word:kan4}}-{{word:dao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我让人看到这个。",
      en: "I point this out to people.",
      ru: "Я указываю людям на это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:rang4}} {{word:ren2}} {{word:kan4}}-{{word:dao4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "他让人看到那个。",
      en: "He pointed that out to people.",
      ru: "Он указал людям на то.",
    },
  ],
});
