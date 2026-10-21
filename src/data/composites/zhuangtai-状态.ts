import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1142,
  phase: 3,
  zh: "状态",
  py: "zhuàngtài",
  en: "state",
  ru: "состояние",
  pos: "noun",
  hsd: [
    "{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{light:zi}}",
    "{{word:xian4}}-{{word:zai4}}-{{word:de}} X",
  ],
  tts: ["现在的样子", "现在的X"],
  literal: "how X is now",
  fit: "plain",
  topics: ["situations-and-needs"],
  isA: ["state-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我们现在的样子很好。",
      en: "Our state is good.",
      ru: "Наше состояние хорошее.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你现在的样子很好。",
      en: "Your state is good.",
      ru: "Твоё состояние хорошее.",
    },
  ],
});
