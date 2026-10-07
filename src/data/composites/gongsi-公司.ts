import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 264,
  phase: 1,
  zh: "公司",
  py: "gōngsī",
  en: "company",
  ru: "компания",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["工作的地方"],
  literal: "the place where you work",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "我的工作的地方很远。",
      en: "My company is far away.",
      ru: "Моя компания далеко.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他在工作的地方。",
      en: "He's at work.",
      ru: "Он на работе.",
    },
  ],
});
