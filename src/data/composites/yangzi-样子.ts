import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 767,
  phase: 2,
  zh: "样子",
  py: "yàngzi",
  en: "appearance",
  ru: "вид",
  pos: "noun",
  hsd: ["{{word:yang4}}-{{word:zi}}", "{{word:kan4}}-{{word:qi3}}-{{word:lai2}}"],
  tts: ["样子", "看起来"],
  literal: "looks",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["looks-and-build"],
  isA: ["idea"],
  note: "Lesson {{lesson:direction-and-result}}: X kàn-qǐ-lái hěn hǎo.",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的样子很好。",
      en: "He looks good.",
      ru: "Он хорошо выглядит.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个看起来很好。",
      en: "This looks good.",
      ru: "Это выглядит хорошо.",
    },
  ],
});
