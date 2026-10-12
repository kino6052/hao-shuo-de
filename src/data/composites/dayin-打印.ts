import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1339,
  phase: 3,
  zh: "打印",
  py: "dǎyìn",
  en: "print",
  ru: "печатать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}-{{word:chu1}}-{{word:lai2}}"],
  tts: ["用工具写出来"],
  literal: "have a tool write it out",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}-{{word:chu1}}-{{word:lai2}}.",
      hanzi: "我用工具写出来。",
      en: "I print it.",
      ru: "Я распечатываю это.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}-{{word:chu1}}-{{word:lai2}} {{word:ma}}?",
      hanzi: "你能用工具写出来吗？",
      en: "Can you print it?",
      ru: "Ты можешь это распечатать?",
    },
  ],
});
