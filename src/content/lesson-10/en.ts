// English text for lesson-10, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["More Modifiers"] },
  summary: {
    en: [
      'Hao-shuo-de builds "strong" by combining {{word:you3}} with {{word:li4liang4}}, adjectives can modify verbs directly as adverbs, `{{word:le}}` attached to an adjective marks a change of state, the {{word:ba3}}...{{word:bian4}} construction turns an adjective into a causative action ("to make good" = "to fix"), and words like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` specify a relationship (to/for, at/in, using, because of) and sit right before the main verb.',
    ],
  },

  vocabBu: { en: ["not, no"] },
  vocabHuai: { en: ["bad, negative, broken"] },
  vocabDuo: { en: ["many, a lot, very"] },
  vocabFumu: { en: ["parent, ancestor"] },
  vocabYi: { en: ["one, united"] },
  vocabLiliang: { en: ["power, energy"] },

  proseBuildingAdjective: {
    en: [
      "Not every idea gets its own dedicated word in Hao-shuo-de -- and \"strong\" is a good example of why that's fine.",
      'Rather than adding a 121st word to the dictionary just for this one concept, Hao-shuo-de builds it out of two words you already know: {{word:you3}} ("to have," from Lesson 5) plus {{word:li4liang4}} ("power, energy").',
      "Put them side by side and you get {{word:you3}} {{word:li4liang4}}, literally \"to have power\" -- which is really just describing what being strong actually means, one plain idea at a time, instead of packaging it into a single opaque label.",
      "",
      "To use that description the way you'd use any other adjective, bind it onto the noun it's describing with `-{{word:de}}`, the same connecting particle from Lesson 3: {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}, \"a strong man.\"",
      "Once it's bound this way, the whole three-word phrase behaves exactly like a single adjective would -- it just happens to be built rather than memorized.",
    ],
    tldr: { en: ['"Strong" is built from {{word:you3}} + {{word:li4liang4}} ("to have power"), bound with `-{{word:de}}` to modify a noun directly.'] },
    necessity: { en: ["Shows that Hao-shuo-de's small dictionary handles missing adjectives by composing existing words, not by inventing new vocabulary."] },
  },
  infoBuildingAdjective: {
    title: { en: ["Building an Adjective"] },
    items: [
      { en: ["When the dictionary has no word for a description you need, combine an existing verb and noun (e.g. {{word:you3}} + {{word:li4liang4}}) and bind the pair onto its target noun with `-{{word:de}}`, the same way any adjective phrase attaches."] },
    ],
  },

  proseAdjectivesAsAdverbs: {
    en: [
      "Adjectives have one more job available to them: standing directly in front of another adjective or a verb, they act as adverbs, describing how much or how that other word applies.",
      "You have actually already been doing this without naming it -- `{{word:hen3}}` itself, from Lesson 3, is just an adjective (\"very\") pressed into adverb duty in front of another adjective.",
      '`{{word:hen3}} {{word:duo1}}` works the same way: `{{word:duo1}}` ("many") on its own is already an adjective, and stacking `{{word:hen3}}` in front of it gives you "very many," no separate adverb form required.',
    ],
    tldr: { en: ["An adjective placed directly before another adjective or verb functions as an adverb."] },
    necessity: { en: ["Extends `{{word:hen3}}`'s connector role from Lesson 3 into a general adverb-formation pattern, without adding a new particle."] },
  },
  infoAdjectivesAsAdverbs: {
    title: { en: ["Adjectives as Adverbs"] },
    items: [
      { en: ["Place an adjective directly before another adjective or a verb to use it as an adverb -- no separate adverb form exists."] },
    ],
  },

  proseStateChange: {
    en: [
      "There's a second way `{{word:le}}` shows up beyond marking a finished action on a verb (Lesson 5): attached directly to an adjective, `{{word:le}}` marks that a state has changed -- that something wasn't true a moment ago, and now it is.",
      '`{{word:hao3}} {{word:le}}` doesn\'t just restate "good"; it means something has become good, or gotten better than it was.',
      "This is the same `{{word:le}}`, doing the same underlying job -- marking the moment a change became real -- just applied to a description instead of an action.",
      "Between this and the causative construction below, Hao-shuo-de actually has two distinct ways to talk about something changing: `{{word:le}}` reports that a change already happened, while `{{word:ba3}}`...`{{word:bian4}}` (next) is how you make one happen yourself.",
    ],
    tldr: { en: ['`{{word:le}}` attached to an adjective marks a change of state -- `{{word:hao3}} {{word:le}}` means "it\'s gotten good," not just "it is good."'] },
    necessity: { en: ["Extends Lesson 5's `{{word:le}}` (completion on verbs) to adjectives, and sets up the contrast with the causative construction below: `{{word:le}}` reports a change, `{{word:ba3}}`...`{{word:bian4}}` causes one."] },
  },
  infoStateChange: {
    title: { en: ["State Change with `{{word:le}}`"] },
    items: [
      { en: ['`{{word:le}}` attaches directly after an adjective to mark that a state has changed. `{{word:hao3}} {{word:le}}` means "it has become good," not simply "it is good."'] },
    ],
  },
  infoCausative: {
    title: { en: ["The Causative Rule"] },
    items: [
      {
        en: ['To turn an adjective into a transitive action (such as transforming "good" into "to fix/improve" or "bad" into "to break"), use `{{word:ba3}}` paired with `{{word:bian4}}` ("to become/change"):'],
        items: [
          { en: ["Subject + `{{word:ba3}}` + Object + `{{word:bian4}}` + Adjective"] },
        ],
      },
    ],
  },

  example1: { en: ["Your work is very good."] },
  example2: { en: ["Water strengthens me / gives me energy."] },
  example3: { en: ["You're a strong man."] },
  example4: { en: ["The scholars read the document / look at the paper."] },
  example5: { en: ["The girls misheard / didn't listen well to the parent."] },
  example6: { en: ["The water has gotten good now."] },
  example7: { en: ["Nobody is bad."] },
  example8: { en: ["Fathers use/read the book a lot."] },

  exercise1: { en: ["The man doesn't eat bad fruit."] },
  exercise2: { en: ["Eating makes me tall."] },
  exercise3: { en: ["I know Hao-shuo-de a bit."] },
  exercise4: { en: ["The community has become strong."] },

  answer1: { en: ["{{Word:nan2ren2}} {{word:bu4}} {{word:chi1}} {{word:huai4}}-{{word:de}} {{word:shui3guo3}}."] },
  answer2: { en: ["{{Word:chi1}} {{word:ba3}} {{word:wo3}} {{word:bian4}} {{word:da4}}."] },
  answer3: { en: ["Hǎo-shuō-de, {{word:wo3}} {{word:zhi1dao4}}-{{word:de}} {{word:bu4}} {{word:duo1}}."] },
  answer4: { en: ["{{Word:qun2}} {{word:you3}}-{{word:li4liang4}} {{word:le}}."] },

  vocabGei: { en: ["to, for, give"] },
  vocabZai: { en: ["at, in, present, existing"] },
  vocabYong: { en: ["using, with, by means of"] },
  vocabYinwei: { en: ["from, because of"] },

  proseRelationshipWords: {
    en: [
      "A handful of Hao-shuo-de words specify a relationship -- to/for, at/in, using, because of -- and sit right before the main verb, the way a preposition would in English.",
      '`{{word:gei3}}` ("give, to, for"), `{{word:zai4}}` ("at, in"), `{{word:yong4}}` ("using, by means of"), and `{{word:yin1wei4}}` ("because of") all work this way.',
      "A relationship phrase always sits between the subject and the main verb, never after it:",
    ],
    tldr: { en: ["Words like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` specify a relationship and sit right before the main verb."] },
    necessity: { en: ["Establishes this word order before any example sentence uses more than one verb-like word in a row."] },
  },
  infoRelationshipWordOrder: {
    title: { en: ["Specifying a Relationship"] },
    items: [
      { en: ["Subject + Relationship Phrase + Main Verb + Object -- the relationship phrase always comes between the subject and the main action, never after it."] },
    ],
  },
  proseWordAsPredicate: {
    en: [
      "If a clause has no separate action verb, this kind of word doesn't leave an empty slot behind -- it simply steps up and serves as the main predicate by itself.",
      '`{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` ("I am in the house") has no other verb at all; `{{word:zai4}}` alone is doing the whole job of the sentence.',
    ],
    tldr: { en: ["With no other verb in the clause, the relationship word itself becomes the main predicate."] },
    necessity: { en: ["Explains sentences like `{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` that would otherwise look like they're missing a verb."] },
  },

  example9: { en: ["I give a swimming animal to her."] },
  example10: { en: ["I give a swimming animal to her in the house."] },
  example11: { en: ["I am in the house."] },
  example12: { en: ["I am moving towards you / going to your side."] },
  example13: { en: ["My parent is going to the sea / big water."] },
  example14: { en: ["Because of this, I worked a lot."] },
  example15: { en: ["I speak in Hao-shuo-de / use Hao-shuo-de to speak."] },

  exercise5: { en: ["The worker uses tools."] },
  exercise6: { en: ["He gives things from his house."] },
  exercise7: { en: ["Why did you do it?"] },

  answer5: { en: ["{{Word:zhe4}}-ge {{word:gong1ju4}}-{{word:de}} {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}. (or {{Word:zhe4}}-ge {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}.)"] },
  answer6: { en: ["{{Word:ta1}} {{word:gei3}} {{word:lai2}}-{{word:ta1}}-{{word:de}}-{{word:di4fang1}}-{{word:de}} {{word:dong1xi}}."] },
  answer7: { en: ["{{Word:wei4shen2me}} {{word:ni3}} {{word:nong4}} {{word:le}} {{word:zhe4}}-ge?"] },
};

export default en;
