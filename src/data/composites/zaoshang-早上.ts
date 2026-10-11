import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 236,
  phase: 1,
  zh: "早上",
  py: "zǎoshang",
  en: "morning",
  ru: "утро",
  pos: "noun",
  hsd: ["{{word:zao3}}-{{light:shang4}}"],
  tts: ["早上"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:zao3}}-{{light:shang4}} {{word:wo3}} {{word:he1}} {{word:shui3}}.",
      hanzi: "早上我喝水。",
      en: "In the morning I drink water.",
      ru: "Утром я пью воду.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zao3}}-{{light:shang4}} {{word:zou3}} {{word:le}}.",
      hanzi: "他早上走了。",
      en: "He left in the morning.",
      ru: "Он ушёл утром.",
    },
  ],
});
