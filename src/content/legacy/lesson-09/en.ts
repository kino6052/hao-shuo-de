// English text for lesson-09, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>` -- hover a key here to see the same JSDoc
// hint shape.ts declared for it. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pre-Verbs & Auxiliaries"] },
  summary: {
    en: [
      "Auxiliary verbs like `{{word:yao4}}` (\"want, must\"), `kěyǐ` (\"can, may\"), and `{{word:zhi1dao4}}` (\"know how to\") sit right before the main predicate, `{{word:bian4}}` steps into the main verb slot for a state change, and `{{word:kai1shi3}}` marks a gradual or starting change.",
    ],
  },

  vocabYao: { en: ["to want, need, must, should"] },
  vocabKeyi: { en: ["can, may, be able to"] },
  vocabZhidao: { en: ["to know, know how to"] },
  vocabKaishi: { en: ["to begin to, start to, manage to"] },
  vocabBian: { en: ["to become, change into"] },

  proseAuxiliaries: {
    en: [
      "A small set of Hao-shuo-de words express intent, ability, or an unfolding change without being the main action themselves -- words like `{{word:yao4}}` (\"want, must\"), `kěyǐ` (\"can, may\"), and `{{word:zhi1dao4}}` used in the sense of \"know how to.\"",
      "These auxiliary words always sit immediately in front of the main predicate they're modifying, never after it.",
    ],
    tldr: { en: ["Auxiliary verbs (intent/ability, e.g. `{{word:yao4}}`, `kěyǐ`) sit right before the main predicate."] },
    necessity: { en: ["Establishes where intent/ability words go before any sentence stacks one in front of a full verb phrase."] },
  },
  infoAuxiliaryOrder: {
    title: { en: ["Auxiliary Verb Word Order"] },
    items: [
      { en: ["Subject + Auxiliary Verb + Main Predicate -- the auxiliary always comes directly before the predicate it modifies."] },
    ],
  },
  proseChangeOnset: {
    en: [
      "To describe something changing from one state to another -- \"becoming big\" or \"turning bad\" -- `{{word:bian4}}` (\"to become, change into\") steps directly into the main verb slot itself, rather than sitting in front of another verb.",
      "To describe a change that's gradual, or just getting underway, `{{word:kai1shi3}}` (\"to begin to\") sits in front of the verb or adjective it's introducing instead.",
    ],
    tldr: { en: ["`{{word:bian4}}` is the main verb for a direct state change; `{{word:kai1shi3}}` sits before a verb/adjective for a gradual or starting change."] },
    necessity: { en: ["Distinguishes two different-looking \"change\" constructions so they aren't mistaken for interchangeable synonyms."] },
  },
  infoChangeVsOnset: {
    title: { en: ["`{{word:bian4}}` vs. `{{word:kai1shi3}}`"] },
    items: [
      { en: ["`{{word:bian4}}` (\"to become\") fills the main verb slot directly for a state transition: X `{{word:bian4}}` Y."] },
      { en: ["`{{word:kai1shi3}}` (\"to begin to\") sits right before the verb or adjective to mark a gradual change, or the start of an action."] },
    ],
  },

  example1: { en: ["The city / room is becoming big."] },
  example2: { en: ["I am learning Hao-shuo-de / beginning to know Hao-shuo-de."] },
  example3: { en: ["Are you able to come?"] },
  example4: { en: ["The fruit became bad."] },
  example5: { en: ["I want to stay in my parents' place."] },
  example6: { en: ["The plants started to have water."] },

  exercise1: { en: ["You may keep your name."] },
  exercise2: { en: ["The path becomes narrow."] },
  exercise3: { en: ["Do you want to eat some fish?"] },

  answer1: { en: ["{{Word:ni3}} kěyǐ {{word:liu2}} {{word:ni3}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}}."] },
  answer2: { en: ["{{Word:fang1fa3}} {{word:bian4}} {{word:xiao3}}."] },
  answer3: { en: ["{{Word:ni3}} {{word:yao4}}-{{word:bu4}}-{{word:yao4}} {{word:chi1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?"] },
};

export default en;
