import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 416,
  phase: 1,
  zh: "早",
  py: "zǎo",
  en: "early",
  ru: "рано",
  pos: "adjective",
  hsd: ["{{word:zao3}}"],
  tts: ["早"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:lai2}}-{{word:de}} {{word:hen3}} {{word:zao3}}.",
      hanzi: "他来得很早。",
      en: "He came early.",
      ru: "Он пришёл рано.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}} {{word:zao3}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "今天我早起来。",
      en: "Today I got up early.",
      ru: "Сегодня я встал рано.",
    },
  ],
});
