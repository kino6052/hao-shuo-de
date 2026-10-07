import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 355,
  phase: 1,
  zh: "像",
  py: "xiàng",
  en: "be like",
  ru: "быть похожим",
  pos: "verb",
  hsd: ["{{word:he2}} … {{word:yi1}}-{{word:yang4}}"],
  tts: ["和…一样"],
  literal: "the same as",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:ta1}} {{word:ba4ba}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他和他爸爸一样。",
      en: "He's like his dad.",
      ru: "Он похож на папу.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:he2}} {{word:huo3}} {{word:yi1}}-{{word:yang4}} {{word:re4}}.",
      hanzi: "这个和火一样热。",
      en: "This is as hot as fire.",
      ru: "Это горячее, как огонь.",
    },
  ],
});
