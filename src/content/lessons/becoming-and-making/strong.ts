// To say strong, say yǒu lì, "have strength". Pattern: Who + hěn yǒu lì
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "strong",
  words: [
    {
      word: "li4",
      en: "strength; yǒu lì: strong",
      ru: "сила; yǒu lì: сильный",
    },
  ],
  prose: {
    en: [
      "**To say strong**, say {{word:you3}} {{word:li4}}, \"have strength\".",
      "",
      "**Who + {{word:hen3}} {{word:you3}} {{word:li4}}**",
      "",
      "For the strength of a body, Mandarin says {{word:li4}}-{{word:qi4}} (strength-air): {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}-{{word:qi4}}.",
    ],
    ru: [
      "**Чтобы сказать «сильный»**, скажите {{word:you3}} {{word:li4}} — «иметь силу».",
      "",
      "**Кто + {{word:hen3}} {{word:you3}} {{word:li4}}**",
      "",
      "О силе тела по-китайски говорят {{word:li4}}-{{word:qi4}} («сила-воздух»): {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}-{{word:qi4}}.",
    ],
    tldr: {
      en: "{{word:you3}} {{word:li4}}, have strength, means strong.",
      ru: "{{word:you3}} {{word:li4}} — «иметь силу» — значит «сильный».",
    },
    necessity: {
      en: "When there's no word for something, you can build it from words you know.",
      ru: "Если для чего-то нет слова, его можно составить из знакомых слов.",
    },
  },
  info: {
    en: "{{word:you3}} {{word:li4}}, strong: {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}. (He's very strong.)",
    ru: "{{word:you3}} {{word:li4}} — сильный: {{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}. (Он очень сильный.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}-{{word:qi4}}.",
      hanzi: "他很有力气。",
      en: "He's very strong.",
      ru: "Он очень сильный.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:li4}}-{{word:qi4}}.",
      hanzi: "我没有力气。",
      en: "I have no strength.",
      ru: "У меня нет сил.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "你的手很有力。",
      en: "Your hands are very strong.",
      ru: "У тебя очень сильные руки.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "他的身体很有力。",
      en: "His body is strong.",
      ru: "У него сильное тело.",
    },
  ],
  exercises: [
    {
      en: "She is very strong.",
      ru: "Она очень сильная.",
      answer: "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "她很有力。",
    },
  ],
});
