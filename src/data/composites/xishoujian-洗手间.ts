import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 565,
  phase: 2,
  zh: "洗手间",
  py: "xǐshǒujiān",
  en: "restroom",
  ru: "туалет",
  pos: "noun",
  hsd: [
    "{{word:wei4}}-{{word:sheng1}}-{{word:jian1}}",
    "{{word:yong4}}-{{word:shui3}}-{{word:rang4}}-{{word:shou3}}-{{word:gan1jing4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["卫生间", "用水让手干净的地方"],
  literal: "bathroom / the place where water makes your hands clean",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}} {{word:yong4}}-{{word:shui3}}-{{word:rang4}}-{{word:shou3}}-{{word:gan1jing4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我要去用水让手干净的地方。",
      en: "I need to go to the restroom.",
      ru: "Мне нужно в уборную.",
    },
    {
      pinyin: "{{Word:yong4}}-{{word:shui3}}-{{word:rang4}}-{{word:shou3}}-{{word:gan1jing4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "用水让手干净的地方在哪里？",
      en: "Where is the restroom?",
      ru: "Где уборная?",
    },
  ],
});
