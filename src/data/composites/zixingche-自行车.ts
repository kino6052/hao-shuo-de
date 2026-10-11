import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 460,
  phase: 1,
  zh: "自行车",
  py: "zìxíngchē",
  en: "bicycle",
  ru: "велосипед",
  pos: "noun",
  hsd: ["{{word:yong4}}-{{word:jiao3}}-{{word:dong4}}-{{word:de}} {{word:che1}}"],
  tts: ["用脚动的车"],
  literal: "a car you move with your feet",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kai1}} {{word:yong4}}-{{word:jiao3}}-{{word:dong4}}-{{word:de}} {{word:che1}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "我开用脚动的车去学校。",
      en: "I ride my bike to school.",
      ru: "Я езжу в школу на велосипеде.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yong4}}-{{word:jiao3}}-{{word:dong4}}-{{word:de}} {{word:che1}} {{word:huai4}} {{word:le}}.",
      hanzi: "他的用脚动的车坏了。",
      en: "His bike broke.",
      ru: "Его велосипед сломался.",
    },
  ],
});
