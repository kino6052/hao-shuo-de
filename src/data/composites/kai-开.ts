import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 56,
  phase: 1,
  zh: "开",
  py: "kāi",
  en: "open",
  ru: "открывать",
  pos: "verb",
  hsd: ["{{word:kai1}}"],
  tts: ["开"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:kai1}} {{word:men2}}!",
      hanzi: "开门！",
      en: "Open the door!",
      ru: "Открой дверь!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kai1}} {{word:che1}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "他开车去学校。",
      en: "He drives to school.",
      ru: "Он ездит в школу на машине.",
    },
  ],
});
