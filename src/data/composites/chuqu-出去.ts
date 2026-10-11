import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 500,
  phase: 1,
  zh: "出去",
  py: "chūqù",
  en: "go out",
  ru: "выходить",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:qu4}}"],
  tts: ["出去"],
  literal: "out-go",
  fit: "natural",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}.",
      hanzi: "我们出去玩儿。",
      en: "We go out to have fun.",
      ru: "Мы идём гулять.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:chu1}}-{{word:qu4}}, {{word:wai4}}-{{word:mian4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "别出去，外面很冷。",
      en: "Don't go out, it's cold.",
      ru: "Не выходи, на улице холодно.",
    },
  ],
});
