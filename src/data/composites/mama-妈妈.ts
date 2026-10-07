import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 96,
  phase: 1,
  zh: "妈妈",
  py: "māma",
  en: "mom",
  ru: "мама",
  pos: "noun",
  hsd: [
    "{{word:ma1ma}}",
    "{{word:ba4ba}}-{{word:ma1ma}}-{{word:li3}}-{{word:de}} {{word:nv3}}-{{word:ren2}}",
  ],
  tts: ["妈妈", "爸爸妈妈里的女人"],
  literal: "the woman of the parents",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ma1ma}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我妈妈在家。",
      en: "My mom is at home.",
      ru: "Моя мама дома.",
    },
    {
      pinyin: "{{Word:ma1ma}}, {{word:wo3}} {{word:hui2}}-{{word:lai2}} {{word:le}}!",
      hanzi: "妈妈，我回来了！",
      en: "Mom, I'm back!",
      ru: "Мама, я вернулся!",
    },
  ],
});
