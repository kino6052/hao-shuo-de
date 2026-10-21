import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 906,
  phase: 2,
  zh: "锻炼",
  py: "duànliàn",
  en: "exercise",
  ru: "тренироваться",
  pos: "verb",
  hsd: ["{{word:dong4}} {{word:shen1ti3}}"],
  tts: ["动身体"],
  literal: "move the body",
  fit: "plain",
  topics: ["healthy-habits"],
  isA: ["body-action"],
  note: "Same as 运动.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dong4}} {{word:shen1ti3}}.",
      hanzi: "我动身体。",
      en: "I exercise.",
      ru: "Я занимаюсь спортом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:dong4}} {{word:shen1ti3}}.",
      hanzi: "他要动身体。",
      en: "He wants to exercise.",
      ru: "Он хочет потренироваться.",
    },
  ],
});
