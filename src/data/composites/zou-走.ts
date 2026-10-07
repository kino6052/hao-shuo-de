import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 73,
  phase: 1,
  zh: "走",
  py: "zǒu",
  en: "walk; leave",
  ru: "идти; уходить",
  pos: "verb",
  hsd: ["{{word:zou3}}", "{{word:yong4}} {{word:jiao3}} {{word:qu4}}", "{{word:qu4}}"],
  tts: ["走", "用脚去", "去"],
  literal: "go with your feet",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zou3}} {{word:le}}.",
      hanzi: "我要走了。",
      en: "I have to go.",
      ru: "Мне пора идти.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zou3}}-{{word:lu4}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "他走路去学校。",
      en: "He walks to school.",
      ru: "Он ходит в школу пешком.",
    },
  ],
});
