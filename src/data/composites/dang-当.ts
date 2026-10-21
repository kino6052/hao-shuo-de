import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 648,
  phase: 2,
  zh: "当",
  py: "dāng",
  en: "serve as; when",
  ru: "быть; когда",
  pos: "verb",
  hsd: ["X-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["X的时间"],
  literal: "the time of X",
  fit: "plain",
  topics: ["adverbs"],
  isA: ["auxiliary"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shui4jiao4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:ta1}} {{word:lai2}} {{word:le}}.",
      hanzi: "我睡觉的时间，他来了。",
      en: "When I was sleeping, he came.",
      ru: "Когда я спал, он пришёл.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:chi1}}-{{word:fan4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}, {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "你吃饭的时间，我在家。",
      en: "While you eat, I'm at home.",
      ru: "Пока ты ешь, я дома.",
    },
  ],
});
