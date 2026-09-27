// English text for lesson-02, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Words and Sentences"] },
  summary: {
    en: [
      "A noun names a person, place, or thing; the simplest sentence is NOUN + shì + NOUN.",
    ],
  },

  vocabShi: { en: ["is, are, am"] },
  vocabBu: { en: ["not"] },
  vocabDongxi: { en: ["thing, something"] },
  vocabRen: { en: ["person, human"] },
  vocabShuiguo: { en: ["fruit, vegetable"] },
  vocabXiedeDongxi: { en: ["document, written thing"] },
  vocabNvren: { en: ["woman, female"] },
  vocabZhe: { en: ["this"] },
  vocabDongwu: { en: ["animal"] },

  proseNounShiNoun: {
    en: [
      "A noun is a word for a person, place, or thing.",
      "To build a simple sentence, follow this model:",
      "NOUN + shì + NOUN.",
      "{{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.",
      "Something is something.",
      "",
      'By themselves, nouns are not singular or plural. The word {{word:dong1xi}} can mean either "thing" or "things." We will explain in future chapters how to specify such meanings.',
    ],
  },

  example1: { en: ["This is a person."] },
  example2: { en: ["This is a fruit."] },
  example3: { en: ["A document is a thing."] },
  example4: { en: ["The person is a woman."] },
  example5: { en: ["Animals are things."] },
  example6: { en: ["Women are people."] },

  exercise1: { en: ["Something is something."] },
  exercise2: { en: ["This is a document."] },
  exercise3: { en: ["The woman is a person."] },
  exercise4: { en: ["Humans are beings."] },
  exercise5: { en: ["The animal is female."] },
  exercise6: { en: ["Fruits are things."] },
  exercise7: { en: ["This is a piece of paper."] },

  proseNounBuShiNoun: {
    en: [
      "To negate a simple sentence, insert {{word:bu4}} before  {{word:shi4}}.",
      "NOUN + bu4 + shì + NOUN.",
      "{{word:dong1xi}} {{word:bu4}} {{word:shi4}} {{word:dong1xi}}.",
      "Something is not something.",
    ],
  },

  answer1: { en: ["{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}."] },
  answer2: {
    en: [
      "{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ],
  },
  answer3: { en: ["{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}."] },
  answer4: { en: ["{{Word:ren2}} {{word:shi4}} {{word:dong1xi}}."] },
  answer5: { en: ["{{Word:dong4wu4}} {{word:shi4}} {{word:nv3ren2}}."] },
  answer6: { en: ["{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."] },
  answer7: {
    en: [
      "{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ],
  },
};

export default en;
