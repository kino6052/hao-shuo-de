import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 412,
  phase: 1,
  zh: "新年",
  py: "xīnnián",
  en: "New Year",
  ru: "Новый год",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:nian2}}"],
  tts: ["新年"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:xin1}}-{{word:nian2}} {{word:hao3}}!",
      hanzi: "新年好！",
      en: "Happy New Year!",
      ru: "С Новым годом!",
    },
    {
      pinyin: "{{Word:xin1}}-{{word:nian2}} {{word:wo3}}-{{word:men}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "新年我们回家。",
      en: "We go home for the New Year.",
      ru: "На Новый год мы едем домой.",
    },
  ],
});
