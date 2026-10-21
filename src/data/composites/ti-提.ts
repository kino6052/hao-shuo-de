import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 658,
  phase: 2,
  zh: "提",
  py: "tí",
  en: "carry; mention",
  ru: "нести; упомянуть",
  pos: "verb",
  hsd: ["{{word:na2}}", "{{word:shuo1}}-{{word:qi3}}"],
  tts: ["拿", "说起"],
  literal: "take / bring up",
  fit: "natural",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} {{word:ni3}} {{word:le}}.",
      hanzi: "他说起你了。",
      en: "He mentioned you.",
      ru: "Он упомянул тебя.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bie2}} {{word:shuo1}}-{{word:qi3}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "你别说起这个。",
      en: "Don't bring this up.",
      ru: "Не заводи об этом речь.",
    },
  ],
});
