// To say what something is like, put hěn before the adjective (a describing
// word, like dà or hǎo). Pattern: NOUN + hěn + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "like",
  words: [
    {
      word: "hen3",
      en: "very",
      ru: "очень",
    },
    {
      word: "hao3",
      en: "good",
      ru: "хороший",
    },
    {
      word: "da4",
      en: "big",
      ru: "большой",
    },
    {
      word: "xiao3",
      en: "small",
      ru: "маленький",
    },
    {
      word: "shui3",
      en: "water",
      ru: "вода",
    },
    {
      word: "di4",
      en: "floor, ground",
      ru: "пол, земля",
    },
    {
      word: "fang1",
      en: "side, direction; {{word:di4}}-{{light:fang1}}: place",
      ru: "сторона; {{word:di4}}-{{light:fang1}} — место",
    },
    {
      word: "fu4mu3",
      en: "parents",
      ru: "родители",
    },
  ],
  prose: {
    en: [
      "**To say what something is like**, put {{word:hen3}} before the adjective (like \"big\" or \"good\").",
      "",
      "**NOUN + {{word:hen3}} + adjective**",
      "",
      "{{word:shi4}} (Lesson {{lesson:words-and-sentences}}) says what something is. {{word:hen3}} says what it is like. {{word:hen3}} also means \"very\".",
    ],
    ru: [
      "**Чтобы описать вещь**, поставьте {{word:hen3}} перед прилагательным (например, «большой» или «хороший»).",
      "",
      "**СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное**",
      "",
      "{{word:shi4}} (урок {{lesson:words-and-sentences}}) говорит, что такое что-то. {{word:hen3}} говорит, какое оно. {{word:hen3}} также значит «очень».",
    ],
    tldr: {
      en: "To say what something is like, put {{word:hen3}} before the adjective.",
      ru: "Чтобы описать вещь, поставьте {{word:hen3}} перед прилагательным.",
    },
    necessity: {
      en: "This is how you describe things in a full sentence.",
      ru: "Так описывают вещи целым предложением.",
    },
  },
  info: {
    en: "NOUN + {{word:hen3}} + adjective: {{Word:shui3}} {{word:hen3}} {{word:hao3}}. (The water is good.)",
    ru: "СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное: {{Word:shui3}} {{word:hen3}} {{word:hao3}}. (Вода хорошая.)",
  },
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "水很好。",
      en: "The water is good.",
      ru: "Вода хорошая.",
    },
    {
      pinyin: "{{Word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "地方很大。",
      en: "The place is big.",
      ru: "Место большое.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "动物很小。",
      en: "The animal is small.",
      ru: "Животное маленькое.",
    },
    {
      pinyin: "{{Word:fu4mu3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "父母很好。",
      en: "The parents are good.",
      ru: "Родители хорошие.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "植物很大。",
      en: "The plant is big.",
      ru: "Растение большое.",
    },
  ],
  exercises: [
    {
      en: "The place is small.",
      ru: "Место маленькое.",
      answer: "{{Word:di4}}-{{light:fang1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "地方很小。",
    },
    {
      en: "The water is good.",
      ru: "Вода хорошая.",
      answer: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "水很好。",
    },
    {
      en: "The animal is small.",
      ru: "Животное маленькое.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "动物很小。",
    },
  ],
  faq: [
    // does hěn always mean "very"? (no -- NOUN + hěn + adjective needs it)
    {
      question: {
        en: "Does {{word:hen3}} always mean \"very\"?",
        ru: "{{word:hen3}} всегда значит «очень»?",
      },
      en: [
        "No. In NOUN + {{word:hen3}} + adjective, {{word:hen3}} is mostly there because the sentence needs it: {{Word:shui3}} {{word:hen3}} {{word:hao3}} is just \"The water is good.\"",
        "Without {{word:hen3}}, it sounds like you're comparing: the water is good, but something else isn't. To really mean \"very\", say {{word:hen3}} a little louder.",
      ],
      ru: [
        "Нет. В схеме СУЩЕСТВИТЕЛЬНОЕ + {{word:hen3}} + прилагательное {{word:hen3}} стоит в основном потому, что без него предложение не обходится: {{Word:shui3}} {{word:hen3}} {{word:hao3}} — это просто «Вода хорошая».",
        "Без {{word:hen3}} звучит так, будто вы сравниваете: вода хорошая, а что-то другое — нет. Чтобы действительно сказать «очень», произнесите {{word:hen3}} чуть громче.",
      ],
    },
    // why not shuǐ shì hǎo? (shì joins two nouns, not a noun and an adjective)
    {
      question: {
        en: "Why isn't it {{word:shui3}} {{word:shi4}} {{word:hao3}}?",
        ru: "Почему не {{word:shui3}} {{word:shi4}} {{word:hao3}}?",
      },
      en: "{{word:shi4}} joins two nouns: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. An adjective doesn't take {{word:shi4}}, so use {{word:hen3}} instead: {{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
      ru: "{{word:shi4}} соединяет два существительных: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. С прилагательным {{word:shi4}} не ставят, поэтому вместо него используйте {{word:hen3}}: {{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    },
  ],
});
