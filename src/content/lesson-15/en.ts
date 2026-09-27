// English text for lesson-15, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 4 — Becoming and making"] },
  summary: {
    en: [
      "Things change, and we often make them change.",
      "In this lesson, you'll be able to say \"It got better.\", \"It became bad.\", \"fix it (make it good)\", and \"strong\".",
    ],
  },
  vocabBian: { en: ["to become, change into"] },
  vocabBa: { en: ['puts the thing first ("bǎ it make good")'] },
  vocabNong: { en: ["do, make"] },
  vocabDe: { en: ["get"] },
  vocabLiliang: { en: ["power, energy"] },
  vocabHuai: { en: ["bad, negative, broken"] },
  vocabNi: { en: ["mud, paste"] },
  proseChangeOnset: {
    en: [
      'To describe something changing from one state to another -- "becoming big" or "turning bad" -- `{{word:bian4}}` ("to become, change into") steps directly into the main verb slot itself, rather than sitting in front of another verb.',
      "To describe a change that's gradual, or just getting underway, `{{word:kai1shi3}}` (\"to begin to\") sits in front of the verb or adjective it's introducing instead.",
    ],
    tldr: {
      en: [
        "Use {{word:bian4}} to say something changes into something else.",
      ],
    },
    necessity: {
      en: [
        "{{word:kai1shi3}} is different: it says a change is only starting.",
      ],
    },
  },
  infoChangeVsOnset: {
    title: { en: ["`{{word:bian4}}` vs. `{{word:kai1shi3}}`"] },
    items: [
      {
        en: [
          '`{{word:bian4}}` ("to become") fills the main verb slot directly for a state transition: X `{{word:bian4}}` Y.',
        ],
      },
      {
        en: [
          '`{{word:kai1shi3}}` ("to begin to") sits right before the verb or adjective to mark a gradual change, or the start of an action.',
        ],
      },
    ],
  },
  example1: { en: ["The city / room is becoming big."] },
  example4: { en: ["The fruit became bad."] },
  proseBuildingAdjective: {
    en: [
      "Not every idea gets its own dedicated word in Hao-shuo-de -- and \"strong\" is a good example of why that's fine.",
      'Rather than adding a 121st word to the dictionary just for this one concept, Hao-shuo-de builds it out of two words you already know: {{word:you3}} ("to have," from Lesson 5) plus {{word:li4liang4}} ("power, energy").',
      'Put them side by side and you get {{word:you3}} {{word:li4liang4}}, literally "to have power" -- which is really just describing what being strong actually means, one plain idea at a time, instead of packaging it into a single opaque label.',
      "",
      "To use that description the way you'd use any other adjective, bind it onto the noun it's describing with `-{{word:de}}`, the same connecting particle from Lesson 3: {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}, \"a strong man.\"",
      "Once it's bound this way, the whole three-word phrase behaves exactly like a single adjective would -- it just happens to be built rather than memorized.",
    ],
    tldr: {
      en: [
        '"Strong" is {{word:you3}}-{{word:li4liang4}}: "having strength".',
      ],
    },
    necessity: {
      en: [
        "When there is no word for something, build it from words you know.",
      ],
    },
  },
  infoBuildingAdjective: {
    title: { en: ["Building an Adjective"] },
    items: [
      {
        en: [
          "When the dictionary has no word for a description you need, combine an existing verb and noun (e.g. {{word:you3}} + {{word:li4liang4}}) and bind the pair onto its target noun with `-{{word:de}}`, the same way any adjective phrase attaches.",
        ],
      },
    ],
  },
  proseStateChange: {
    en: [
      "There's a second way `{{word:le}}` shows up beyond marking a finished action on a verb (Lesson 8): attached directly to an adjective, `{{word:le}}` marks that a state has changed -- that something wasn't true a moment ago, and now it is.",
      "`{{word:hao3}} {{word:le}}` doesn't just restate \"good\"; it means something has become good, or gotten better than it was.",
      "This is the same `{{word:le}}`, doing the same underlying job -- marking the moment a change became real -- just applied to a description instead of an action.",
      "Between this and the causative construction below, Hao-shuo-de actually has two distinct ways to talk about something changing: `{{word:le}}` reports that a change already happened, while `{{word:ba3}}`...`{{word:bian4}}` (next) is how you make one happen yourself.",
    ],
    tldr: {
      en: [
        'Put {{word:le}} after a describing word to say it changed: {{word:hao3}} {{word:le}} means "it got good".',
      ],
    },
    necessity: {
      en: ["Now you can say that things got better or worse."],
    },
  },
  infoStateChange: {
    title: { en: ["State Change with `{{word:le}}`"] },
    items: [
      {
        en: [
          '`{{word:le}}` attaches directly after an adjective to mark that a state has changed. `{{word:hao3}} {{word:le}}` means "it has become good," not simply "it is good."',
        ],
      },
    ],
  },
  infoCausative: {
    title: { en: ["The Causative Rule"] },
    items: [
      {
        en: [
          'To turn an adjective into a transitive action (such as transforming "good" into "to fix/improve" or "bad" into "to break"), use `{{word:ba3}}` paired with `{{word:bian4}}` ("to become/change"):',
        ],
        items: [
          {
            en: [
              "Subject + `{{word:ba3}}` + Object + `{{word:bian4}}` + Adjective",
            ],
          },
        ],
      },
    ],
  },
  example2L10: { en: ["Water strengthens me / gives me energy."] },
  example3L10: { en: ["You're a strong man."] },
  example6L10: { en: ["The water has gotten good now."] },
  example7L10: { en: ["Nobody is bad."] },
  exercise2: { en: ["The path becomes narrow."] },
  exercise1L10: { en: ["The man doesn't eat bad fruit."] },
  exercise2L10: { en: ["Eating makes me tall."] },
  exercise4L10: { en: ["The community has become strong."] },
  answer2: {
    en: ["{{Word:fang1fa3}} {{word:bian4}} {{word:xiao3}}."],
  },
  answer1L10: {
    en: [
      "{{Word:nan2ren2}} {{word:bu4}} {{word:chi1}} {{word:huai4}}-{{word:de}} {{word:shui3guo3}}.",
    ],
  },
  answer2L10: {
    en: [
      "{{Word:chi1}} {{word:ba3}} {{word:wo3}} {{word:bian4}} {{word:da4}}.",
    ],
  },
  answer4L10: {
    en: [
      "{{Word:qun2}} {{word:you3}}-{{word:li4liang4}} {{word:le}}.",
    ],
  },
};

export default en;
