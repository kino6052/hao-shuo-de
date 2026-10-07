import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 315,
  phase: 1,
  zh: "最后",
  py: "zuìhòu",
  en: "last, final",
  ru: "последний",
  pos: "noun",
  hsd: ["{{word:zui4}}-{{word:hou4}}"],
  tts: ["最后"],
  literal: "most behind",
  fit: "natural",
  note: "Lesson {{lesson:comparing}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}} {{word:le}}.",
      hanzi: "他最后来了。",
      en: "He came last.",
      ru: "Он пришёл последним.",
    },
    {
      pinyin: "{{Word:zui4}}-{{word:hou4}}, {{word:wo3}}-{{word:men}} {{word:hui2}} {{word:jia1}} {{word:le}}.",
      hanzi: "最后，我们回家了。",
      en: "In the end, we went home.",
      ru: "В конце концов мы пошли домой.",
    },
  ],
});
