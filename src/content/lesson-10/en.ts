// English text for lesson-10, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Greetings and Feelings"],
  /** summary */
  [
    "Greetings, commands, animal sounds, and blessings all reuse ordinary Hao-shuo-de sentence patterns rather than dedicated particles: a bare verb opens a command, `{{word:jiao4}}` plus a quoted sound reports an animal noise, and doubling an adjective and binding it with `-{{word:de}}` turns a description into a wish.",
  ],

  /** vocab: juéde */
  ["to feel, think"],
  /** vocab: shēngyīn */
  ["sound, noise"],
  /** vocab: jiào */
  ["to call, make an animal sound (used alongside the Quote Partition)"],
  /** vocab: rì */
  ["sun, light"],

  /** prose: greetings/imperatives/blessings reuse ordinary sentence patterns */
  {
    text: [
      "Hao-shuo-de doesn't set aside a special particle for greetings or commands the way some invented languages do -- it reuses patterns you already know.",
      'A greeting is just a `{{word:ma}}`-question ("Are you well?"), a command is just a bare verb statement with the subject dropped, an animal sound is just the verb `{{word:jiao4}}` ("to call") followed by the sound in quotes, and a blessing is just a doubled adjective bound with `-{{word:de}}`.',
      "None of these needs new grammar -- only a new habit for how to use grammar you already have.",
    ],
    tldr: ["Greetings, commands, animal sounds, and blessings all reuse existing sentence patterns -- no dedicated particles."],
    necessity: ["Sets expectations before the examples: nothing below is a new grammatical category, just a familiar pattern used for a new purpose."],
  },
  /** info: Greetings, Commands, and Blessings */
  {
    title: ["Greetings, Commands, and Blessings"],
    items: [
      { text: ["**Greetings:** expressed using foundational semantic combinations like `{{word:ni3}} {{word:hao3}} {{word:ma}}?` (\"Are you well?\") or descriptive movements."] },
      { text: ["**Imperatives:** commands or requests are formed simply by using a bare verb statement at the start of a clause, with the subject dropped."] },
      { text: ["**Animal Sounds:** handled via the verb `{{word:jiao4}}` paired with the Quote Partition, which isolates onomatopoeia inside quotation marks rather than treating them as new dictionary words."] },
      { text: ["**Wishing Someone Something:** reduplicating an adjective and binding the repeated pair with `-{{word:de}}` turns a plain description into a blessing rather than just a fact -- `{{word:hao3}}-{{word:hao3}}-{{word:de}} {{word:ri4}}` doesn't only describe a good day, it wishes one on whoever you're speaking to. The hyphen keeps the doubling explicit, the same way `{{word:hen3}}-{{word:da4}}-{{word:de}}` explicitly marks intensification, instead of letting it blur into the unmarked doubling spoken Mandarin does on its own."] },
    ],
  },

  /** example 1 */
  ["Hello! / Are you well?"],
  /** example 2 */
  ["Go to your room!"],
  /** example 3 */
  ["Don't speak. Take action."],
  /** example 4 */
  ["I am going. / Goodbye."],
  /** example 5 */
  ["That animal goes \"woof woof\"."],
  /** example 6 */
  ["Why are you sad / feeling bad?"],
  /** example 7 */
  ["You're so big!"],
  /** example 8 */
  ["Have a nice day!"],
  /** example 9 */
  ["Thank you! (Literally, may you feel good)"],

  /** exercise 1 */
  ["Give the tool to me."],
  /** exercise 2 */
  ["\"Lisa\" is happy."],
  /** exercise 3 */
  ["Meow!"],

  /** answer 1 */
  ["{{Word:gei3}} {{word:wo3}} {{word:gong1ju4}}."],
  /** answer 2 */
  ['"Lisa" {{word:jue2de}} {{word:hao3}}.'],
  /** answer 3 */
  ['{{Word:jiao4}} "miao-miao"!'],
];

export default en;
