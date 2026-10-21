import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1273,
  phase: 3,
  zh: "卫生",
  py: "wèishēng",
  en: "hygiene, clean",
  ru: "гигиена, чистота",
  pos: "adjective",
  hsd: [
    "{{word:wei4}}-{{word:sheng1}}",
    "{{word:shang4}}-{{word:mian4}} {{word:mei2}}-{{word:you3}} {{word:luan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["卫生", "上面没有乱的东西"],
  literal: "nothing dirty on it",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["cleaning"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:wei4}}-{{word:sheng1}}.",
      hanzi: "这个房间很卫生。",
      en: "This room is very clean.",
      ru: "В этой комнате очень чисто.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wei4}}-{{word:sheng1}}.",
      hanzi: "我爱卫生。",
      en: "I love cleanliness.",
      ru: "Я люблю чистоту.",
    },
  ],
});
