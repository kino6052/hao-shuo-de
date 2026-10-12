import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1251,
  phase: 3,
  zh: "保",
  py: "bǎo",
  en: "protect",
  ru: "охранять",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:rang4}} X {{word:bian4}} {{word:huai4}}",
    "{{word:bang1}} X {{word:bu4}} {{word:bian4}} {{word:huai4}}",
  ],
  tts: ["不让X变坏", "帮X不变坏"],
  literal: "help X not get bad",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:rang4}} {{word:ta1}} {{word:bian4}} {{word:huai4}}.",
      hanzi: "我不让它变坏。",
      en: "I protect it.",
      ru: "Я это берегу.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}}-{{word:de}} {{word:che1}} {{word:bu4}} {{word:bian4}} {{word:huai4}}.",
      hanzi: "我帮你的车不变坏。",
      en: "I look after your car so it doesn't get ruined.",
      ru: "Я присматриваю за твоей машиной, чтобы она не испортилась.",
    },
  ],
});
