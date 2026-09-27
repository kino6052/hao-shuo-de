// English text for lesson-08, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Time 1 — When it happens"] },
  summary: {
    en: [
      "We often need to say when something happens.",
      "In this lesson, you'll be able to say \"I ate.\", \"I'm eating right now.\", \"I will eat.\", and \"Today, I sleep.\"",
    ],
  },
  vocabShijian: { en: ["time, moment, occasion"] },
  vocabLe: {
    en: [
      "a small word placed right after a verb to mark that the action is finished",
    ],
  },
  vocabHui: {
    en: [
      "placed right before a verb to mark the action as something that will happen",
    ],
  },
  vocabZai: {
    en: [
      "to be at/in a place; placed right before a verb instead, it marks the action as happening right now",
    ],
  },
  vocabRi: { en: ["sun"] },
  vocabYue: { en: ["moon"] },
  vocabShuijiao: { en: ["sleep"] },
  vocabGuo: { en: ["have ever done"] },
  proseLeCompletion: {
    en: [
      "Hao-shuo-de verbs never change shape to show when something happened -- there's no separate word for \"eat\" versus \"ate\" versus \"will eat\". Instead, a small set of words placed right next to the verb do that job.",
      "The first and most useful of these is `{{word:le}}`. Placed right after a verb, it marks that the action is finished -- close to English \"did\" or \"have done\", though it's really about the action being DONE, not about time itself.",
      'Most of the time that lines up with "the past", since a finished action usually did happen earlier. But a sentence can use `{{word:le}}` for something that just finished a second ago, or something expected to be finished by a later point.',
    ],
    tldr: {
      en: ["Put {{word:le}} after a verb to say it is done."],
    },
    necessity: {
      en: [
        "Verbs never change, so small words like {{word:le}} show when.",
      ],
    },
  },
  infoCompletionMarker: {
    title: { en: ["Marking a Finished Action: `{{word:le}}`"] },
    items: [
      {
        en: [
          "Put `{{word:le}}` right after a verb to say that action is finished. It's about being DONE, not about time -- it can describe something that just finished, or something that will be finished by a later point.",
        ],
      },
    ],
  },
  leExample1: { en: ["I've eaten. / I ate."] },
  proseGuo: {
    en: [
      "`guò` attaches right after a verb the same way `{{word:le}}` does, but it says something different: not that the action just finished, but that you've done it before, at some point -- close to English \"have done\" (as in \"I have eaten that before\").",
      "`{{word:ting1}}-guò` means \"have heard it before\" -- you're describing past experience, not one single finished action.",
    ],
    tldr: {
      en: [
        "Put {{word:guo4}} after a verb to say you have done it before.",
      ],
    },
    necessity: {
      en: [
        "Now you can say \"I've been there\" or \"I've eaten that\".",
      ],
    },
  },
  guoExample1: { en: ["I've heard Hao-shuo-de before."] },
  proseZai: {
    en: [
      '`{{word:zai4}}` works differently from `{{word:le}}` and `guò`: instead of attaching after the verb, it goes right in front of it, and marks the action as happening right now -- close to English "-ing".',
      '`{{word:zai4}} {{word:chi1}}` means "is eating", happening at this very moment.',
      "You already know `{{word:zai4}}` as \"to be at, to be in\" a place; used this way, in front of a verb, it's the same idea stretched to cover an action instead of just a location -- you're \"in the middle of\" doing something.",
    ],
    tldr: {
      en: [
        "Put {{word:zai4}} before a verb to say it is happening right now.",
      ],
    },
    necessity: { en: ['It works like "-ing" in English.'] },
  },
  zaiExample1: { en: ["He/She is eating."] },
  proseHui: {
    en: [
      "`{{word:hui4}}` also goes right in front of a verb, and marks that the action hasn't happened yet but will -- close to English \"will\" or \"going to\".",
      '`{{word:hui4}} {{word:chi1}}` means "will eat", something expected to happen later.',
    ],
    tldr: {
      en: [
        "Put {{word:hui4}} before a verb to say it will happen.",
      ],
    },
    necessity: { en: ["Now you can talk about what comes next."] },
  },
  huiExample1: { en: ["I will eat."] },
  example3: { en: ["A large animal is eating you."] },
  example5: { en: ["You made new food."] },
  example1L08: { en: ["What time is he coming?"] },
  exercise2: { en: ["The woman obeyed the man."] },
  exercise3: { en: ["The friends ate meat."] },
  exercise1L08: { en: ['Ask: "What time are you coming?"'] },
  answer2: {
    en: [
      "{{Word:nv3ren2}} {{word:ting1}} {{word:le}} {{word:nan2ren2}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:hao3}}-{{word:de}} {{word:ren2}} {{word:chi1}} {{word:le}} {{word:dong4wu4}}.",
    ],
  },
  answer1L08: {
    en: [
      "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:lai2}}?",
    ],
  },
};

export default en;
