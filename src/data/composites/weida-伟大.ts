import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1027,
  phase: 3,
  zh: "伟大",
  py: "wěidà",
  en: "great",
  ru: "великий",
  pos: "adjective",
  hsd: ["{{word:zhen1}} {{word:da4}}, {{word:zhen1}} {{word:hao3}}"],
  tts: ["真大，真好"],
  literal: "really big and really good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:da4}}, {{word:zhen1}} {{word:hao3}}.",
      hanzi: "他真大，真好。",
      en: "He is great.",
      ru: "Он велик.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ren2}} {{word:zhen1}} {{word:da4}}, {{word:zhen1}} {{word:hao3}}.",
      hanzi: "这个人真大，真好。",
      en: "This person is great.",
      ru: "Этот человек велик.",
    },
  ],
});
