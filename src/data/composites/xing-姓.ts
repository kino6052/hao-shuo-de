import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 833,
  phase: 2,
  zh: "姓",
  py: "xìng",
  en: "surname",
  ru: "фамилия",
  pos: "noun",
  hsd: ["{{word:jia1}} {{word:jiao4}}-{{word:de}}"],
  tts: ["家叫的"],
  literal: "what the family is called",
  fit: "plain",
  note: "Lesson {{lesson:greetings-and-feelings}}: jiào \"…\".",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:jiao4}}-{{word:de}} {{word:shi4}} \"Wáng\".",
      hanzi: "我家叫的是“王”。",
      en: "My surname is Wang.",
      ru: "Моя фамилия Ван.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jia1}} {{word:jiao4}}-{{word:de}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你家叫的是什么？",
      en: "What is your surname?",
      ru: "Какая у тебя фамилия?",
    },
  ],
});
