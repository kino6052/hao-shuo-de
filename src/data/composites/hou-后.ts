import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 46,
  phase: 1,
  zh: "后",
  py: "hòu",
  en: "behind",
  ru: "сзади",
  pos: "noun",
  hsd: ["{{word:hou4}}"],
  tts: ["后"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:fan4}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
      hanzi: "吃饭后，我睡觉。",
      en: "After eating, I sleep.",
      ru: "После еды я сплю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fang2}}-{{word:zi}} {{word:hou4}}-{{word:mian4}}.",
      hanzi: "他在房子后面。",
      en: "He's behind the house.",
      ru: "Он за домом.",
    },
  ],
});
