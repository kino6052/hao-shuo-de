import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 405,
  phase: 1,
  zh: "房间",
  py: "fángjiān",
  en: "room",
  ru: "комната",
  pos: "noun",
  hsd: ["{{word:fang2}}-{{word:jian1}}"],
  tts: ["房间"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的房间很小。",
      en: "My room is small.",
      ru: "Моя комната маленькая.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:shui4jiao4}}.",
      hanzi: "他在房间里睡觉。",
      en: "He's sleeping in his room.",
      ru: "Он спит в своей комнате.",
    },
  ],
});
