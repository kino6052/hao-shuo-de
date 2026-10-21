import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1504,
  phase: 3,
  zh: "护士",
  py: "hùshi",
  en: "nurse",
  ru: "медсестра, медбрат",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}}-{{word:di4}}-{{light:fang1}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["在把身体做好的地方帮人的人"],
  literal: "a person who helps at the hospital",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zai4}}-{{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}}-{{word:di4}}-{{light:fang1}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是在把身体做好的地方帮人的人。",
      en: "He is a nurse.",
      ru: "Он медбрат.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ma1ma}} {{word:shi4}} {{word:zai4}}-{{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}}-{{word:di4}}-{{light:fang1}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我妈妈是在把身体做好的地方帮人的人。",
      en: "My mother is a nurse.",
      ru: "Моя мама медсестра.",
    },
  ],
});
