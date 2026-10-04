// Chinese's smallest written unit is the syllable, not the letter. [from old
// L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "syllable-unit",
  prose: {
    en: [
      "Chinese is very different from the western languages on many levels.",
      "One such example is what the smallest piece in the written language is.",
      "In western languages such smallest piece is a letter — we build words from letters, we can spell words from letters.",
      "In Chinese it is not like that — the smallest piece is a syllable.",
    ],
    ru: [
      "Китайский язык очень отличается от западных языков во многом.",
      "Один из примеров — то, что считается самой маленькой частью письменного языка.",
      "В западных языках самая маленькая часть — это буква: мы строим слова из букв и можем произнести слово по буквам.",
      "В китайском всё не так: самая маленькая часть — это слог.",
    ],
    tldr: {
      en: "Chinese is written one syllable at a time, not letter by letter.",
      ru: "Китайский записывают по слогам, а не по буквам.",
    },
    necessity: { en: "You read pinyin one syllable at a time.", ru: "Пиньинь читают по одному слогу." },
  },
  info: {
    kind: "note",
    title: { en: "Important!", ru: "Важно!" },
    items: [
      {
        en: "Get in the habit of reading pinyin words syllable by syllable, not as one whole word (the way we do in our alphabetic languages).",
        ru: "Привыкайте читать слова в пиньине по слогам, а не целиком (как мы привыкли в языках с алфавитом).",
        items: [
          {
            en: "<i>Syllables</i>: <b>Zhōng</b> and <b>guó</b>",
            ru: "<i>Слоги</i>: <b>Zhōng</b> и <b>guó</b>",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      en: "Break Zhōngguórén into its syllables.",
      ru: "Разделите Zhōngguórén на слоги.",
      answer: {
        en: "Zhōng-guó-rén (three syllables: Zhōng, guó, rén).",
        ru: "Zhōng-guó-rén (три слога: Zhōng, guó, rén).",
      },
    },
  ],
});
