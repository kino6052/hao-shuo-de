import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 188,
  phase: 1,
  zh: "然后",
  py: "ránhòu",
  en: "then, afterwards",
  ru: "потом",
  pos: "conjunction",
  hsd: ["X-{{word:wan2}} {{word:hou4}}"],
  tts: ["…完后"],
  literal: "after finishing X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}}-{{word:men}} {{word:qu4}} {{word:wan2r}}.",
      hanzi: "吃完后，我们去玩儿。",
      en: "We'll eat, then go and play.",
      ru: "Поедим, а потом пойдём гулять.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xie3}}-{{word:wan2}} {{word:hou4}}, {{word:gei3}} {{word:ni3}} {{word:kan4}}.",
      hanzi: "我写完后，给你看。",
      en: "I'll finish writing, then show you.",
      ru: "Я допишу и потом тебе покажу.",
    },
  ],
});
