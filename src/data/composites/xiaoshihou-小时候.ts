import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 837,
  phase: 2,
  zh: "小时候",
  py: "xiǎoshíhou",
  en: "childhood",
  ru: "детство",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:shi2}}-{{light:hou4}}",
    "{{word:xiao3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["小时候", "小的时间"],
  literal: "the small time",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["babies-and-children"],
  isA: ["time-span"],
  note: "wǒ xiǎo-de shí-jiān: when I was little.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiao3}}-{{word:shi2}}-{{light:hou4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我小时候在家。",
      en: "As a child I was at home.",
      ru: "В детстве я был дома.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:shi2}}-{{light:hou4}} {{word:wo3}} {{word:ai4}} {{word:shui3}}.",
      hanzi: "小时候我爱水。",
      en: "As a child I loved water.",
      ru: "В детстве я любил воду.",
    },
  ],
});
