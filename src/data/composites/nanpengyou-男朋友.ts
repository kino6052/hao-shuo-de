import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 870,
  phase: 2,
  zh: "男朋友",
  py: "nánpéngyou",
  en: "boyfriend",
  ru: "парень",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}}"],
  tts: ["男人的爱人"],
  literal: "the man one loves",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}}.",
      hanzi: "他是我的男人的爱人。",
      en: "He is my boyfriend.",
      ru: "Он мой парень.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:nan2}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我的男人的爱人在家。",
      en: "My boyfriend is at home.",
      ru: "Мой парень дома.",
    },
  ],
});
