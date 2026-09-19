// English text for lesson-14, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Particles and Other Special Words"],
  /** summary */
  [
    "Hao-shuo-de marks a speaker's perspective with `{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` (\"from the perspective of\"), connects multiple subjects with `{{word:he2}}` (\"and\"), and sequences a second action or state on the same subject with `{{word:ye3}}` (\"also\") instead of a conjunction.",
  ],

  /** vocab: xiàmiàn */
  ["lowly, below, downward"],
  /** vocab: bùtóng */
  ["different, altered"],
  /** vocab: hé */
  ["and"],
  /** vocab: lěng */
  ["cold, cool"],
  /** vocab: dòng */
  ["door, hole, opening"],
  /** vocab: kāishǐ */
  ["to open, begin"],
  /** vocab: yīyàng */
  ["same, similar, sibling"],
  /** vocab: tián */
  ["sweet, fragrant"],
  /** vocab: dànshì */
  ["but, however"],
  /** vocab: gěi */
  ["to, for, from the perspective of"],
  /** vocab: yě */
  ["also"],
  /** vocab: shàngmiàn-de ài */
  ["God (literally \"love from above\")"],

  /** prose: dui4...lai2shuo1 marks perspective, he2 connects subjects, ye3 sequences states on one subject */
  {
    text: [
      "Hao-shuo-de handles subjective perspective the same way it handles everything else -- by reusing an existing construction instead of inventing a particle.",
      "`{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` (\"regarding ... to say,\" i.e. \"from the perspective of\") frames a whole clause as one person's point of view.",
      "To connect multiple subjects within one clause, use `{{word:he2}}` (\"and\").",
      "But when a single subject does or is more than one thing in a row, Hao-shuo-de doesn't reach for a conjunction at all -- it just adds `{{word:ye3}}` (\"also\") in front of the second verb or adjective, the same adverbial slot other single-word adverbs already occupy.",
    ],
    tldr: ["`{{word:dui4}} ... {{word:lai2}} {{word:shuo1}}` marks perspective, `{{word:he2}}` connects multiple subjects, and `{{word:ye3}}` sequences a second state onto the same subject."],
    necessity: ["Distinguishes three constructions that can look similar in translation (\"and\", \"also\", \"from X's view\") but occupy different grammatical slots in Hao-shuo-de."],
  },
  /** info: Perspective and Connection */
  {
    title: ["Perspective and Connection"],
    items: [
      { text: ["**Perspective:** `{{word:dui4}} [person] {{word:lai2}} {{word:shuo1}}` frames the whole clause that follows as that person's point of view."] },
      { text: ["**Multiple subjects:** join them with `{{word:he2}}` (\"and\"): `[Subject A] {{word:he2}} [Subject B] ...`."] },
      { text: ["**Multiple actions/states on one subject:** skip the conjunction and place `{{word:ye3}}` (\"also\") directly before the second verb or adjective instead."] },
    ],
  },

  /** example 1 */
  ["I like sweets. / From my perspective, sweet things are good."],
  /** example 2 */
  ["The universe is beautiful from the perspective of God."],
  /** example 3 */
  ["The fatherland is small and cold."],
  /** example 4 */
  ["But men and women are working and are happy."],
  /** example 5 */
  ["My sister opened the first door and the second door."],
  /** example 6 */
  ["Only your house is black. / Your house is black, not other houses."],
];

export default en;
