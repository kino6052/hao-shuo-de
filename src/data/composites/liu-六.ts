import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 116,
  phase: 1,
  zh: "六",
  py: "liù",
  en: "six",
  ru: "шесть",
  pos: "number",
  hsd: ["{{word:liu4}}"],
  tts: ["六"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:liu4}} {{word:dian3}} {{word:wo3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "六点我回家。",
      en: "I go home at six.",
      ru: "В шесть я иду домой.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:you3}} {{word:liu4}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "我们有六个人。",
      en: "There are six of us.",
      ru: "Нас шестеро.",
    },
  ],
});
