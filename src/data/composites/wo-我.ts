import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 22,
  phase: 1,
  zh: "我",
  py: "wǒ",
  en: "I",
  ru: "я",
  pos: "pronoun",
  hsd: ["{{word:wo3}}"],
  tts: ["我"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} \"Ānnà\".",
      hanzi: "我叫安娜。",
      en: "My name is Anna.",
      ru: "Меня зовут Анна.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}!",
      hanzi: "我在这里！",
      en: "I'm here!",
      ru: "Я здесь!",
    },
  ],
});
