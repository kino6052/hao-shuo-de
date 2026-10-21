import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1201,
  phase: 3,
  zh: "证明",
  py: "zhèngmíng",
  en: "prove",
  ru: "доказывать",
  pos: "verb",
  hsd: ["{{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}"],
  tts: ["让人知道是真的"],
  literal: "make people know it is true",
  fit: "plain",
  topics: ["thinking-and-researching"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我让人知道是真的。",
      en: "I prove that it's true.",
      ru: "Я доказываю, что это правда.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你能让人知道是真的吗？",
      en: "Can you prove it?",
      ru: "Ты можешь это доказать?",
    },
  ],
});
