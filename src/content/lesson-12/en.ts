// English text for lesson-12, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Colors and la"],
  /** summary */
  [
    "Where Toki Pona would use the particle _la_ to frame a condition or context, Hao-shuo-de just fronts the context phrase and follows it with a comma, and colors behave like any other two-syllable adjective, binding to their noun with `-{{word:de}}`.",
  ],

  /** vocab: huángsè */
  ["yellow"],
  /** vocab: lánsè */
  ["blue, green"],
  /** vocab: hóngsè */
  ["red"],
  /** vocab: hēisè */
  ["black, dark"],
  /** vocab: báisè */
  ["white, pale"],

  /** prose: no la particle -- context/condition is a fronted clause followed by a comma */
  {
    text: [
      "Toki Pona sets aside a whole particle, _la_, just to mark a frame of reference or an \"if/when\" condition ahead of the main clause.",
      "Hao-shuo-de doesn't need one: the sentence itself already tells you what's context and what's the main statement, purely from where things sit.",
      "Put the context or condition phrase at the very start of the sentence, immediately followed by a pause -- a comma -- and everything after that comma is the main statement it applies to.",
    ],
    tldr: ["A fronted phrase followed by a comma marks context or condition -- no separate particle like Toki Pona's _la_ is needed."],
    necessity: ["Explains sentences that open with a time/condition clause before any dedicated marker word ever appears for it."],
  },
  /** info: Fronted Context Clause */
  {
    title: ["Fronted Context Clause"],
    items: [
      { text: ["[Context / Condition Phrase], [Main Statement] -- the context phrase always comes first, set off by a comma."] },
    ],
  },
  /** prose: colors are two-syllable adjectives, binding to their noun with -de */
  {
    text: [
      "Colors don't need any special grammar of their own -- each one is just a two-syllable adjective, and adjectives already have a job description from Lesson 4.",
      "When a color modifies a target noun, it binds to it with `-{{word:de}}` via a hyphen, exactly the way any other adjective does.",
    ],
    tldr: ["Colors are ordinary two-syllable adjectives -- they bind to their noun with `-{{word:de}}` like any other."],
    necessity: ["Confirms colors don't introduce a new grammatical category -- Lesson 4's adjective rule already covers them."],
  },

  /** example 1 */
  ["Tonight / during this dark time, he is coming."],
  /** example 2 */
  ["If you see yellow water, don't drink it."],
  /** example 3 */
  ["The blue/green tool is in the white place."],
  /** example 4 */
  ["What time are your parents coming?"],
  /** example 5 */
  ["If my body turns blue, this is very bad."],
  /** example 6 */
  ["In a group, we are strong."],

  /** exercise 1 */
  ["When the sun is red, it is the right time."],
  /** exercise 2 */
  ["If we don't have any meat, we will eat fruit."],
  /** exercise 3 */
  ["I feel bad because of the large battle."],

  /** answer 1 */
  ["{{Word:shang4mian4}}-{{word:de}}-{{word:ri4}} {{word:hong2se4}}-{{word:de}} {{word:shi2jian1}}, {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:shi2jian1}}."],
  /** answer 2 */
  ["{{Word:wo3}} {{word:he2}} {{word:ni3}} {{word:he2}} {{word:ta1}} {{word:mei2}}-{{word:you3}} {{word:dong4wu4}} {{word:dong1xi}}, {{word:wo3}} {{word:he2}} {{word:ni3}} {{word:he2}} {{word:ta1}} {{word:chi1}} {{word:shui3guo3}}."],
  /** answer 3 */
  ["{{Word:you3}} {{word:da4}}-{{word:de}} {{word:da3}}, {{word:wo3}} {{word:jue2de}} {{word:huai4}}."],
];

export default en;
