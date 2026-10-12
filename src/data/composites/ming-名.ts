import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1289,
  phase: 3,
  zh: "名",
  py: "míng",
  en: "name",
  ru: "имя",
  pos: "noun",
  hsd: ["{{word:jiao4}}-{{word:de}} {{word:ci2}}", "{{word:ni3}} {{word:jiao4}}-{{word:shen2me}}"],
  tts: ["叫的词", "你叫什么"],
  literal: "the word it is called / what are you called",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的叫的词是什么？",
      en: "What's your name?",
      ru: "Как тебя зовут?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ta1}} {{word:jiao4}}-{{word:de}} {{word:ci2}}.",
      hanzi: "我爱他叫的词。",
      en: "I like his name.",
      ru: "Мне нравится его имя.",
    },
  ],
});
