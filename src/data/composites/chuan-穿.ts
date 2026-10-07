import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 240,
  phase: 1,
  zh: "穿",
  py: "chuān",
  en: "wear",
  ru: "носить (одежду)",
  pos: "verb",
  hsd: ["{{word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}"],
  tts: ["把衣服放在身体上"],
  literal: "put clothes on the body",
  fit: "plain",
  note: "Lesson {{lesson:becoming-and-making}}.",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}, {{word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "把衣服放在身体上，外面很冷。",
      en: "Put your clothes on, it's cold outside.",
      ru: "Оденься, на улице холодно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}.",
      hanzi: "她把红色的衣服放在身体上。",
      en: "She put on red clothes.",
      ru: "Она надела красную одежду.",
    },
  ],
});
