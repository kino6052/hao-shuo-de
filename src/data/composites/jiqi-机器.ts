import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 318,
  phase: 1,
  zh: "机器",
  py: "jīqì",
  en: "machine",
  ru: "машина, механизм",
  pos: "noun",
  hsd: ["{{word:ji1}}-{{word:qi4}}", "{{word:gong1}}-{{word:ju4}}"],
  tts: ["机器", "工具"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ji1}}-{{word:qi4}} {{word:huai4}} {{word:le}}.",
      hanzi: "这个机器坏了。",
      en: "This machine is broken.",
      ru: "Эта машина сломалась.",
    },
    {
      pinyin: "{{Word:ji1}}-{{word:qi4}} {{word:bang1}} {{word:ren2}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "机器帮人工作。",
      en: "Machines help people work.",
      ru: "Машины помогают людям работать.",
    },
  ],
});
