// English text for lesson-15, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Proper Names & Geography"],
  /** summary */
  [
    "Proper names -- people, places, streets -- are written in quotation marks and behave as adjectives, placed directly before the generic noun that says what kind of thing they are (`\"Name\" {{word:ren2}}`, `\"Name\" {{word:di4fang1}}`).",
  ],

  /** vocab: fāngfǎ */
  ["way, street, method, path"],
  /** vocab: nǐ-jiào-de cí */
  ["name"],
  /** vocab: dǎ */
  ["to fight, battle, compete against"],

  /** prose: proper names are quoted and behave as adjectives before the noun they identify */
  {
    text: [
      "A unique external identity -- a person's name, a specific city, a country -- doesn't get folded into Hao-shuo-de's pinyin spelling system at all.",
      "It's written exactly as it sounds, enclosed in quotation marks, so it's always visually obvious where the borrowed name starts and stops.",
      "Once quoted, a proper name behaves exactly like any other adjective: it sits directly before the generic noun that says what kind of thing it is.",
    ],
    tldr: ['A proper name is written in quotation marks and placed directly before the generic noun it identifies -- `"Name" + {{word:ren2}}/{{word:fang1fa3}}/{{word:di4fang1}}`.'],
    necessity: ["Explains why sentences suddenly contain quoted foreign-looking words, and confirms they follow the same before-the-noun placement every other adjective does."],
  },
  /** info: Proper Names as Adjectives */
  {
    title: ["Proper Names as Adjectives"],
    items: [
      {
        text: ["A quoted proper name is placed directly before the generic noun that identifies what kind of thing it is:"],
        items: [
          { text: ['`"Name"` + `{{word:ren2}}` -- the person named ...'] },
          { text: ['`"Name"` + `{{word:fang1fa3}}` -- the street/way of ...'] },
          { text: ['`"Name"` + `{{word:di4fang1}}` -- the place/country of ...'] },
        ],
      },
    ],
  },

  /** example 1 */
  ["My name is Apu."],
  /** example 2 */
  ["Africa has many people."],
  /** example 3 */
  ["The Chinese lady is going to that street/way."],
  /** example 4 */
  ["Berlin is in Germany."],
  /** example 5 */
  ["Do you know English?"],
  /** example 6 */
  ["Mr. Sulu fights a bad guy."],
  /** example 7 */
  ["This country is very large."],

  /** exercise 1 */
  ["Are you from Germany?"],
  /** exercise 2 */
  ["What is your name?"],
  /** exercise 3 */
  ["I am going to England."],

  /** answer 1 */
  ['{{Word:ni3}} {{word:shi4}}-{{word:bu4}}-{{word:shi4}} "Deguo" {{word:di4fang1}}-{{word:de}} {{word:ren2}}?'],
  /** answer 2 */
  ["{{Word:ni3}}-{{word:de}} {{word:ni3}}-{{word:jiao4}}-{{word:de}} {{word:ci2}} {{word:shi4}} {{word:shen2me}}?"],
  /** answer 3 */
  ['{{Word:wo3}} {{word:qu4}} "Yingguo" {{word:di4fang1}}.'],
];

export default en;
