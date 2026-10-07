import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 291,
  phase: 1,
  zh: "介绍",
  py: "jièshào",
  en: "introduce",
  ru: "представлять",
  pos: "verb",
  hsd: ["{{word:rang4}} X {{word:zhi1dao4}}"],
  tts: ["让X知道"],
  literal: "let X know",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:rang4}} {{word:ni3}} {{word:zhi1dao4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我让你知道我的家。",
      en: "Let me introduce my family.",
      ru: "Позволь представить мою семью.",
    },
    {
      pinyin: "{{Word:rang4}} {{word:ta1}}-{{word:men}} {{word:zhi1dao4}} {{word:ni3}}-{{word:de}} {{word:ming2}}-{{light:zi4}}.",
      hanzi: "让他们知道你的名字。",
      en: "Introduce yourself to them.",
      ru: "Представься им.",
    },
  ],
});
