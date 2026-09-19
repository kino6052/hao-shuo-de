// English text for lesson-11, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Numbers and Order"],
  /** summary */
  [
    "Hao-shuo-de caps precise counting at two (`{{word:yi1}}-ge`, `{{word:liang3}}-ge`), uses `{{word:duo1}}` (\"many\") for anything beyond that, and marks ordinals like \"first\" or \"second\" by placing `dì-` before the number root.",
  ],

  /** vocab: dì */
  ["ordinal marker prefix (placed before a number to turn it into \"first, second, third...\")"],
  /** vocab: yī */
  ["one"],
  /** vocab: liǎng */
  ["two (used exclusively before measure words for counting objects/quantities)"],
  /** vocab: èr */
  ["two (used exclusively for mathematics, digit lists, serial numbers, and ordinal rankings)"],
  /** vocab: sān */
  ["three"],
  /** vocab: sì */
  ["four"],
  /** vocab: wǔ */
  ["five"],
  /** vocab: liù */
  ["six"],
  /** vocab: qī */
  ["seven"],
  /** vocab: bā */
  ["eight"],
  /** vocab: jiǔ */
  ["nine"],
  /** vocab: shí */
  ["ten"],
  /** vocab: bǎi */
  ["hundred"],
  /** vocab: qiān */
  ["thousand"],
  /** vocab: hào */
  ["number identity, name of a number, day of the month"],
  /** vocab: quánbù */
  ["all, completely, everything"],

  /** prose: counting maps onto Mandarin number rules, capping precise numbers at two */
  {
    text: [
      "Hao-shuo-de borrows Mandarin's number words wholesale, but keeps precise counting deliberately small: past two, a sentence stops naming an exact quantity and just says \"many\" instead.",
      "Two also splits into two different words depending on the job: `{{word:liang3}}` counts physical things, `èr` is reserved for math, digit lists, and ordinal counting -- they are never interchangeable.",
    ],
    tldr: ["Precise counting stops at two (`{{word:yi1}}`/`{{word:liang3}}`); `{{word:duo1}}` covers anything beyond that. `{{word:liang3}}` counts objects, `èr` is for math/ordinals only."],
    necessity: ["Prevents the common mistake of using `èr` to count objects, and explains why the book doesn't bother teaching precise numbers past two."],
  },
  /** info: Counting and Ordering */
  {
    title: ["Counting and Ordering"],
    items: [
      { text: ["**Quantities of One or Two:** bind the number root directly to the universal measure word `{{word:ge4}}` via a hyphen -- `{{word:yi1}}-ge` (\"one thing\"), `{{word:liang3}}-ge` (\"two things\"). Never use `èr` when counting physical objects."] },
      { text: ["**Indefinite Plurals:** for quantities beyond two, use `{{word:duo1}}` (\"many, a lot\") to convey generalized abundance instead of a precise count."] },
      { text: ["**Ordinal Numbers:** to mark strict sequencing (\"first,\" \"second\"), place the ordinal prefix `dì-` directly before the number root: `dì-{{word:yi1}}`, `dì-èr`."] },
    ],
  },

  /** example 1 */
  ["You are number one!"],
  /** example 2 */
  ["This is the second time / the second day."],
  /** example 3 */
  ["The two boys kept many plants."],
  /** example 4 */
  ["I know many languages."],
  /** example 5 */
  ["Everybody listens to her."],

  /** exercise 1 */
  ["What is the third thing?"],
  /** exercise 2 */
  ["I know two languages."],
  /** exercise 3 */
  ["This is the first day."],

  /** answer 1 */
  ["Dì-sān-ge {{word:dong1xi}} {{word:shi4}} {{word:shen2me}}?"],
  /** answer 2 */
  ["{{Word:wo3}} {{word:zhi1dao4}} {{word:liang3}}-ge {{word:shuo1}}."],
  /** answer 3 */
  ["{{Word:zhe4}}-ge {{word:ri4}} {{word:shi4}} dì-{{word:yi1}}-ge."],
];

export default en;
