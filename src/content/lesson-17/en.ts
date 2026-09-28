// English text for lesson-17, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Colors"] },
  summary: {
    en: [
      "Colors help us tell things apart.",
      "In this lesson, you'll be able to say \"a red box\", \"The water is blue.\", and \"What color is it?\"",
    ],
  },
  vocabBaise: { en: ["white"] },
  vocabHeise: { en: ["black"] },
  vocabHongse: { en: ["red"] },
  vocabHuangse: { en: ["yellow"] },
  proseColorThing: {
    en: [
      "**To say a thing's color**, put the color and -{{word:de}} before it.",
      "",
      "**color-{{word:de}} + noun**",
    ],
    tldr: {
      en: [
        "color-{{word:de}} + noun: {{word:hong2se4}}-{{word:de}} {{word:he2zi}}, a red box.",
      ],
    },
    necessity: { en: ["Now you can tell things apart by color."] },
  },
  exampleColorThing1: { en: ["A red box."] },
  exampleColorThing2: { en: ["White clothes."] },
  exampleColorThing3: { en: ["A black animal."] },
  exampleColorThing4: { en: ["Yellow fruit."] },
  vocabLanse: { en: ["blue, green"] },
  proseIsColor: {
    en: [
      "**To say what color something is**, put {{word:shi4}} before the color, and -{{word:de}} after it.",
      "",
      "**Thing + {{word:shi4}} + color-{{word:de}}**",
    ],
    tldr: {
      en: [
        "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:lan2se4}}-{{word:de}}, the water is blue.",
      ],
    },
    necessity: { en: ["Now you can describe what you see."] },
  },
  exampleIsColor1: { en: ["The box is red."] },
  exampleIsColor2: { en: ["The water is blue."] },
  exampleIsColor3: { en: ["My clothes are white."] },
  exampleIsColor4: { en: ["The moon is yellow."] },
  exampleIsColor5: { en: ["The mud on the floor is black."] },
  exampleIsColor6: { en: ["The fire is red."] },
  exampleIsColor7: { en: ["This animal's body is yellow."] },
  exampleIsColor8: { en: ["The moon is round, and it's white too."] },
  exampleIsColor9: { en: ["Four animals are white, and five are black."] },
  exampleIsColor10: { en: ["Seven boxes are red, and eight are blue."] },
  exampleIsColor11: { en: ["Her clothes are all black."] },
  vocabYanse: { en: ["color"] },
  proseWhatColor: {
    en: [
      '**To ask "what color?"**, say {{word:shen2me}} {{word:yan2se4}} where the color would go.',
      "",
      "**Thing + {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?**",
    ],
    tldr: {
      en: [
        "{{word:shen2me}} {{word:yan2se4}} means what color.",
      ],
    },
    necessity: { en: ["Now you can ask about colors."] },
  },
  exampleWhatColor1: { en: ["What color are your clothes?"] },
  exampleWhatColor2: { en: ["What color is this fruit?"] },
  exampleWhatColor3: { en: ["I love blue."] },
  exampleWhatColor4: { en: ["This color is nice."] },
  exampleWhatColor5: { en: ["These two boxes are the same color."] },
  exampleWhatColor6: { en: ["What color is number six?"] },
  exampleWhatColor7: { en: ["Do you have other colors?"] },
  exampleWhatColor8: { en: ["This color is nice."] },
  infoColors: {
    title: { en: ["Colors"] },
    items: [
      {
        en: [
          "color-{{word:de}} + noun: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} (a red box)",
        ],
      },
      {
        en: [
          "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:he2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}. (The box is red.)",
        ],
      },
      {
        en: [
          "{{word:shen2me}} {{word:yan2se4}}, what color: {{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}? (What color are your clothes?)",
        ],
      },
    ],
  },
  exercise1: { en: ["a white box"] },
  exercise2: { en: ["The fruit is yellow."] },
  exercise3: { en: ["What color is the plant?"] },
  exercise4: { en: ["I want red clothes."] },
  exercise5: { en: ["The animal is black."] },
  exercise6: { en: ["The box is blue."] },
  answer1: { en: ["{{Word:bai2se4}}-{{word:de}} {{word:he2zi}}."] },
  answer2: {
    en: [
      "{{Word:shui3guo3}} {{word:shi4}} {{word:huang2se4}}-{{word:de}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:zhi2wu4}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
    ],
  },
  answer4: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:dong4wu4}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:he2zi}} {{word:shi4}} {{word:lan2se4}}-{{word:de}}.",
    ],
  },
};

export default en;
