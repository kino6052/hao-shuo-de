import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 443,
  phase: 1,
  zh: "疼",
  py: "téng",
  en: "hurt",
  ru: "болеть",
  pos: "adjective",
  hsd: ["{{word:shen1ti3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["身体觉得很不好"],
  literal: "the body feels very bad",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我的身体觉得很不好。",
      en: "My body hurts.",
      ru: "У меня всё болит.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen1ti3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:bu4}} {{word:hao3}}, {{word:yao4}} {{word:qu4}} {{word:kan4}} {{word:bang1}}-{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他身体觉得很不好，要去看帮身体不好的人。",
      en: "He's in pain and has to see a doctor.",
      ru: "Ему больно, ему надо к врачу.",
    },
  ],
});
