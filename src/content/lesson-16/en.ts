// English text for lesson-16, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Modification Stacking"],
  /** summary */
  [
    "Where Toki Pona needs a dedicated particle (_pi_) to re-group a chain of modifiers, Hao-shuo-de just stacks them with `-{{word:de}}`, reading the whole qualifying phrase left to right as one block before it resolves onto the head noun.",
  ],

  /** vocab: zhíwù */
  ["plant, vegetation"],
  /** vocab: shēntǐ */
  ["body, physical state"],
  /** vocab: shíjiān */
  ["time, duration"],
  /** vocab: děng */
  ["to wait"],

  /** prose: -de stacks a chain of modifiers before the noun, no separate re-grouping particle needed */
  {
    text: [
      "Toki Pona needs a special particle, _pi_, whenever more than one modifier has to be re-grouped around a noun, to keep the phrase from being misread.",
      "Hao-shuo-de never runs into that problem, because `-{{word:de}}` (from Lesson 4) already does all the grouping work on its own.",
      "A whole descriptive phrase -- however many pieces it's built from -- precedes the noun it modifies as a single unit, bound together with `-{{word:de}}`, and is read left to right before resolving onto the head noun at the end.",
    ],
    tldr: ["`-{{word:de}}` stacks any number of modifiers before a noun as one left-to-right block -- no separate re-grouping particle is needed."],
    necessity: ["Confirms that long modifier chains don't require new grammar -- they're just Lesson 4's `-{{word:de}}` rule applied repeatedly."],
  },
  /** info: Modifier Stacking */
  {
    title: ["Modifier Stacking"],
    items: [
      { text: ["A chain of modifiers stacks directly before its noun, each piece bound by `-{{word:de}}`, and reads left to right as one unified block resolving onto the final head noun -- no separate grouping particle is needed."] },
    ],
  },

  /** example 1 */
  ["Today is good."],
  /** example 2 */
  ["The healthy woman waters the plants."],
  /** example 3 */
  ["The Hao-shuo-de community gives many things."],
  /** example 4 */
  ["Wait a very long time."],
  /** example 5 */
  ["Don't use bad tools."],

  /** exercise 1 */
  ["This battlefield is small."],
  /** exercise 2 */
  ["Men with strong bodies were waiting."],
  /** exercise 3 */
  ["The sun gives benefit to the plants."],

  /** answer 1 */
  ["{{Word:zhe4}}-ge {{word:da4}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  /** answer 2 */
  ["{{Word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:shen1ti3}}-{{word:de}} {{word:nan2ren2}} {{word:zai4}} {{word:deng3}}."],
  /** answer 3 */
  ["{{Word:ri4}} {{word:ba3}} {{word:zhi2wu4}} {{word:bian4}} {{word:hao3}}."],
];

export default en;
