import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 384,
  phase: 1,
  zh: "家人",
  py: "jiārén",
  en: "family member",
  ru: "член семьи",
  pos: "noun",
  hsd: ["{{word:jia1}}-{{word:ren2}}", "{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}"],
  tts: ["家人", "家里的人"],
  literal: "home person / people in the home",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}}-{{word:ren2}} {{word:dou1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我的家人都在家。",
      en: "My whole family is at home.",
      ru: "Вся моя семья дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:jia1}}-{{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "他和家人一起吃饭。",
      en: "He eats with his family.",
      ru: "Он ест вместе с семьёй.",
    },
  ],
});
