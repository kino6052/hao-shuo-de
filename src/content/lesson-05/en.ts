// English text for lesson-05, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Verbs"],
  /** summary */
  [
    'Verbs carry no tense; `{{word:le}}` marks completion (not simply "the past"), words shift category by context alone, and directional complements like `{{word:qi3}}`, `{{word:xia4}}`, and `{{word:shang4}}` bind onto verbs via a hyphen to add direction and completion nuance.',
  ],

  /** vocab: yǒu */
  ["to have, contain, carry"],
  /** vocab: tīng */
  ["to listen to, hear, obey"],
  /** vocab: chī */
  ["to eat, drink, consume; food"],
  /** vocab: zuò */
  ["to make, do, work on"],
  /** vocab: zhīdào */
  ["to know"],
  /** vocab: shuō */
  ["to talk, speak, communicate"],
  /** vocab: qǐ */
  ["to rise, get up; begin"],
  /** vocab: xià */
  ["down, below, under"],
  /** vocab: shàng */
  ["up, above, on"],
  /** vocab: lái */
  ["to come, arrive, happen"],

  /** prose: word order alone marks the object */
  {
    text: [
      "Every sentence you've built so far -- with `{{word:shi4}}`, with `{{word:hen3}}`, with `-{{word:de}}` -- has relied on one fixed habit: words always sit in the same order, subject first, then the action, then whatever the action touches.",
      "Verbs don't break that habit; they lean on it completely.",
      "Because word order alone already tells you what's doing the action and what's being acted on, Hao-shuo-de never needs a special marker word standing in front of the object to flag it.",
      "If a word shows up right after the verb, it's the object -- that's the whole rule, and it doesn't need any more machinery than that.",
    ],
    tldr: ["Word order alone marks the object -- nothing comes after the verb by accident."],
    necessity: ["Confirms Lesson 2's fixed word order carries real grammatical weight -- it's not just a style choice, it's replacing work a marker particle would otherwise have to do."],
  },
  /** info: No Object Marker Needed */
  {
    title: ["No Object Marker Needed"],
    items: [
      { text: ["Subject + Verb + Object. Whatever sits directly after the verb is what's being acted on -- word order alone marks it, so no extra particle is required."] },
    ],
  },

  /** prose: le marks completion, not "the past" */
  {
    text: [
      "Hao-shuo-de verbs never change shape to show when something happened.",
      'There is no separate "did," no separate "will do" -- the verb `{{word:chi1}}` means "eat" whether that eating happened yesterday, is happening now, or has not happened yet.',
      "Context, and a small set of markers, carry that weight instead.",
      "",
      "The most important of these markers is `{{word:le}}`.",
      "It is easy to mistake `{{word:le}}` for a simple stand-in for the English past tense, but that is not quite what it is doing.",
      "`{{word:le}}` marks that a change has actually taken place -- an action reached completion, or a state flipped from one thing to another.",
      'Most of the time that lines up with "the past," since a finished action usually did happen earlier.',
      "But `{{word:le}}` is about completion, not time: a sentence can use `{{word:le}}` to describe something that just finished a second ago, or something expected to be finished by tomorrow.",
      'What `{{word:le}}` never does is turn a verb into a "past-tense form" the way English `-ed` does -- it simply marks the point where a change became real.',
    ],
    tldr: ['`{{word:le}}` marks that a change or action reached completion -- not simply "the past."'],
    necessity: ["This distinction avoids a very common early mistake: treating `{{word:le}}` as English `-ed`. It marks completion, and completion usually happens in the past, but they aren't the same thing."],
  },
  /** info: The Completion Marker le */
  {
    title: ["The Completion Marker `{{word:le}}`"],
    items: [
      { text: ["Attach `{{word:le}}` after a verb to mark that an action or change has reached completion. `{{word:le}}` marks completion, not tense -- it can describe something finished a moment ago or something expected to be finished by a future point."] },
    ],
  },

  /** prose: words shift between verb/noun roles by position */
  {
    text: [
      'One more habit worth noticing: Hao-shuo-de words do not come pre-labeled as "this one is only ever a verb" or "this one is only ever a noun."',
      "The same word slides between roles depending on where it sits in the sentence.",
      '`{{word:chi1}}`, for example, is the action "to eat" when it is doing something in a sentence -- but the very same word, sitting where a noun belongs, means "food."',
      "Nothing about the spelling changes; only the job the word is doing changes.",
      'The same thing happens with `-{{word:de}}`: `{{word:zhi1dao4}}-{{word:de}} {{word:ren2}}` does not build a new word for "someone who knows things" -- it just takes the verb `{{word:zhi1dao4}}` ("to know") and, bound to `{{word:ren2}}` ("person") with `-{{word:de}}`, lets it describe a noun directly, the same way `{{word:xie3}}-{{word:de}} {{word:dong1xi}}` ("a written thing") worked back in Lesson 2.',
    ],
    tldr: ["The same word shifts between verb and noun roles depending on its position in the sentence -- no separate forms needed."],
    necessity: ["This is why Hao-shuo-de's small dictionary goes further than its word count suggests -- every verb is already a potential noun, for free."],
  },
  /** info: One Word, Several Jobs */
  {
    title: ["One Word, Several Jobs"],
    items: [
      { text: ["A Hao-shuo-de word's category (verb, noun, etc.) is not fixed -- it's determined by where the word sits in the sentence. The same spelling can act as a verb in one sentence and a noun-describing phrase (via `-{{word:de}}`) in another."] },
    ],
  },

  /** prose: directional complements bind onto verbs via a hyphen */
  {
    text: [
      "Verbs can pick up an extra layer of meaning by binding a small directional word onto them with a hyphen -- the same hyphen that has been doing grammar work since Lesson 1.",
      'Three of these are worth knowing early, all built on `{{word:lai2}}` ("to come"):',
      "",
      '- `{{word:qi3}}-{{word:lai2}}` ("rise-come") marks the start of something. Bound onto another verb the same way, `{{word:qi3}}` alone marks a beginning: `{{word:shuo1}}-{{word:qi3}}` does not just mean "speak" -- it means "bring something up," the moment a topic starts existing in a conversation.',
      '- `{{word:xia4}}-{{word:lai2}}` ("down-come") marks something settling into place, or continuing on steadily from where it already was.',
      '- `{{word:shang4}}-{{word:lai2}}` ("up-come") marks something arriving toward you, or finally succeeding at reaching a point.',
      "",
      "None of this needed a new word class or a new particle.",
      "It is the same hyphen-composition rule from Lesson 1 -- gluing two known pieces into one working unit -- just pointed at direction instead of description.",
    ],
    tldr: ["`{{word:qi3}}`, `{{word:xia4}}`, and `{{word:shang4}}` bind onto `{{word:lai2}}` (or other verbs) via a hyphen to add direction/completion nuance -- rise, settle, or arrive."],
    necessity: ["Extends the hyphen-composition principle from Lesson 1 into a new domain (verb direction), without adding new grammar machinery."],
  },
  /** info: Directional Complements */
  {
    title: ["Directional Complements"],
    items: [
      { text: ['`{{word:qi3}}-{{word:lai2}}` -- marks the beginning of an action or state (e.g. `{{word:shuo1}}-{{word:qi3}}`, "bring up/mention")'] },
      { text: ["`{{word:xia4}}-{{word:lai2}}` -- marks a state settling into place or continuing on"] },
      { text: ["`{{word:shang4}}-{{word:lai2}}` -- marks something arriving toward the speaker, or succeeding at reaching a point"] },
    ],
  },

  /** example 1 */
  ["I know a simple language / good speech."],
  /** example 2 */
  ["That man is a messenger / speaking person."],
  /** example 3 */
  ["A large animal is eating you."],
  /** example 4 */
  ["The community's book is reliable."],
  /** example 5 */
  ["You made new food."],
  /** example 6 */
  ["A person of knowledge listens."],
  /** example 7 */
  ["The school / house of knowledge has books."],
  /** example 8 */
  ["He brings up Hao-shuo-de / mentions Hao-shuo-de."],

  /** exercise 1 */
  ["I will listen to you."],
  /** exercise 2 */
  ["The woman obeyed the man."],
  /** exercise 3 */
  ["The friends ate meat."],
  /** exercise 4 */
  ["She mentions the community."],

  /** answer 1 */
  ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."],
  /** answer 2 */
  ["{{Word:nv3ren2}} {{word:ting1}} {{word:le}} {{word:nan2ren2}}."],
  /** answer 3 */
  ["{{Word:hao3}}-{{word:de}} {{word:ren2}} {{word:chi1}} {{word:le}} {{word:dong4wu4}}."],
  /** answer 4 */
  ["{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} {{word:qun2}}."],
];

export default en;
