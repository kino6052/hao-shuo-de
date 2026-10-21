import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1062,
  phase: 3,
  zh: "团队",
  py: "tuánduì",
  en: "team",
  ru: "команда",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:qi3}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}"],
  tts: ["一起做的人"],
  literal: "the people who do it together",
  fit: "plain",
  topics: ["people-together"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi4}} {{word:yi1}}-{{word:qi3}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我们是一起做的人。",
      en: "We are a team.",
      ru: "Мы команда.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:yi1}}-{{word:qi3}}-{{word:zuo4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他有一起做的人。",
      en: "He has a team.",
      ru: "У него есть команда.",
    },
  ],
});
