// <h2>Tones</h2> -- tone is part of the word, not decoration. [from old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "tones-heading",
  prose: {
    en: [
      "<h2>Tones</h2>",
      "In pinyin, tone isn't decoration — it's part of the word.",
    ],
    ru: [
      "<h2>Тоны</h2>",
      "В пиньине тон — не украшение, а часть слова.",
    ],
    tldr: { en: "The tone is part of the word.", ru: "Тон — это часть слова." },
    necessity: {
      en: "Change the tone and you get a different word.",
      ru: "Поменяйте тон — и получится другое слово.",
    },
  },
  info: {
    kind: "note",
    title: { en: "Example", ru: "Пример" },
    items: [
      {
        en: "**mā** — mother",
        ru: "**mā** — мама",
      },
      {
        en: "**má** — hemp",
        ru: "**má** — конопля",
      },
      {
        en: "**mǎ** — horse",
        ru: "**mǎ** — лошадь",
      },
      {
        en: "**mà** — to scold",
        ru: "**mà** — ругать",
      },
    ],
  },
  exercises: [
    {
      en: "mā and mǎ: one word, or two different words?",
      ru: "mā и mǎ — одно слово или два разных?",
      answer: {
        en: "Two different words: mā is mother, mǎ is horse. The tone is part of the word.",
        ru: "Два разных слова: mā — мама, mǎ — лошадь. Тон — часть слова.",
      },
    },
  ],
  faq: [
    // what if I get a tone wrong? (you may say a different word)
    {
      question: { en: "What if I get a tone wrong?", ru: "Что будет, если я ошибусь с тоном?" },
      en: "People may hear a different word: **mǎ** (horse) instead of **mā** (mother). The situation often helps them, but learn every word with its tone from the start.",
      ru: "Вас могут услышать как другое слово: **mǎ** (лошадь) вместо **mā** (мама). Часто помогает ситуация, но учите каждое слово сразу вместе с его тоном.",
    },
  ],
});
