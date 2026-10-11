import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 848,
  phase: 2,
  zh: "报名",
  py: "bàomíng",
  en: "sign up",
  ru: "записаться",
  pos: "verb",
  hsd: ["{{word:xie3}} {{word:ni3}} {{word:jiao4}} {{word:shen2me}}"],
  tts: ["写你叫什么"],
  literal: "write what you're called",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:xie3}} {{word:ni3}} {{word:jiao4}} {{word:shen2me}}.",
      hanzi: "你写你叫什么。",
      en: "Write down your name to sign up.",
      ru: "Запиши своё имя, чтобы записаться.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:xie3}} {{word:ni3}} {{word:jiao4}} {{word:shen2me}}.",
      hanzi: "你要写你叫什么。",
      en: "You have to write your name to sign up.",
      ru: "Он записывается.",
    },
  ],
});
