// English text for lesson-09, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Pre-Verbs & Auxiliaries"],
  /** summary */
  [
    "Auxiliary verbs like `{{word:yao4}}` (\"want, must\"), `kěyǐ` (\"can, may\"), and `{{word:zhi1dao4}}` (\"know how to\") sit right before the main predicate, `{{word:bian4}}` steps into the main verb slot for a state change, and `{{word:kai1shi3}}` marks a gradual or starting change.",
  ],

  /** vocab: yào */
  ["to want, need, must, should"],
  /** vocab: kěyǐ */
  ["can, may, be able to"],
  /** vocab: zhīdào */
  ["to know, know how to"],
  /** vocab: kāishǐ */
  ["to begin to, start to, manage to"],
  /** vocab: biàn */
  ["to become, change into"],

  /** prose: auxiliary verbs sit right before the main predicate */
  {
    text: [
      "A small set of Hao-shuo-de words express intent, ability, or an unfolding change without being the main action themselves -- words like `{{word:yao4}}` (\"want, must\"), `kěyǐ` (\"can, may\"), and `{{word:zhi1dao4}}` used in the sense of \"know how to.\"",
      "These auxiliary words always sit immediately in front of the main predicate they're modifying, never after it.",
    ],
    tldr: ["Auxiliary verbs (intent/ability, e.g. `{{word:yao4}}`, `kěyǐ`) sit right before the main predicate."],
    necessity: ["Establishes where intent/ability words go before any sentence stacks one in front of a full verb phrase."],
  },
  /** info: Auxiliary Verb Word Order */
  {
    title: ["Auxiliary Verb Word Order"],
    items: [
      { text: ["Subject + Auxiliary Verb + Main Predicate -- the auxiliary always comes directly before the predicate it modifies."] },
    ],
  },
  /** prose: bian4 for direct state change, kaishi3 for gradual/starting change */
  {
    text: [
      "To describe something changing from one state to another -- \"becoming big\" or \"turning bad\" -- `{{word:bian4}}` (\"to become, change into\") steps directly into the main verb slot itself, rather than sitting in front of another verb.",
      "To describe a change that's gradual, or just getting underway, `{{word:kai1shi3}}` (\"to begin to\") sits in front of the verb or adjective it's introducing instead.",
    ],
    tldr: ["`{{word:bian4}}` is the main verb for a direct state change; `{{word:kai1shi3}}` sits before a verb/adjective for a gradual or starting change."],
    necessity: ["Distinguishes two different-looking \"change\" constructions so they aren't mistaken for interchangeable synonyms."],
  },
  /** info: bian4 vs kaishi3 */
  {
    title: ["`{{word:bian4}}` vs. `{{word:kai1shi3}}`"],
    items: [
      { text: ["`{{word:bian4}}` (\"to become\") fills the main verb slot directly for a state transition: X `{{word:bian4}}` Y."] },
      { text: ["`{{word:kai1shi3}}` (\"to begin to\") sits right before the verb or adjective to mark a gradual change, or the start of an action."] },
    ],
  },

  /** example 1 */
  ["The city / room is becoming big."],
  /** example 2 */
  ["I am learning Hao-shuo-de / beginning to know Hao-shuo-de."],
  /** example 3 */
  ["Are you able to come?"],
  /** example 4 */
  ["The fruit became bad."],
  /** example 5 */
  ["I want to stay in my parents' place."],
  /** example 6 */
  ["The plants started to have water."],

  /** exercise 1 */
  ["You may keep your name."],
  /** exercise 2 */
  ["The path becomes narrow."],
  /** exercise 3 */
  ["Do you want to eat some fish?"],

  /** answer 1 */
  ["{{Word:ni3}} kěyǐ {{word:liu2}} {{word:ni3}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}}."],
  /** answer 2 */
  ["{{Word:fang1fa3}} {{word:bian4}} {{word:xiao3}}."],
  /** answer 3 */
  ["{{Word:ni3}} {{word:yao4}}-{{word:bu4}}-{{word:yao4}} {{word:chi1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?"],
];

export default en;
