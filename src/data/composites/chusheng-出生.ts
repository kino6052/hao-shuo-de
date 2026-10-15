import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 614,
  phase: 2,
  zh: "出生",
  py: "chūshēng",
  en: "be born",
  ru: "родиться",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:sheng1}}", "{{word:sheng1}}"],
  tts: ["出生", "生"],
  literal: "come out, be born",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:zhe4}}-{{word:li3}} {{word:chu1}}-{{word:sheng1}}.",
      hanzi: "我在这里出生。",
      en: "I was born here.",
      ru: "Я родился здесь.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:jia1}} {{word:chu1}}-{{word:sheng1}} {{word:le}}.",
      hanzi: "小孩子在家出生了。",
      en: "The child was born at home.",
      ru: "Ребёнок родился дома.",
    },
  ],
});
