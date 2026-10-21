import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1306,
  phase: 3,
  zh: "姓名",
  py: "xìngmíng",
  en: "full name",
  ru: "имя и фамилия",
  pos: "noun",
  hsd: ["{{word:jiao4}}-{{word:de}} {{word:ci2}}", "{{word:jiao4}}-{{word:shen2me}}"],
  tts: ["叫的词", "叫什么"],
  literal: "the word it is called / what it is called",
  fit: "plain",
  topics: ["greetings-and-thanks"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的叫的词是什么？",
      en: "What's your full name?",
      ru: "Как твоё полное имя?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao4}}-{{word:shen2me}}?",
      hanzi: "他叫什么？",
      en: "What's his name?",
      ru: "Как его зовут?",
    },
  ],
});
