// English text for lesson-07, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["More Modifiers"],
  /** summary */
  [
    'Hao-shuo-de builds "strong" by combining {{word:you3}} with {{word:li4liang4}}, adjectives can modify verbs directly as adverbs, `{{word:le}}` attached to an adjective marks a change of state, and the {{word:ba3}}...{{word:bian4}} construction turns an adjective into a causative action ("to make good" = "to fix").',
  ],

  /** vocab: bù */
  ["not, no"],
  /** vocab: huài */
  ["bad, negative, broken"],
  /** vocab: duō */
  ["many, a lot, very"],
  /** vocab: fùmǔ */
  ["parent, ancestor"],
  /** vocab: yī */
  ["one, united"],
  /** vocab: lìliàng */
  ["power, energy"],

  /** prose: "strong" is built from you3 + li4liang4, bound with -de */
  {
    text: [
      "Not every idea gets its own dedicated word in Hao-shuo-de -- and \"strong\" is a good example of why that's fine.",
      'Rather than adding a 121st word to the dictionary just for this one concept, Hao-shuo-de builds it out of two words you already know: {{word:you3}} ("to have," from Lesson 6) plus {{word:li4liang4}} ("power, energy").',
      "Put them side by side and you get {{word:you3}} {{word:li4liang4}}, literally \"to have power\" -- which is really just describing what being strong actually means, one plain idea at a time, instead of packaging it into a single opaque label.",
      "",
      "To use that description the way you'd use any other adjective, bind it onto the noun it's describing with `-{{word:de}}`, the same connecting particle from Lesson 4: {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}, \"a strong man.\"",
      "Once it's bound this way, the whole three-word phrase behaves exactly like a single adjective would -- it just happens to be built rather than memorized.",
    ],
    tldr: ['"Strong" is built from {{word:you3}} + {{word:li4liang4}} ("to have power"), bound with `-{{word:de}}` to modify a noun directly.'],
    necessity: ["Shows that Hao-shuo-de's small dictionary handles missing adjectives by composing existing words, not by inventing new vocabulary."],
  },
  /** info: Building an Adjective */
  {
    title: ["Building an Adjective"],
    items: [
      { text: ["When the dictionary has no word for a description you need, combine an existing verb and noun (e.g. {{word:you3}} + {{word:li4liang4}}) and bind the pair onto its target noun with `-{{word:de}}`, the same way any adjective phrase attaches."] },
    ],
  },

  /** prose: an adjective before another adjective or verb acts as an adverb */
  {
    text: [
      "Adjectives have one more job available to them: standing directly in front of another adjective or a verb, they act as adverbs, describing how much or how that other word applies.",
      "You have actually already been doing this without naming it -- `{{word:hen3}}` itself, from Lesson 4, is just an adjective (\"very\") pressed into adverb duty in front of another adjective.",
      '`{{word:hen3}} {{word:duo1}}` works the same way: `{{word:duo1}}` ("many") on its own is already an adjective, and stacking `{{word:hen3}}` in front of it gives you "very many," no separate adverb form required.',
    ],
    tldr: ["An adjective placed directly before another adjective or verb functions as an adverb."],
    necessity: ["Extends `{{word:hen3}}`'s connector role from Lesson 4 into a general adverb-formation pattern, without adding a new particle."],
  },
  /** info: Adjectives as Adverbs */
  {
    title: ["Adjectives as Adverbs"],
    items: [
      { text: ["Place an adjective directly before another adjective or a verb to use it as an adverb -- no separate adverb form exists."] },
    ],
  },

  /** prose: le attached to an adjective marks a change of state */
  {
    text: [
      "There's a second way `{{word:le}}` shows up beyond marking a finished action on a verb (Lesson 6): attached directly to an adjective, `{{word:le}}` marks that a state has changed -- that something wasn't true a moment ago, and now it is.",
      '`{{word:hao3}} {{word:le}}` doesn\'t just restate "good"; it means something has become good, or gotten better than it was.',
      "This is the same `{{word:le}}`, doing the same underlying job -- marking the moment a change became real -- just applied to a description instead of an action.",
      "Between this and the causative construction below, Hao-shuo-de actually has two distinct ways to talk about something changing: `{{word:le}}` reports that a change already happened, while `{{word:ba3}}`...`{{word:bian4}}` (next) is how you make one happen yourself.",
    ],
    tldr: ['`{{word:le}}` attached to an adjective marks a change of state -- `{{word:hao3}} {{word:le}}` means "it\'s gotten good," not just "it is good."'],
    necessity: ["Extends Lesson 6's `{{word:le}}` (completion on verbs) to adjectives, and sets up the contrast with the causative construction below: `{{word:le}}` reports a change, `{{word:ba3}}`...`{{word:bian4}}` causes one."],
  },
  /** info: State Change with le */
  {
    title: ["State Change with `{{word:le}}`"],
    items: [
      { text: ['`{{word:le}}` attaches directly after an adjective to mark that a state has changed. `{{word:hao3}} {{word:le}}` means "it has become good," not simply "it is good."'] },
    ],
  },
  /** info: The Causative Rule */
  {
    title: ["The Causative Rule"],
    items: [
      {
        text: ['To turn an adjective into a transitive action (such as transforming "good" into "to fix/improve" or "bad" into "to break"), use `{{word:ba3}}` paired with `{{word:bian4}}` ("to become/change"):'],
        items: [
          { text: ["Subject + `{{word:ba3}}` + Object + `{{word:bian4}}` + Adjective"] },
        ],
      },
    ],
  },

  /** example 1 */
  ["Your work is very good."],
  /** example 2 */
  ["Water strengthens me / gives me energy."],
  /** example 3 */
  ["You're a strong man."],
  /** example 4 */
  ["The scholars read the document / look at the paper."],
  /** example 5 */
  ["The girls misheard / didn't listen well to the parent."],
  /** example 6 */
  ["The water has gotten good now."],
  /** example 7 */
  ["Nobody is bad."],
  /** example 8 */
  ["Fathers use/read the book a lot."],

  /** exercise 1 */
  ["The man doesn't eat bad fruit."],
  /** exercise 2 */
  ["Eating makes me tall."],
  /** exercise 3 */
  ["I know Hao-shuo-de a bit."],
  /** exercise 4 */
  ["The community has become strong."],

  /** answer 1 */
  ["{{Word:nan2ren2}} {{word:bu4}} {{word:chi1}} {{word:huai4}}-{{word:de}} {{word:shui3guo3}}."],
  /** answer 2 */
  ["{{Word:chi1}} {{word:ba3}} {{word:wo3}} {{word:bian4}} {{word:da4}}."],
  /** answer 3 */
  ["Hǎo-shuō-de, {{word:wo3}} {{word:zhi1dao4}}-{{word:de}} {{word:bu4}} {{word:duo1}}."],
  /** answer 4 */
  ["{{Word:qun2}} {{word:you3}}-{{word:li4liang4}} {{word:le}}."],
];

export default en;
