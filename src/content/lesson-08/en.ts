// English text for lesson-08, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Prepositions & Coverbs"],
  /** summary */
  [
    "Words like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` work as coverbs: they introduce a noun phrase and sit before the main verb, and if no other verb is present, the coverb itself becomes the main predicate.",
  ],

  /** vocab: gěi */
  ["to, for, give"],
  /** vocab: zài */
  ["at, in, present, existing"],
  /** vocab: yòng */
  ["using, with, by means of"],
  /** vocab: yīnwèi */
  ["from, because of"],

  /** prose: coverbs introduce a noun phrase and sit before the main verb */
  {
    text: [
      "A handful of Hao-shuo-de words work double duty as both a verb on their own and a coverb -- a word that introduces a noun phrase and sits in front of the main action, the way a preposition would in English.",
      "`{{word:gei3}}` (\"give, to, for\"), `{{word:zai4}}` (\"at, in\"), `{{word:yong4}}` (\"using, by means of\"), and `{{word:yin1wei4}}` (\"because of\") all work this way.",
      "A coverb phrase always sits between the subject and the main verb, never after it:",
    ],
    tldr: ["Coverbs like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` introduce a noun phrase and sit right before the main verb."],
    necessity: ["Establishes the coverb word-order slot before any example sentence uses more than one verb-like word in a row."],
  },
  /** info: Coverb Word Order */
  {
    title: ["Coverb Word Order"],
    items: [
      { text: ["Subject + Coverb Phrase + Main Verb + Object -- the coverb phrase always comes between the subject and the main action, never after it."] },
    ],
  },
  /** prose: with no other verb, the coverb itself becomes the main predicate */
  {
    text: [
      "If a clause has no separate action verb, the coverb doesn't leave an empty slot behind -- it simply steps up and serves as the main predicate by itself.",
      '`{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` (\"I am in the house\") has no other verb at all; `{{word:zai4}}` alone is doing the whole job of the sentence.',
    ],
    tldr: ["With no other verb in the clause, the coverb itself becomes the main predicate."],
    necessity: ["Explains sentences like `{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` that would otherwise look like they're missing a verb."],
  },

  /** example 1 */
  ["I give a swimming animal to her."],
  /** example 2 */
  ["I give a swimming animal to her in the house."],
  /** example 3 */
  ["I am in the house."],
  /** example 4 */
  ["I am moving towards you / going to your side."],
  /** example 5 */
  ["My parent is going to the sea / big water."],
  /** example 6 */
  ["Because of this, I worked a lot."],
  /** example 7 */
  ["I speak in Hao-shuo-de / use Hao-shuo-de to speak."],

  /** exercise 1 */
  ["The worker uses tools."],
  /** exercise 2 */
  ["He gives things from his house."],
  /** exercise 3 */
  ["Why did you do it?"],

  /** answer 1 */
  ["{{Word:zhe4}}-ge {{word:gong1ju4}}-{{word:de}} {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}. (or {{Word:zhe4}}-ge {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}.)"],
  /** answer 2 */
  ["{{Word:ta1}} {{word:gei3}} {{word:lai2}}-{{word:ta1}}-{{word:de}}-{{word:di4fang1}}-{{word:de}} {{word:dong1xi}}."],
  /** answer 3 */
  ["{{Word:wei4shen2me}} {{word:ni3}} {{word:zuo4}} {{word:le}} {{word:zhe4}}-ge?"],
];

export default en;
