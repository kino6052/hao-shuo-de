import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1381,
  phase: 3,
  zh: "画面",
  py: "huàmiàn",
  en: "picture, scene",
  ru: "картинка, кадр",
  pos: "noun",
  hsd: [
    "{{word:hua4}}-{{word:mian4}}",
    "{{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["画面", "看到的东西"],
  literal: "the drawn side / what you see",
  fit: "natural",
  topics: ["art-and-drawing"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hua4}}-{{word:mian4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个画面很好。",
      en: "This picture is good.",
      ru: "Эта картинка хорошая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}} {{word:hua4}}-{{word:mian4}}.",
      hanzi: "我爱这个画面。",
      en: "I love this scene.",
      ru: "Мне нравится эта сцена.",
    },
  ],
});
