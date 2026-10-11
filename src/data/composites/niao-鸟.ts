import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 917,
  phase: 2,
  zh: "鸟",
  py: "niǎo",
  en: "bird",
  ru: "птица",
  pos: "noun",
  hsd: ["{{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}}"],
  tts: ["飞的动物"],
  literal: "a flying animal",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我看到飞的动物。",
      en: "I see a bird.",
      ru: "Я вижу птицу.",
    },
    {
      pinyin: "{{Word:fei1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:tian1}}-{{word:shang4}}.",
      hanzi: "飞的动物在天上。",
      en: "The bird is in the sky.",
      ru: "Птица в небе.",
    },
  ],
});
