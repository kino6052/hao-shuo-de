import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 564,
  phase: 2,
  zh: "没关系",
  py: "méi guānxi",
  en: "never mind",
  ru: "ничего страшного",
  pos: "phrase",
  hsd: ["{{word:mei2}}-{{word:guan1xi}}", "{{word:mei2}}-{{word:you3}} {{word:guan1xi}}"],
  tts: ["没关系", "没有关系"],
  literal: "no connection",
  fit: "natural",
  note: "Lesson {{lesson:inside-a-sentence}}.",
  examples: [
    {
      pinyin: "{{Word:mei2}}-{{word:guan1xi}}, {{word:wo3}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "没关系，我不怕。",
      en: "Never mind, I'm not afraid.",
      ru: "Ничего, я не боюсь.",
    },
    {
      pinyin: "{{Word:mei2}}-{{word:guan1xi}}, {{word:ming2}}-{{word:tian1}} {{word:lai2}}.",
      hanzi: "没关系，明天来。",
      en: "Never mind, come tomorrow.",
      ru: "Ничего, приходи завтра.",
    },
  ],
});
