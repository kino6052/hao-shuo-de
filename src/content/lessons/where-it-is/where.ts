// To say where someone or something is, put zài (be at) before the place.
// Pattern: Who + zài + place
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "where",
  words: [
    {
      term: "{{word:li3}}",
      hanzi: "里面",
      en: "in, inside",
      ru: "в, внутри",
    },
  ],
  prose: {
    en: [
      "**To say where someone or something is**, put {{word:zai4}} (be at) before the place.",
      "",
      "**Who + {{word:zai4}} + place**",
      "",
      "In Lesson {{lesson:when-it-happens}}, {{word:zai4}} before a verb meant \"right now\". Before a place, it means \"is at\".",
    ],
    ru: [
      "**Чтобы сказать, где кто-то или что-то находится**, поставьте {{word:zai4}} (находиться) перед местом.",
      "",
      "**Кто + {{word:zai4}} + место**",
      "",
      "В уроке {{lesson:when-it-happens}} {{word:zai4}} перед глаголом значило «как раз сейчас». Перед местом оно значит «находится в».",
    ],
    tldr: {
      en: "Put {{word:zai4}} before a place to say where someone is.",
      ru: "Поставьте {{word:zai4}} перед местом, чтобы сказать, где кто-то находится.",
    },
    necessity: {
      en: "Now you can say where people and things are.",
      ru: "Теперь вы можете сказать, где находятся люди и вещи.",
    },
  },
  info: {
    en: "{{word:zai4}} + place: {{Word:wo3}} {{word:zai4}} {{word:jia1}}. (I'm at home.)",
    ru: "{{word:zai4}} + место: {{Word:wo3}} {{word:zai4}} {{word:jia1}}. (Я дома.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我在家。",
      en: "I'm at home.",
      ru: "Я дома.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:fu4mu3}} {{word:zai4}} {{word:jia1}} {{word:ma}}?",
      hanzi: "你的父母在家吗？",
      en: "Are your parents at home?",
      ru: "Твои родители дома?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "他在这里。",
      en: "He's here.",
      ru: "Он здесь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:liu2}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "他留在家里。",
      en: "He stays at home.",
      ru: "Он остаётся дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
      hanzi: "她可能在家里。",
      en: "She might be at home.",
      ru: "Она, может быть, дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you4}} {{word:zai4}} {{word:jia1}} {{word:le}}.",
      hanzi: "他又在家了。",
      en: "He's at home again.",
      ru: "Он опять дома.",
    },
  ],
  exercises: [
    {
      en: "She is at home.",
      ru: "Она дома.",
      answer: "{{Word:ta1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "她在家。",
    },
  ],
  faq: [
    // is zài (at) the same word as zài (right now)? (yes)
    {
      question: {
        en: "Is {{word:zai4}} in {{word:zai4}} {{word:jia1}} the same word as in {{word:zai4}} {{word:chi1}}?",
        ru: "{{word:zai4}} в {{word:zai4}} {{word:jia1}} — то же слово, что в {{word:zai4}} {{word:chi1}}?",
      },
      en: "Yes. {{word:zai4}} means \"at\". {{Word:wo3}} {{word:zai4}} {{word:chi1}} is really \"I'm at eating\": you're in the middle of it.",
      ru: "Да. {{word:zai4}} значит «находиться в». {{Word:wo3}} {{word:zai4}} {{word:chi1}} — это на самом деле «я нахожусь в еде», то есть вы как раз этим заняты.",
    },
  ],
});
