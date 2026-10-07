import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 100,
  phase: 1,
  zh: "关系",
  py: "guānxì",
  en: "relationship",
  ru: "отношения",
  pos: "noun",
  hsd: ["{{word:guan1xi}}"],
  tts: ["关系"],
  fit: "word",
  note: "Lesson {{lesson:inside-a-sentence}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我们的关系很好。",
      en: "We get along well.",
      ru: "У нас хорошие отношения.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:he2}} {{word:ni3}} {{word:mei2}}-{{word:you3}} {{word:guan1xi}}.",
      hanzi: "这和你没有关系。",
      en: "This has nothing to do with you.",
      ru: "Это тебя не касается.",
    },
  ],
});
