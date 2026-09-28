// English text for lesson-02, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Words and Sentences"] },
  summary: {
    en: [
      "Every language needs a way to say what something is.",
      "In this lesson, you'll be able to say \"This is a person.\" and \"An animal is not a fruit.\"",
    ],
  },
  vocabShi: { en: ["be, is"] },
  vocabDongxi: { en: ["thing"] },
  vocabRen: { en: ["person"] },
  vocabNuren: { en: ["woman"] },
  vocabNanren: { en: ["man"] },
  vocabDongwu: { en: ["animal"] },
  vocabShuiguo: { en: ["fruit"] },
  proseIs: {
    en: [
      "**To say what something is**, put {{word:shi4}} between two nouns.",
      "",
      "**NOUN + {{word:shi4}} + NOUN**",
      "",
      'A noun is a word for a person, place, or thing. It can mean one or many: {{word:dong1xi}} is "thing" or "things".',
    ],
    tldr: {
      en: [
        "To say one thing is another, put {{word:shi4}} between them.",
      ],
    },
    necessity: { en: ["This is the simplest sentence you can make."] },
  },
  exampleIs1: { en: ["A woman is a person."] },
  exampleIs2: { en: ["A man is a person."] },
  exampleIs3: { en: ["Fruit is a thing."] },
  exampleIs4: { en: ["Animals are things."] },
  vocabZhe: { en: ["this"] },
  proseThis: {
    en: [
      "**To point at something**, say {{word:zhe4}} (this).",
      "",
      "**{{Word:zhe4}} {{word:shi4}} + NOUN**",
    ],
    tldr: {
      en: ["{{Word:zhe4}} {{word:shi4}} + noun: this is …"],
    },
    necessity: { en: ["Now you can name what's in front of you."] },
  },
  exampleThis1: { en: ["This is a person."] },
  exampleThis2: { en: ["This is a fruit."] },
  exampleThis3: { en: ["This is an animal."] },
  exampleThis4: { en: ["This is a man."] },
  vocabBu: { en: ["not"] },
  proseNot: {
    en: [
      "**To say something is not something**, put {{word:bu4}} before {{word:shi4}}.",
      "",
      "**NOUN + {{word:bu4}} {{word:shi4}} + NOUN**",
    ],
    tldr: {
      en: [
        "To say it is not, put {{word:bu4}} before {{word:shi4}}.",
      ],
    },
    necessity: { en: ["Now you can say what something is not."] },
  },
  exampleNot1: { en: ["An animal is not a fruit."] },
  exampleNot2: { en: ["This is not an animal."] },
  exampleNot3: { en: ["A woman is not a man."] },
  exampleNot4: { en: ["Fruit is not a person."] },
  infoIsAndIsNot: {
    title: { en: ["Saying What Something Is"] },
    items: [
      {
        en: [
          "NOUN + {{word:shi4}} + NOUN: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. (This is a person.)",
        ],
      },
      {
        en: [
          "NOUN + {{word:bu4}} {{word:shi4}} + NOUN: {{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}. (An animal is not a fruit.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Something is something."] },
  exercise2: { en: ["This is an animal."] },
  exercise3: { en: ["The woman is a person."] },
  exercise4: { en: ["This is a woman."] },
  exercise5: { en: ["Fruits are things."] },
  exercise6: { en: ["This is a man."] },
  exercise7: { en: ["This is not a fruit."] },
  exercise8: { en: ["An animal is not a person."] },
  answer1: {
    en: ["{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer2: { en: ["{{Word:zhe4}} {{word:shi4}} {{word:dong4wu4}}."] },
  answer3: { en: ["{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}."] },
  answer4: { en: ["{{Word:zhe4}} {{word:shi4}} {{word:nv3ren2}}."] },
  answer5: {
    en: ["{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer6: { en: ["{{Word:zhe4}} {{word:shi4}} {{word:nan2ren2}}."] },
  answer7: {
    en: [
      "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}.",
    ],
  },
  answer8: {
    en: [
      "{{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:ren2}}.",
    ],
  },
};

export default en;
