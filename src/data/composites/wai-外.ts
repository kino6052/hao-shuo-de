import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 161,
  phase: 1,
  zh: "外",
  py: "wài",
  en: "away",
  ru: "вдали",
  pos: "noun",
  hsd: ["{{word:wai4}}"],
  tts: ["外"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "他在外面。",
      en: "He's outside.",
      ru: "Он на улице.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:wai4}}-{{word:mian4}} {{word:wan2r}}.",
      hanzi: "我们去外面玩儿。",
      en: "We're going out to play.",
      ru: "Мы идём гулять на улицу.",
    },
  ],
});
