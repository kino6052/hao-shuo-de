// Chinese syllables run together with no word boundaries -- Hao-shuo-de adds
// punctuation for that. [from old L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "no-word-boundaries",
  prose: {
    en: [
      "In regular Chinese, sentences are built from syllables, with no spaces or extra notation that will help us to understand where words start and end.",
      "To make the structure of Chinese clearer to us, Hao-shuo-de adds a few extra grammar rules on top.",
    ],
    ru: [
      "В обычном китайском предложения состоят из слогов, и в них нет пробелов или других знаков, которые помогли бы понять, где начинается и заканчивается слово.",
      "Чтобы строение китайского было понятнее, Hǎo-shuō-de добавляет несколько своих правил письма.",
    ],
    tldr: {
      en: "Hao-shuo-de adds spaces, hyphens, and quotes to show where words start and end.",
      ru: "Hǎo-shuō-de добавляет пробелы, дефисы и кавычки, чтобы показать границы слов.",
    },
    necessity: {
      en: "Chinese has no spaces, so these help you read.",
      ru: "В китайском нет пробелов, а эти знаки помогают читать.",
    },
  },
  info: {
    title: { en: "Hao-shuo-de pinyin helpers", ru: "Подсказки пиньиня в Hǎo-shuō-de" },
    ordered: true,
    items: [
      {
        en: [
          "**Words are written solid**. When several syllables form one dictionary word, they are never split apart, no matter how long the word is — {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}.",
          "Read the whole solid block as a single unit.",
        ],
        ru: [
          "**Слова пишутся слитно**. Если несколько слогов составляют одно слово из словаря, их никогда не разделяют, какой бы длины ни было слово: {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}.",
          "Читайте весь слитный блок как одно целое.",
        ],
      },
      {
        en: "**A hyphen joins words into one**. A hyphen glues a small word onto another word, so the two work as one word. Sometimes that gives the word a new job, like turning a verb into a describing word (an adjective).",
        ru: "**Дефис соединяет слова в одно**. Дефис приклеивает маленькое слово к другому слову, и они работают как одно слово. Иногда так слово получает новую работу: например, глагол становится описательным словом (прилагательным).",
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
            en: "A hyphen always shows that the parts it joins work together as a single word.",
            ru: "Дефис всегда показывает, что части, которые он соединяет, работают вместе как одно слово.",
          },
        ],
      },
      {
        en: "**Quotes set off the untranslatable**. Proper names and onomatopoeia — things that aren't really Hao-shuo-de vocabulary — are enclosed in quotes:",
        ru: "**Кавычки выделяют то, что не переводится**. Имена и звукоподражания — то, что на самом деле не входит в словарь Hǎo-shuō-de, — пишутся в кавычках:",
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
            en: "If you see quotes, don't look the word up in the dictionary — it isn't a dictionary word.",
            ru: "Если видите кавычки, не ищите слово в словаре — это не словарное слово.",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      en: "Is {{word:hen3}}-{{word:da4}}-de one dictionary word, or a word plus a bound grammar piece? How do you know from the punctuation alone?",
      ru: "{{word:hen3}}-{{word:da4}}-de — это одно слово из словаря или слово плюс прикреплённая к нему грамматическая частичка? Как это понять только по знакам письма?",
      answer: {
        en: "A word ({{word:da4}}, big) plus a bound grammar piece (-de) — the hyphen shows they're glued together, not a single solid dictionary word.",
        ru: "Слово ({{word:da4}}, большой) плюс прикреплённая грамматическая частичка (-de): дефис показывает, что они склеены, а не составляют одно слитное слово из словаря.",
      },
    },
  ],
});
