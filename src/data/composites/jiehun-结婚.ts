import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 455,
  phase: 1,
  zh: "结婚",
  py: "jiéhūn",
  en: "marry",
  ru: "жениться, выйти замуж",
  pos: "verb",
  hsd: ["{{word:liang3}}-ge {{word:ren2}} {{word:bian4}} {{word:yi1}}-ge {{word:jia1}}"],
  tts: ["两个人变一个家"],
  literal: "two people become one family",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:liang3}}-{{light:ge4}} {{word:ren2}} {{word:bian4}} {{word:yi1}}-{{light:ge4}} {{word:jia1}} {{word:le}}.",
      hanzi: "他们两个人变一个家了。",
      en: "They got married.",
      ru: "Они поженились.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:nian2}} {{word:wo3}}-{{word:men}} {{word:liang3}}-{{light:ge4}} {{word:ren2}} {{word:bian4}} {{word:yi1}}-{{light:ge4}} {{word:jia1}}.",
      hanzi: "明年我们两个人变一个家。",
      en: "We're getting married next year.",
      ru: "Мы поженимся в следующем году.",
    },
  ],
});
