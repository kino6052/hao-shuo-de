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
  vocabShi: { en: ["is, are, am"] },
  vocabBu: { en: ["not"] },
  vocabZhe: { en: ["this"] },
  vocabDongxi: { en: ["thing, something"] },
  vocabRen: { en: ["person, human"] },
  vocabNuren: { en: ["woman, female"] },
  vocabNanren: { en: ["man"] },
  vocabDongwu: { en: ["animal"] },
  vocabShuiguo: { en: ["fruit, vegetable"] },
  proseNounShiNoun: {
    en: [
      "A noun is a word for a person, place, or thing.",
      "To make a simple sentence, follow this model:",
      "NOUN + shì + NOUN.",
      "{{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.",
      "Something is something.",
      "",
      'A noun can mean one thing or many: {{word:dong1xi}} means "thing" or "things". Later lessons show how to say which.',
    ],
    tldr: {
      en: [
        "To say one thing is another, put {{word:shi4}} between them.",
      ],
    },
    necessity: { en: ["This is the simplest sentence you can make."] },
  },
  example1: { en: ["This is a person."] },
  example2: { en: ["This is a fruit."] },
  example3: { en: ["A man is a person."] },
  example4: { en: ["The person is a woman."] },
  example5: { en: ["Animals are things."] },
  example6: { en: ["Women are people."] },
  proseNounBuShiNoun: {
    en: [
      "To say it is not, put {{word:bu4}} before {{word:shi4}}.",
      "NOUN + bù + shì + NOUN.",
      "{{word:dong1xi}} {{word:bu4}} {{word:shi4}} {{word:dong1xi}}.",
      "Something is not something.",
    ],
    tldr: {
      en: [
        "To say it is not, put {{word:bu4}} before {{word:shi4}}.",
      ],
    },
    necessity: { en: ["Now you can say what something is not."] },
  },
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
  example7: { en: ["This is not an animal."] },
  example8: { en: ["This is not a fruit."] },
  example9: { en: ["A woman is not a man."] },
  exercise1: { en: ["Something is something."] },
  exercise2: { en: ["This is an animal."] },
  exercise3: { en: ["The woman is a person."] },
  exercise4: { en: ["Humans are beings."] },
  exercise5: { en: ["The animal is female."] },
  exercise6: { en: ["Fruits are things."] },
  exercise7: { en: ["This is a man."] },
  exercise8: { en: ["This is not a fruit."] },
  answer1: {
    en: ["{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer2: { en: ["{{Word:zhe4}} {{word:shi4}} {{word:dong4wu4}}."] },
  answer3: { en: ["{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}."] },
  answer4: { en: ["{{Word:ren2}} {{word:shi4}} {{word:dong1xi}}."] },
  answer5: {
    en: ["{{Word:dong4wu4}} {{word:shi4}} {{word:nv3ren2}}."],
  },
  answer6: {
    en: ["{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."],
  },
  answer7: { en: ["{{Word:zhe4}} {{word:shi4}} {{word:nan2ren2}}."] },
  answer8: {
    en: [
      "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}.",
    ],
  },
};

export default en;
