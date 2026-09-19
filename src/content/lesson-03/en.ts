// English text for lesson-03, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Modifying Nouns"],
  /** summary */
  [
    'zhè/nà + ge points at one specific thing (zhè-ge, nà-ge); duō points at many instead, and ge drops out. Adjectives connect to a subject with {{word:hen3}} instead of {{word:shi4}} ({{Word:shui3}} {{word:hen3}} {{word:hao3}} — "Water is good"), and bind onto a noun with -{{word:de}} instead when describing it as a unit ({{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}} — "a small place").',
  ],

  /** vocab: hěn */
  ["very (in this role, a required neutral connector, not an intensifier)"],
  /** vocab: nà */
  ["that"],
  /** vocab: ge (classifier) */
  ["(classifier: one countable thing)"],
  /** vocab: duō */
  ["many, a lot"],
  /** vocab: shuǐ */
  ["water, liquid"],
  /** vocab: dìfāng */
  ["a place (both in space or metaphorical to mean part of something)"],
  /** vocab: xiǎo */
  ["little, small"],
  /** vocab: hǎo */
  ["good, simple, friendly"],
  /** vocab: dà */
  ["big, important, tall"],

  /** prose: zhè-ge/nà-ge count one specific thing */
  {
    text: [
      "{{word:zhe4}} and {{word:na4}} point at something, but need **ge** to count it as one: {{word:zhe4}}-ge (\"this one\"), {{word:na4}}-ge (\"that one\").",
    ],
    tldr: ["{{word:zhe4}}-ge/{{word:na4}}-ge points at one specific thing."],
    necessity: ["Establishes the classifier **ge** before it starts dropping out or stacking with adjectives later in this lesson."],
  },
  /** example 1 */
  ["This one is a person."],
  /** example 2 */
  ["That one is a fruit."],

  /** prose: hěn as neutral predicate connector */
  {
    text: [
      'Lesson 2 gave you <audio-example zh="是">{{word:shi4}}</audio-example>, the word that connects a subject to a noun (<audio-example zh="人是女人">{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}</audio-example> — "the person is a woman").',
      "Adjectives need a connector too, but Mandarin doesn't reuse <audio-example zh=\"是\">{{word:shi4}}</audio-example> for the job — it uses a different word instead: <audio-example zh=\"很\">{{word:hen3}}</audio-example>.",
      "",
      'Subject + <audio-example zh="很">{{word:hen3}}</audio-example> + Adjective',
      "",
      'A bare adjective predicate like <audio-example zh="水好">{{word:shui3}} {{word:hao3}}</audio-example> isn\'t a neutral statement.',
      'In natural Mandarin, it sounds like a contrast ("Water is good, but…") or a subordinate clause ("If the water is good…").',
      'To make a plain, complete statement, <audio-example zh="很">{{word:hen3}}</audio-example> fills the predicate slot instead — its literal translation is "very," but in this position it\'s semantically bleached and doesn\'t add emphasis.',
      'So <audio-example zh="水很好">{{Word:shui3}} {{word:hen3}} {{word:hao3}}</audio-example> is simply "Water is good," not "Water is very good."',
    ],
    tldr: ['Adjectives use {{word:hen3}} as a neutral predicate connector to avoid sounding like a contrast or condition; in this role {{word:hen3}} is required and not emphatic.'],
    necessity: ["Explains that {{word:hen3}} is a neutral predicate filler, not an intensifier, and that omitting it creates a contrastive or conditional reading rather than a plain statement."],
  },
  /** example 3 */
  ["Water is good."],

  /** prose: -de required to bind an adjective onto a noun */
  {
    text: [
      'When an adjective sits right next to a noun instead of making its own statement — describing it as a single unit, the way <audio-example zh="很小的地方">{{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}</audio-example> describes "a small place" — it binds on with <code>-{{word:de}}</code>, the same hyphen you already saw gluing <audio-example zh="写的东西">{{word:xie3}}-{{word:de}} {{word:dong1xi}}</audio-example> ("document") together back in Lesson 2.',
      "",
      "Once the adjective is modified by a degree word like <audio-example zh=\"很\">{{word:hen3}}</audio-example>, <code>-{{word:de}}</code> becomes mandatory — you can't attach it directly.",
      '<audio-example zh="很小地方">{{word:hen3}}-{{word:xiao3}} {{word:di4fang1}}</audio-example> is ungrammatical; you need <audio-example zh="很小的地方">{{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}</audio-example>.',
    ],
    tldr: ['-{{word:de}} is required when the adjective has modifiers like {{word:hen3}}; without it, phrases like 很小地方 are ungrammatical.'],
    necessity: ["Clarifies that -{{word:de}} is grammatically required, not optional decoration, once an adjective carries its own modifier."],
  },
  /** example 4 */
  ["This is a small place."],
  /** example 5 */
  ["This is a very big animal."],

  /** prose: duō names many, ge drops out */
  {
    text: [
      "To talk about many things instead of one, use {{word:duo1}} -- and **ge** drops out, since {{word:duo1}} isn't pointing at just one.",
    ],
    tldr: ["{{word:duo1}} names many, and **ge** drops out."],
    necessity: ["Completes the count/concreteness picture this lesson opened with: one thing (ge), or many (duō, no ge)."],
  },
  /** example 6 */
  ["Many things are documents."],

  /** exercise 1 */
  ["This one is an animal."],
  /** exercise 2 */
  ["That one is a woman."],
  /** exercise 3 */
  ["Many fruits are things."],
  /** exercise 4 */
  ["That one is a document."],
  /** exercise 5 */
  ["The place is small."],
  /** exercise 6 */
  ["This is a good animal."],
  /** exercise 7 */
  ["This is a big fruit."],

  /** answer 1 */
  ["{{Word:zhe4}}-ge {{word:shi4}} {{word:dong4wu4}}."],
  /** answer 2 */
  ["{{Word:na4}}-ge {{word:shi4}} {{word:nv3ren2}}."],
  /** answer 3 */
  ["{{Word:duo1}}-{{word:de}} {{word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}."],
  /** answer 4 */
  ["{{Word:na4}}-ge {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}."],
  /** answer 5 */
  ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  /** answer 6 */
  ["{{Word:zhe4}}-ge {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:dong4wu4}}."],
  /** answer 7 */
  ["{{Word:zhe4}}-ge {{word:shi4}} {{word:yi1}}-ge {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3guo3}}."],
];

export default en;
