import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 152,
  phase: 1,
  zh: "名字",
  py: "míngzi",
  en: "name",
  ru: "имя",
  pos: "noun",
  hsd: ["{{word:ming2}}-{{light:zi4}}", "{{word:jiao4}}-{{word:de}} {{word:ci2}}"],
  tts: ["名字", "叫的词"],
  literal: "the word you're called",
  fit: "natural",
  note: "Ask with nǐ jiào shénme?",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:ming2}}-{{light:zi4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的名字是什么？",
      en: "What's your name?",
      ru: "Как тебя зовут?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ta1}}-{{word:de}} {{word:ming2}}-{{light:zi4}}.",
      hanzi: "我不知道他的名字。",
      en: "I don't know his name.",
      ru: "Я не знаю, как его зовут.",
    },
  ],
});
