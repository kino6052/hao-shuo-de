import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 108,
  phase: 1,
  zh: "月",
  py: "yuè",
  en: "moon",
  ru: "луна",
  pos: "noun",
  hsd: ["{{word:yue4}}"],
  tts: ["月"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wan3}}-{{light:shang4}} {{word:yue4}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "今天晚上月很明。",
      en: "The moon is bright tonight.",
      ru: "Сегодня вечером луна яркая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xia4}}-{{light:ge4}} {{word:yue4}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "我下个月去中国。",
      en: "I'm going to China next month.",
      ru: "В следующем месяце я поеду в Китай.",
    },
  ],
});
