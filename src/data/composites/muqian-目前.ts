import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1384,
  phase: 3,
  zh: "目前",
  py: "mùqián",
  en: "at present",
  ru: "в настоящее время",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:zai4}}"],
  tts: ["现在"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我现在在家。",
      en: "At present I am at home.",
      ru: "Сейчас я дома.",
    },
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:wo3}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "现在我要吃。",
      en: "At present I want to eat.",
      ru: "Сейчас я хочу есть.",
    },
  ],
});
