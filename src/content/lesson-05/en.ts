// English text for lesson-05, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Verbs"] },
  summary: {
    en: [
      'Verbs carry no tense; `{{word:le}}` marks completion (not simply "the past"), words shift category by context alone, and directional complements like `{{word:qi3}}`, `{{word:xia4}}`, and `{{word:shang4}}` bind onto verbs via a hyphen to add direction and completion nuance.',
    ],
  },

  vocabYou: { en: ["to have, contain, carry"] },
  vocabTing: { en: ["to listen to, hear, obey"] },
  vocabChi: { en: ["to eat, drink, consume; food"] },
  vocabZuo: { en: ["to make, do, work on"] },
  vocabZhidao: { en: ["to know"] },
  vocabShuo: { en: ["to talk, speak, communicate"] },
  vocabQi: { en: ["to rise, get up; begin"] },
  vocabXia: { en: ["down, below, under"] },
  vocabShang: { en: ["up, above, on"] },
  vocabLai: { en: ["to come, arrive, happen"] },

  proseWordOrderObject: {
    en: [
      "Every sentence you've built so far -- with `{{word:shi4}}`, with `{{word:hen3}}`, with `-{{word:de}}` -- has relied on one fixed habit: words always sit in the same order, subject first, then the action, then whatever the action touches.",
      "Verbs don't break that habit; they lean on it completely.",
      "Because word order alone already tells you what's doing the action and what's being acted on, Hao-shuo-de never needs a special marker word standing in front of the object to flag it.",
      "If a word shows up right after the verb, it's the object -- that's the whole rule, and it doesn't need any more machinery than that.",
    ],
    tldr: { en: ["Word order alone marks the object -- nothing comes after the verb by accident."] },
    necessity: { en: ["Confirms Lesson 2's fixed word order carries real grammatical weight -- it's not just a style choice, it's replacing work a marker particle would otherwise have to do."] },
  },
  infoNoObjectMarker: {
    title: { en: ["No Object Marker Needed"] },
    items: [
      { en: ["Subject + Verb + Object. Whatever sits directly after the verb is what's being acted on -- word order alone marks it, so no extra particle is required."] },
    ],
  },

  proseLeCompletion: {
    en: [
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
    tldr: { en: ['`{{word:le}}` marks that a change or action reached completion -- not simply "the past."'] },
    necessity: { en: ["This distinction avoids a very common early mistake: treating `{{word:le}}` as English `-ed`. It marks completion, and completion usually happens in the past, but they aren't the same thing."] },
  },
  infoCompletionMarker: {
    title: { en: ["The Completion Marker `{{word:le}}`"] },
    items: [
      { en: ["Attach `{{word:le}}` after a verb to mark that an action or change has reached completion. `{{word:le}}` marks completion, not tense -- it can describe something finished a moment ago or something expected to be finished by a future point."] },
    ],
  },

  proseCategoryFlexibility: {
    en: [
      'One more habit worth noticing: Hao-shuo-de words do not come pre-labeled as "this one is only ever a verb" or "this one is only ever a noun."',
      "The same word slides between roles depending on where it sits in the sentence.",
      '`{{word:chi1}}`, for example, is the action "to eat" when it is doing something in a sentence -- but the very same word, sitting where a noun belongs, means "food."',
      "Nothing about the spelling changes; only the job the word is doing changes.",
      'The same thing happens with `-{{word:de}}`: `{{word:zhi1dao4}}-{{word:de}} {{word:ren2}}` does not build a new word for "someone who knows things" -- it just takes the verb `{{word:zhi1dao4}}` ("to know") and, bound to `{{word:ren2}}` ("person") with `-{{word:de}}`, lets it describe a noun directly, the same way `{{word:xie3}}-{{word:de}} {{word:dong1xi}}` ("a written thing") worked back in Lesson 2.',
    ],
    tldr: { en: ["The same word shifts between verb and noun roles depending on its position in the sentence -- no separate forms needed."] },
    necessity: { en: ["This is why Hao-shuo-de's small dictionary goes further than its word count suggests -- every verb is already a potential noun, for free."] },
  },
  infoOneWordSeveralJobs: {
    title: { en: ["One Word, Several Jobs"] },
    items: [
      { en: ["A Hao-shuo-de word's category (verb, noun, etc.) is not fixed -- it's determined by where the word sits in the sentence. The same spelling can act as a verb in one sentence and a noun-describing phrase (via `-{{word:de}}`) in another."] },
    ],
  },

  proseDirectionalComplements: {
    en: [
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
    tldr: { en: ["`{{word:qi3}}`, `{{word:xia4}}`, and `{{word:shang4}}` bind onto `{{word:lai2}}` (or other verbs) via a hyphen to add direction/completion nuance -- rise, settle, or arrive."] },
    necessity: { en: ["Extends the hyphen-composition principle from Lesson 1 into a new domain (verb direction), without adding new grammar machinery."] },
  },
  infoDirectionalComplements: {
    title: { en: ["Directional Complements"] },
    items: [
      { en: ['`{{word:qi3}}-{{word:lai2}}` -- marks the beginning of an action or state (e.g. `{{word:shuo1}}-{{word:qi3}}`, "bring up/mention")'] },
      { en: ["`{{word:xia4}}-{{word:lai2}}` -- marks a state settling into place or continuing on"] },
      { en: ["`{{word:shang4}}-{{word:lai2}}` -- marks something arriving toward the speaker, or succeeding at reaching a point"] },
    ],
  },

  example1: { en: ["I know a simple language / good speech."] },
  example2: { en: ["That man is a messenger / speaking person."] },
  example3: { en: ["A large animal is eating you."] },
  example4: { en: ["The community's book is reliable."] },
  example5: { en: ["You made new food."] },
  example6: { en: ["A person of knowledge listens."] },
  example7: { en: ["The school / house of knowledge has books."] },
  example8: { en: ["He brings up Hao-shuo-de / mentions Hao-shuo-de."] },

  exercise1: { en: ["I will listen to you."] },
  exercise2: { en: ["The woman obeyed the man."] },
  exercise3: { en: ["The friends ate meat."] },
  exercise4: { en: ["She mentions the community."] },

  answer1: { en: ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."] },
  answer2: { en: ["{{Word:nv3ren2}} {{word:ting1}} {{word:le}} {{word:nan2ren2}}."] },
  answer3: { en: ["{{Word:hao3}}-{{word:de}} {{word:ren2}} {{word:chi1}} {{word:le}} {{word:dong4wu4}}."] },
  answer4: { en: ["{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} {{word:qun2}}."] },
};

export default en;
