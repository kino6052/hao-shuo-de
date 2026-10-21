import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7075,
  phase: 4,
  zh: "开花",
  py: "kāihuā",
  en: "bloom; flower",
  ru: "цвести",
  pos: "verb",
  hsd: [
    "{{word:zhi2wu4}}-{{word:shang4}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:kai1}} {{word:le}}",
    "{{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:zhi2wu4}} {{word:kai1}} {{word:le}}",
  ],
  tts: ["植物上好看的东西开了", "好看的植物开了"],
  literal: "the good-looking thing on the plant has opened / the good-looking plant has opened",
  fit: "plain",
  topics: ["trees-and-flowers"],
  isA: ["happening"],
  proposed: true,
});
