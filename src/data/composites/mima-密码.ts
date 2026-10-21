import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1314,
  phase: 3,
  zh: "密码",
  py: "mìmǎ",
  en: "password",
  ru: "пароль",
  pos: "noun",
  hsd: ["{{word:jin4}}-{{word:qu4}} {{word:yao4}}-{{word:de}} {{word:hao4}}"],
  tts: ["进去要的号"],
  literal: "the number you need to get in",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:jin4}}-{{word:qu4}} {{word:yao4}}-{{word:de}} {{word:hao4}}.",
      hanzi: "我不知道进去要的号。",
      en: "I don't know the password.",
      ru: "Я не знаю пароль.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:jin4}}-{{word:qu4}} {{word:yao4}}-{{word:de}} {{word:hao4}} {{word:ma}}?",
      hanzi: "你有进去要的号吗？",
      en: "Do you have the password?",
      ru: "У тебя есть пароль?",
    },
  ],
});
