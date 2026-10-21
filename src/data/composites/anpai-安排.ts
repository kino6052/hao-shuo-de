import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 638,
  phase: 2,
  zh: "安排",
  py: "ānpái",
  en: "arrange",
  ru: "устроить",
  pos: "verb",
  hsd: [
    "{{word:da3}}-{{word:suan4}}",
    "{{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:fang4}}-{{word:hao3}}",
    "{{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:fang4}} {{word:zai4}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["打算", "把东西放好", "把东西放在好的地方"],
  literal: "plan / put the things right / put the things in good places",
  fit: "natural",
  topics: ["deciding"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:da3}}-{{word:suan4}} {{word:ming2}}-{{word:tian1}} {{word:qu4}}.",
      hanzi: "我打算明天去。",
      en: "I've arranged to go tomorrow.",
      ru: "Я решил пойти завтра.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:dong1}}-{{light:xi1}} {{word:fang4}}-{{word:hao3}} {{word:le}}.",
      hanzi: "他把东西放好了。",
      en: "He has arranged the things.",
      ru: "Он всё расставил.",
    },
  ],
});
