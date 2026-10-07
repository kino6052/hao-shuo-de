import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 94,
  phase: 1,
  zh: "还",
  py: "hái",
  en: "still; also",
  ru: "ещё; тоже",
  pos: "adverb",
  hsd: ["{{word:hai2}}", "{{word:ye3}}"],
  tts: ["还", "也"],
  fit: "word",
  note: "\"Also\" is yě. \"Still\" has no word yet.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hai2}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "他还在睡觉。",
      en: "He's still sleeping.",
      ru: "Он ещё спит.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hai2}} {{word:yao4}} {{word:shen2me}}?",
      hanzi: "你还要什么？",
      en: "What else do you want?",
      ru: "Что тебе ещё нужно?",
    },
  ],
});
