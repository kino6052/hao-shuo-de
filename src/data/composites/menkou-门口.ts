import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 908,
  phase: 2,
  zh: "门口",
  py: "ménkǒu",
  en: "doorway",
  ru: "вход",
  pos: "noun",
  hsd: ["{{word:men2}}-{{word:kou3}}", "{{word:kou3}}"],
  tts: ["门口", "口"],
  literal: "opening",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:men2}}-{{word:kou3}}.",
      hanzi: "我在门口。",
      en: "I'm at the door.",
      ru: "Я у двери.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:men2}}-{{word:kou3}} {{word:deng3}} {{word:wo3}}.",
      hanzi: "他在门口等我。",
      en: "He is waiting for me at the door.",
      ru: "Он ждёт меня у двери.",
    },
  ],
});
