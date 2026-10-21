import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 666,
  phase: 2,
  zh: "服务",
  py: "fúwù",
  en: "serve",
  ru: "обслуживать",
  pos: "verb",
  hsd: ["{{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}"],
  tts: ["帮人的工作"],
  literal: "the work of helping people",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zuo4}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他们做帮人的工作。",
      en: "They work in service.",
      ru: "Они работают в сфере услуг.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:bang1}}-{{word:ren2}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我爱帮人的工作。",
      en: "We provide a service here.",
      ru: "Мы оказываем услуги здесь.",
    },
  ],
});
