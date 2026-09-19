// English text for lesson-04, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["You and I"],
  /** summary */
  [
    'Pronouns like {{word:wo3}} ("I") and {{word:ni3}} ("you") behave exactly like ordinary number-neutral nouns and take the Subject spot; {{word:wo3}} is strictly singular, and plural forms like "we" are built by adding other nouns (e.g., {{word:wo3}} {{word:he2}} {{word:ta1}}). Possession is shown by binding a pronoun to a noun with -{{word:de}}, the same particle from Lesson 4.',
  ],

  /** vocab: wǒ */
  ["I, me"],
  /** vocab: nánrén */
  ["man, male"],
  /** vocab: nǐ */
  ["you"],
  /** vocab: qún */
  ["community, group"],
  /** vocab: xīn */
  ["new, another, fresh"],

  /** prose: pronouns are ordinary nouns, wǒ is singular */
  {
    text: [
      'Hao-shuo-de pronouns behave like any other noun you\'ve already met — <audio-example zh="我">{{word:wo3}}</audio-example> ("I") and <audio-example zh="你">{{word:ni3}}</audio-example> ("you") simply take the Subject spot from Lesson 2, no special treatment required.',
      "",
      "Like every Hao-shuo-de noun, they carry no number of their own, but unlike English, <audio-example zh=\"我\">{{word:wo3}}</audio-example> does not double as \"we\" — it always means \"I\" (singular).",
      'To say "we," you combine it with other words: <audio-example zh="我和他">{{word:wo3}} {{word:he2}} {{word:ta1}}</audio-example> ("I and him/her") or <audio-example zh="我和多人">{{word:wo3}} {{word:he2}} {{word:duo1}} {{word:ren2}}</audio-example> ("I and many people").',
      'The same goes for <audio-example zh="你">{{word:ni3}}</audio-example>: it\'s "you" (singular) by default; for "you all," you\'d say something like <audio-example zh="你和他们">{{word:ni3}} {{word:he2}} tāmen</audio-example> ("you and them") or add a number.',
      "Context and added nouns do the work that English does with separate plural pronoun forms.",
    ],
    tldr: ['Pronouns are ordinary nouns that fill the Subject spot; {{word:wo3}} means "I" only, and plural forms like "we" are built with additional nouns.'],
    necessity: ['Clarifies that {{word:wo3}} is strictly singular, unlike English "I/we," and shows how plural pronouns are formed compositionally rather than with a separate set of words.'],
  },

  /** prose: possession via -de */
  {
    text: [
      'To show possession, bind the pronoun to a noun with <code>-{{word:de}}</code>, the same connecting particle from Lesson 4: <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> ("my"), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> ("your").',
      "Same hyphen, same job — gluing one word onto another to form a single descriptive unit — whether what's doing the describing is an adjective, a verb turned into a noun, or now, a pronoun.",
    ],
    tldr: ['Possession is shown by binding a pronoun to a noun with -{{word:de}}: {{word:wo3}}-{{word:de}} ("my"), {{word:ni3}}-{{word:de}} ("your").'],
    necessity: ["Shows -{{word:de}} doing the same job a third time (after adjectives and verb-to-noun), confirming it's one general binding rule, not three separate ones."],
  },

  /** example 1 */
  ["I am a person."],
  /** example 2 */
  ["I am a man."],
  /** example 3 */
  ["You are a good person."],
  /** example 4 */
  ["This is my document."],
  /** example 5 */
  ["Your place is new."],
  /** example 6 */
  ["My community is large."],
  /** example 7 */
  ["The man's animal is small."],

  /** exercise 1 */
  ["Your fruit is good."],
  /** exercise 2 */
  ["This is a new community."],
  /** exercise 3 */
  ["I am a good person."],

  /** answer 1 */
  ["{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}."],
  /** answer 2 */
  ["{{Word:zhe4}}-ge {{word:shi4}} {{word:xin1}}-{{word:de}} {{word:qun2}}."],
  /** answer 3 */
  ["{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}."],
];

export default en;
