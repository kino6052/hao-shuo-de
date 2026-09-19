// English text for lesson-02, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Words and Sentences"],
  /** summary */
  ["A noun names a person, place, or thing; the simplest sentence is NOUN + shì + NOUN."],

  /** vocab: dōngxi */
  ["thing, something, being"],
  /** vocab: rén */
  ["person, human"],
  /** vocab: shuǐguǒ */
  ["fruit, vegetable"],
  /** vocab: xiě-de dōngxi */
  ["document, written thing"],
  /** vocab: nǚrén */
  ["woman, female"],
  /** vocab: zhè */
  ["this"],
  /** vocab: dòngwù */
  ["animal, land mammal"],

  /** prose: noun + shì + noun, no number by itself */
  {
    text: [
      "A noun is a word for a person, place, or thing.",
      "To build a simple sentence, follow this model:",
      "NOUN + shì + NOUN.",
      "{{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.",
      "Something is something.",
      "",
      'By themselves, nouns are not singular or plural. The word {{word:dong1xi}} can mean either "thing" or "things." We will explain in future chapters how to specify such meanings.',
    ],
  },

  /** example 1 */
  ["This is a person."],
  /** example 2 */
  ["This is a fruit."],
  /** example 3 */
  ["A document is a thing."],
  /** example 4 */
  ["The person is a woman."],
  /** example 5 */
  ["Animals are things."],
  /** example 6 */
  ["Women are people."],

  /** exercise 1 */
  ["Something is something."],
  /** exercise 2 */
  ["This is a document."],
  /** exercise 3 */
  ["The woman is a person."],
  /** exercise 4 */
  ["Humans are beings."],
  /** exercise 5 */
  ["The animal is female."],
  /** exercise 6 */
  ["Fruits are things."],
  /** exercise 7 */
  ["This is a piece of paper."],

  /** answer 1 */
  ["{{Word:dong1xi}} {{word:shi4}} {{word:dong1xi}}."],
  /** answer 2 */
  ["{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}."],
  /** answer 3 */
  ["{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}."],
  /** answer 4 */
  ["{{Word:ren2}} {{word:shi4}} {{word:dong1xi}}."],
  /** answer 5 */
  ["{{Word:dong4wu4}} {{word:shi4}} {{word:nv3ren2}}."],
  /** answer 6 */
  ["{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."],
  /** answer 7 */
  ["{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}."],
];

export default en;
