import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1469,
  phase: 3,
  zh: "动作",
  py: "dòngzuò",
  en: "movement, action",
  ru: "движение",
  pos: "noun",
  hsd: ["{{word:dong4}}-{{word:zuo4}}", "{{word:dong4}}"],
  tts: ["动作", "动"],
  fit: "natural",
  topics: ["walking-and-running"],
  isA: ["activity-name"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:dong4}}-{{word:zuo4}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他的动作很快。",
      en: "His movements are fast.",
      ru: "У него быстрые движения.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:dong4}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的动作很好。",
      en: "My movements are good.",
      ru: "У меня хорошие движения.",
    },
  ],
});
