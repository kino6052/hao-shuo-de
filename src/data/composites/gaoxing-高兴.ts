import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 248,
  phase: 1,
  zh: "高兴",
  py: "gāoxìng",
  en: "happy, glad",
  ru: "радостный",
  pos: "adjective",
  hsd: ["{{word:kai1}}-{{word:xin1}}"],
  tts: ["开心"],
  literal: "open heart",
  fit: "natural",
  note: "Lesson {{lesson:greetings-and-feelings}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:jian4}}-{{word:dao4}} {{word:ni3}}.",
      hanzi: "我很开心见到你。",
      en: "I'm glad to see you.",
      ru: "Рад тебя видеть.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "孩子们很开心。",
      en: "The children are happy.",
      ru: "Дети рады.",
    },
  ],
});
