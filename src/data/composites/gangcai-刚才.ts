import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 501,
  phase: 2,
  zh: "刚才",
  py: "gāngcái",
  en: "just now",
  ru: "только что",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:xia4}} {{word:yi3}}-{{word:qian2}}"],
  tts: ["一下以前"],
  literal: "a moment before",
  fit: "plain",
  note: "Same as \"recently\".",
  examples: [
    {
      pinyin: "{{Word:yi1}}-{{word:xia4}} {{word:yi3}}-{{word:qian2}}, {{word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:le}}.",
      hanzi: "一下以前，我看到他了。",
      en: "A moment ago I saw him.",
      ru: "Минуту назад я его видел.",
    },
    {
      pinyin: "{{Word:yi1}}-{{word:xia4}} {{word:yi3}}-{{word:qian2}}, {{word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "一下以前，他在这里。",
      en: "A moment ago he was here.",
      ru: "Минуту назад он был здесь.",
    },
  ],
});
