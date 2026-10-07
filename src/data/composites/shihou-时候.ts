import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 61,
  phase: 1,
  zh: "时候",
  py: "shíhou",
  en: "time, when",
  ru: "время, когда",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{light:hou4}}", "X-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["时候", "…的时间"],
  literal: "the time of X",
  fit: "natural",
  note: "Hao-shuo-de uses shí-jiān (§4d).",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shen2me}} {{word:shi2}}-{{light:hou4}} {{word:lai2}}?",
      hanzi: "你什么时候来？",
      en: "When are you coming?",
      ru: "Когда ты придёшь?",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:fan4}}-{{word:de}} {{word:shi2}}-{{light:hou4}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "吃饭的时候，我不说话。",
      en: "When I eat, I don't talk.",
      ru: "Когда я ем, я не разговариваю.",
    },
  ],
});
