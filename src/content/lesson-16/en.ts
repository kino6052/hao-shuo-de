// English text for lesson-16, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Numbers"] },
  summary: {
    en: [
      "Every language needs a way to count.",
      "In this lesson, you'll be able to count to ten and say \"one person\", \"two animals\", and \"number two\".",
    ],
  },
  vocabYi: { en: ["one"] },
  vocabLiang: {
    en: [
      "two (used exclusively before measure words for counting objects/quantities)",
    ],
  },
  vocabHao: {
    en: ["number identity, name of a number, day of the month"],
  },
  vocabSan: { en: ["three"] },
  vocabSi: { en: ["four"] },
  vocabWu: { en: ["five"] },
  vocabLiu: { en: ["six"] },
  vocabQi: { en: ["seven"] },
  vocabBa: { en: ["eight"] },
  vocabJiu: { en: ["nine"] },
  vocabShi: { en: ["ten"] },
  infoCountingAndOrdering: {
    title: { en: ["Counting and Ordering"] },
    items: [
      {
        en: [
          '**Quantities of One or Two:** bind the number root directly to the universal measure word `{{word:ge4}}` via a hyphen -- `{{word:yi1}}-ge` ("one thing"), `{{word:liang3}}-ge` ("two things"). Never use `èr` when counting physical objects.',
        ],
      },
      {
        en: [
          '**Indefinite Plurals:** for quantities beyond two, use `{{word:duo1}}` ("many, a lot") to convey generalized abundance instead of a precise count.',
        ],
      },
      {
        en: [
          '**Ordinal Numbers:** to mark strict sequencing ("first," "second"), place the ordinal prefix `dì-` directly before the number root: `dì-{{word:yi1}}`, `dì-èr`.',
        ],
      },
    ],
  },
  example1: { en: ["You are number one!"] },
  example2: { en: ["This is the second time / the second day."] },
  example3: { en: ["The two boys kept many plants."] },
  example4: { en: ["I know many languages."] },
  exercise1: { en: ["What is the third thing?"] },
  exercise2: { en: ["I know two languages."] },
  exercise3: { en: ["This is the first day."] },
  answer1: {
    en: [
      "Dì-sān-ge {{word:dong1xi}} {{word:shi4}} {{word:shen2me}}?",
    ],
  },
  answer2: {
    en: [
      "{{Word:wo3}} {{word:zhi1dao4}} {{word:liang3}}-ge {{word:shuo1}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:zhe4}}-ge {{word:ri4}} {{word:shi4}} dì-{{word:yi1}}-ge.",
    ],
  },
};

export default en;
