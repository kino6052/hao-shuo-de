import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 830,
  phase: 2,
  zh: "女朋友",
  py: "nǚpéngyou",
  en: "girlfriend",
  ru: "девушка",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}}"],
  tts: ["女人的爱人"],
  literal: "the woman one loves",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}}.",
      hanzi: "她是我的女人的爱人。",
      en: "She is my girlfriend.",
      ru: "Она моя девушка.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}-{{word:de}} {{word:ai4}}-{{word:ren2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我的女人的爱人在家。",
      en: "My girlfriend is at home.",
      ru: "Моя девушка дома.",
    },
  ],
});
