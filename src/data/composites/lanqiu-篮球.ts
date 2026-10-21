import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 953,
  phase: 2,
  zh: "篮球",
  py: "lánqiú",
  en: "basketball",
  ru: "баскетбол",
  pos: "noun",
  hsd: ["{{word:yong4}}-{{word:shou3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}}"],
  tts: ["用手玩儿的球"],
  literal: "the ball you play with your hands",
  fit: "plain",
  topics: ["sports"],
  isA: ["toy-or-game"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yong4}}-{{word:shou3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}}.",
      hanzi: "我要用手玩儿的球。",
      en: "I want a basketball.",
      ru: "Я хочу баскетбольный мяч.",
    },
    {
      pinyin: "{{Word:yong4}}-{{word:shou3}}-{{word:wan2r}}-{{word:de}} {{word:qiu2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "用手玩儿的球在家。",
      en: "The basketball is at home.",
      ru: "Баскетбольный мяч дома.",
    },
  ],
});
