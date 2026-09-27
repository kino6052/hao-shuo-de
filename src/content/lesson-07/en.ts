// English text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pre-Verbs"] },
  summary: {
    en: [
      "We often want to say what we want, can, or know how to do.",
      "In this lesson, you'll be able to say \"I want to eat.\", \"I can hear.\", \"I know how to write.\", and \"I love to eat.\"",
    ],
  },
  vocabYao: { en: ["to want, need, must, should"] },
  vocabNeng: { en: ["can"] },
  vocabZhidao: { en: ["to know, know how to"] },
  vocabAi: { en: ["love"] },
  vocabDeng: { en: ["wait"] },
  vocabYifu: { en: ["clothes"] },
  proseAuxiliaries: {
    en: [
      'A small set of Hao-shuo-de words express intent, ability, or an unfolding change without being the main action themselves -- words like `{{word:yao4}}` ("want, must"), `kěyǐ` ("can, may"), and `{{word:zhi1dao4}}` used in the sense of "know how to."',
      "These auxiliary words always sit immediately in front of the main predicate they're modifying, never after it.",
    ],
    tldr: {
      en: [
        "Words like {{word:yao4}} (want) and {{word:neng2}} (can) go right before the verb.",
      ],
    },
    necessity: {
      en: ["They let you say what you want or are able to do."],
    },
  },
  infoAuxiliaryOrder: {
    title: { en: ["Auxiliary Verb Word Order"] },
    items: [
      {
        en: [
          "Subject + Auxiliary Verb + Main Predicate -- the auxiliary always comes directly before the predicate it modifies.",
        ],
      },
    ],
  },
  example3: { en: ["Are you able to come?"] },
  example5: { en: ["I want to stay in my parents' place."] },
  exercise1: { en: ["You may keep your name."] },
  exercise3: { en: ["Do you want to eat some fish?"] },
  answer1: {
    en: [
      "{{Word:ni3}} kěyǐ {{word:liu2}} {{word:ni3}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:ni3}} {{word:yao4}}-{{word:bu4}}-{{word:yao4}} {{word:chi1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?",
    ],
  },
};

export default en;
