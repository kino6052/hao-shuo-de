import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 968,
  phase: 2,
  zh: "聊",
  py: "liáo",
  en: "chat",
  ru: "болтать",
  pos: "verb",
  hsd: ["{{word:shuo1}}-shuo"],
  tts: ["说说"],
  literal: "talk a bit",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shuo1}}-{{light:shuo1}}.",
      hanzi: "我们说说。",
      en: "Let's chat.",
      ru: "Давай поболтаем.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}} {{word:shuo1}}-{{light:shuo1}} {{word:ma}}?",
      hanzi: "你和我说说吗？",
      en: "Will you chat with me?",
      ru: "Поболтаешь со мной?",
    },
  ],
});
