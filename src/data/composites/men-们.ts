import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 141,
  phase: 1,
  zh: "们",
  py: "men",
  en: "more than one person: after a pointer or a word for people",
  ru: "больше одного человека: после указательного слова или слова о людях",
  pos: "suffix",
  hsd: ["{{word:men}}"],
  tts: ["们"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:zai4}} {{word:wan2r}}.",
      hanzi: "孩子们在玩儿。",
      en: "The children are playing.",
      ru: "Дети играют.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:men}} {{word:hao3}}!",
      hanzi: "你们好！",
      en: "Hello, everyone!",
      ru: "Здравствуйте!",
    },
  ],
});
