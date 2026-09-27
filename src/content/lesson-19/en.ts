// English text for lesson-19, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Relationships 1 — Inside a sentence"] },
  summary: {
    en: [
      "We often need to say who something is for, or what we do it with.",
      "In this lesson, you'll be able to say \"give it to me\", \"write with a tool\", \"you and me\", \"this or that\", and \"for me\".",
    ],
  },
  vocabGei: { en: ["to, for, give"] },
  vocabYong: { en: ["using, with, by means of"] },
  vocabHe: { en: ["and"] },
  vocabHuozhe: { en: ["or"] },
  vocabDui: { en: ["toward, for"] },
  vocabQun: { en: ["group"] },
  vocabMo: { en: ["touch"] },
  vocabDa: { en: ["hit"] },
  proseRelationshipWords: {
    en: [
      "A handful of Hao-shuo-de words specify a relationship -- to/for, at/in, using, because of -- and sit right before the main verb, the way a preposition would in English.",
      '`{{word:gei3}}` ("give, to, for"), `{{word:zai4}}` ("at, in"), `{{word:yong4}}` ("using, by means of"), and `{{word:yin1wei4}}` ("because of") all work this way.',
      "A relationship phrase always sits between the subject and the main verb, never after it:",
    ],
    tldr: {
      en: [
        "Words like {{word:gei3}} (to) and {{word:yong4}} (with) go right before the main verb.",
      ],
    },
    necessity: {
      en: ["They say who it is for, or what it is done with."],
    },
  },
  infoRelationshipWordOrder: {
    title: { en: ["Specifying a Relationship"] },
    items: [
      {
        en: [
          "Subject + Relationship Phrase + Main Verb + Object -- the relationship phrase always comes between the subject and the main action, never after it.",
        ],
      },
    ],
  },
  example1L07: { en: ["I give a swimming animal to her."] },
  example7L07: {
    en: ["I speak in Hao-shuo-de / use Hao-shuo-de to speak."],
  },
  proseDuiHeYe: {
    en: [
      "Hao-shuo-de handles subjective perspective the same way it handles everything else -- by reusing an existing construction instead of inventing a particle.",
      "`{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` (\"regarding ... to say,\" i.e. \"from the perspective of\") frames a whole clause as one person's point of view.",
      'To connect multiple subjects within one clause, use `{{word:he2}}` ("and").',
      "But when a single subject does or is more than one thing in a row, Hao-shuo-de doesn't reach for a conjunction at all -- it just adds `{{word:ye3}}` (\"also\") in front of the second verb or adjective, the same adverbial slot other single-word adverbs already occupy.",
    ],
    tldr: {
      en: [
        '{{word:he2}} joins nouns ("you and me"). {{word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}} means "for me".',
      ],
    },
    necessity: {
      en: ["Now you can join people and say whose view it is."],
    },
  },
  infoPerspectiveConnection: {
    title: { en: ["Perspective and Connection"] },
    items: [
      {
        en: [
          "**Perspective:** `{{word:dui4}} [person] {{word:lai2}} {{word:shuo1}}` frames the whole clause that follows as that person's point of view.",
        ],
      },
      {
        en: [
          '**Multiple subjects:** join them with `{{word:he2}}` ("and"): `[Subject A] {{word:he2}} [Subject B] ...`.',
        ],
      },
      {
        en: [
          '**Multiple actions/states on one subject:** skip the conjunction and place `{{word:ye3}}` ("also") directly before the second verb or adjective instead.',
        ],
      },
    ],
  },
  example1L16: {
    en: [
      "I like sweets. / From my perspective, sweet things are good.",
    ],
  },
  example2L16: {
    en: [
      "The universe is beautiful from the perspective of God.",
    ],
  },
  exercise1L07: { en: ["The worker uses tools."] },
  exercise2L07: { en: ["He gives things from his house."] },
  exercise3L07: { en: ["Why did you do it?"] },
  answer1L07: {
    en: [
      "{{Word:zhe4}}-ge {{word:gong1ju4}}-{{word:de}} {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}. (or {{Word:zhe4}}-ge {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}.)",
    ],
  },
  answer2L07: {
    en: [
      "{{Word:ta1}} {{word:gei3}} {{word:lai2}}-{{word:ta1}}-{{word:de}}-{{word:di4fang1}}-{{word:de}} {{word:dong1xi}}.",
    ],
  },
  answer3L07: {
    en: [
      "{{Word:wei4shen2me}} {{word:ni3}} {{word:nong4}} {{word:le}} {{word:zhe4}}-ge?",
    ],
  },
};

export default en;
