import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1151,
  phase: 3,
  zh: "疑问",
  py: "yíwèn",
  en: "doubt, question",
  ru: "сомнение, вопрос",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:zhi1dao4}} {{word:dui4}} {{word:bu4}} {{word:dui4}}",
    "{{word:ke3}}-{{word:neng2}} {{word:dui4}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:dui4}}",
  ],
  tts: ["不知道对不对", "可能对可能不对"],
  literal: "don't know if it's right or not / may be right, may be wrong",
  fit: "plain",
  topics: ["asking-and-answering"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:dui4}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "我不知道对不对。",
      en: "I have a doubt.",
      ru: "У меня есть сомнение.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ke3}}-{{word:neng2}} {{word:dui4}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:dui4}}.",
      hanzi: "这个可能对可能不对。",
      en: "This is open to question.",
      ru: "Это под вопросом.",
    },
  ],
});
