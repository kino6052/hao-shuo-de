import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 487,
  phase: 1,
  zh: "飞",
  py: "fēi",
  en: "fly",
  ru: "летать",
  pos: "verb",
  hsd: ["{{word:fei1}}"],
  tts: ["飞"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:fei1}}-{{word:ji1}} {{word:zai4}} {{word:tian1}}-{{word:shang4}} {{word:fei1}}.",
      hanzi: "飞机在天上飞。",
      en: "The plane is flying in the sky.",
      ru: "Самолёт летит в небе.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:fei1}}.",
      hanzi: "我想飞。",
      en: "I want to fly.",
      ru: "Я хочу летать.",
    },
  ],
});
