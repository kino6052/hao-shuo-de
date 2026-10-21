import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1489,
  phase: 3,
  zh: "平常",
  py: "píngcháng",
  en: "usual, ordinary",
  ru: "обычный",
  pos: "adjective",
  hsd: [
    "{{word:ping2}}-{{word:chang2}}",
    "{{word:he2}} {{word:bie2}}-{{word:de}} {{word:yi1}}-{{word:yang4}}",
  ],
  tts: ["平常", "和别的一样"],
  literal: "like the others",
  fit: "natural",
  topics: ["normal-and-ordinary"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:ping2}}-{{word:chang2}}.",
      hanzi: "他的家很平常。",
      en: "His home is ordinary.",
      ru: "Его дом самый обычный.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1}}-{{word:tian1}} {{word:hen3}} {{word:ping2}}-{{word:chang2}}.",
      hanzi: "我的一天很平常。",
      en: "My day is ordinary.",
      ru: "Мой день самый обычный.",
    },
  ],
});
