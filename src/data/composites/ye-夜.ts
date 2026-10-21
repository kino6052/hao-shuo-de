import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1303,
  phase: 3,
  zh: "夜",
  py: "yè",
  en: "night",
  ru: "ночь",
  pos: "noun",
  hsd: ["{{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["月的时间"],
  literal: "moon time",
  fit: "plain",
  topics: ["times-of-day"],
  isA: ["time-of-day-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:shui4jiao4}}.",
      hanzi: "我在月的时间睡觉。",
      en: "I sleep at night.",
      ru: "Я сплю ночью.",
    },
    {
      pinyin: "{{Word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "月的时间很冷。",
      en: "The night is cold.",
      ru: "Ночь холодная.",
    },
  ],
});
