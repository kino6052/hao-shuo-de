import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1400,
  phase: 3,
  zh: "翻译",
  py: "fānyì",
  en: "translate",
  ru: "переводить",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:yi1}}-{{word:zhong3}} {{word:shuo1}}-{{word:de}} {{word:bian4}} {{word:bie2}}-{{word:de}} {{word:shuo1}}-{{word:de}}",
    "{{word:ba3}} {{word:yi1}}-{{word:zhong3}} {{word:hua4}} {{word:bian4}} {{word:bie2}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["把一种说的变别的说的", "把一种话变别的话"],
  literal: "turn one kind of speech into another",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:yi1}}-{{word:zhong3}} {{word:shuo1}}-{{word:de}} {{word:bian4}} {{word:bie2}}-{{word:de}} {{word:shuo1}}-{{word:de}}.",
      hanzi: "我把一种说的变别的说的。",
      en: "I translate.",
      ru: "Я перевожу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:yi1}}-{{word:zhong3}} {{word:hua4}} {{word:bian4}} {{word:bie2}}-{{word:de}} {{word:hua4}}.",
      hanzi: "他把一种话变别的话。",
      en: "He translates.",
      ru: "Он переводит.",
    },
  ],
});
