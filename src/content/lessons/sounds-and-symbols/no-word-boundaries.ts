// Chinese syllables run together with no word boundaries -- Hao-shuo-de adds
// punctuation for that. [from old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "no-word-boundaries",
  scene: "Acts out 'spaces, hyphens, quotes show where a word starts and ends': a long string of beads, some joined by short ties and groups separated by gaps; Miao-miao points at the gaps while the student counts the groups. Orange: the ties.",
  prose: {
    en: [
      "**To see where a word starts and ends**, look at the spaces, hyphens, and quotes.",
      "Chinese has no spaces, so the writing here adds them.",
    ],
    ru: [
      "**Чтобы увидеть, где слово начинается и заканчивается**, смотрите на пробелы, дефисы и кавычки.",
      "В китайском нет пробелов, поэтому здесь они добавлены.",
    ],
    tldr: {
      en: "Spaces, hyphens, and quotes show where words start and end.",
      ru: "Пробелы, дефисы и кавычки показывают границы слов.",
    },
    necessity: {
      en: "They help you read long strings of syllables.",
      ru: "Они помогают читать длинные цепочки слогов.",
    },
  },
  info: {
    pattern: "written-words",
    title: { en: "How words are written", ru: "Как пишутся слова" },
    ordered: true,
    items: [
      {
        en: [
          "**One word is written together**. The syllables of one word are never split apart: {{word:dong4}}-{{word:wu4}}, {{word:shui4jiao4}}, {{word:dan4}}-{{word:shi4}}.",
          "Read the whole block as one word.",
        ],
        ru: [
          "**Одно слово пишется вместе**. Слоги одного слова никогда не разделяют: {{word:dong4}}-{{word:wu4}}, {{word:shui4jiao4}}, {{word:dan4}}-{{word:shi4}}.",
          "Читайте весь блок как одно слово.",
        ],
      },
      {
        en: "**A hyphen joins words into one**. It glues a small word onto another word. Together they work as one word.",
        ru: "**Дефис соединяет слова в одно**. Он приклеивает маленькое слово к другому слову. Вместе они работают как одно слово.",
        items: [
          {
            en: "{{word:zhe4}}-**ge** — this",
            ru: "{{word:zhe4}}-**ge** — этот",
          },
          {
            en: "{{word:yi1}}-**ge** — one thing",
            ru: "{{word:yi1}}-**ge** — одна вещь",
          },
          {
            en: "{{word:hen3}}-**{{word:da4}}-de** — very big",
            ru: "{{word:hen3}}-**{{word:da4}}-de** — очень большой",
          },
          {
            en: "A hyphen means: these parts work as one word.",
            ru: "Дефис значит: эти части работают как одно слово.",
          },
        ],
      },
      {
        en: "**Quotes mark a name or a sound**. Names and animal sounds go in quotes:",
        ru: "**Кавычки отмечают имя или звук**. Имена и звуки животных пишутся в кавычках:",
        items: [
          {
            en: "\"Beijing\" — Beijing",
            ru: "\"Beijing\" — Пекин",
          },
          {
            en: "{{word:jiao4}} \"wāng-wāng\" — barks \"woof-woof\"",
            ru: "{{word:jiao4}} \"wāng-wāng\" — лает «гав-гав»",
          },
          {
            en: "A word in quotes is not in the dictionary.",
            ru: "Слова в кавычках нет в словаре.",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      en: "In {{word:hen3}}-{{word:da4}}-de, what does the hyphen tell you?",
      ru: "Что говорит дефис в {{word:hen3}}-{{word:da4}}-de?",
      answer: {
        en: "The parts are glued together and work as one word.",
        ru: "Части склеены и работают как одно слово.",
      },
    },
  ],
});
