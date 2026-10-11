import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 518,
  phase: 2,
  zh: "小心",
  py: "xiǎoxīn",
  en: "careful",
  ru: "осторожно",
  pos: "verb",
  hsd: ["{{word:xiao3}}-{{word:xin1}}"],
  tts: ["小心"],
  literal: "small heart",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:xiao3}}-{{word:xin1}}, {{word:zhe4}}-{{word:li3}} {{word:you3}} {{word:shui3}}!",
      hanzi: "小心，这里有水！",
      en: "Careful, there's water here!",
      ru: "Осторожно, здесь вода!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:xiao3}}-{{word:xin1}}.",
      hanzi: "你要小心。",
      en: "You must be careful.",
      ru: "Ты должен быть осторожен.",
    },
  ],
});
