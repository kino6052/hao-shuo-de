// Chinese's smallest written unit is the syllable, not the letter. [from old
// L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "syllable-unit",
  scene: "Acts out 'one syllable at a time': a row of pebbles on the path, each one a syllable; Miao-miao taps the pebbles one by one with a paw and the student points at the one being tapped. Orange: the pebble being tapped.",
  prose: {
    en: [
      "**To read pinyin**, read it one syllable at a time.",
      "A syllable is the smallest piece, not a letter.",
    ],
    ru: [
      "**Чтобы читать пиньинь**, читайте его по одному слогу.",
      "Слог — самая маленькая часть, а не буква.",
    ],
    tldr: {
      en: "Read pinyin one syllable at a time.",
      ru: "Читайте пиньинь по одному слогу.",
    },
    necessity: { en: "Now you know where to start reading.", ru: "Теперь вы знаете, с чего начать чтение." },
  },
  info: {
    kind: "note",
    title: { en: "Syllables", ru: "Слоги" },
    items: [
      {
        en: "Read pinyin syllable by syllable, not letter by letter.",
        ru: "Читайте пиньинь по слогам, а не по буквам.",
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
