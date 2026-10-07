import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 300,
  phase: 1,
  zh: "医院",
  py: "yīyuàn",
  en: "hospital",
  ru: "больница",
  pos: "noun",
  hsd: [
    "{{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["把身体做好的地方"],
  literal: "the place that makes bodies good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他在把身体做好的地方。",
      en: "He's in hospital.",
      ru: "Он в больнице.",
    },
    {
      pinyin: "{{Word:ba3}}-{{word:shen1ti3}}-{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:yuan3}} {{word:ma}}?",
      hanzi: "把身体做好的地方很远吗？",
      en: "Is the hospital far?",
      ru: "Больница далеко?",
    },
  ],
});
