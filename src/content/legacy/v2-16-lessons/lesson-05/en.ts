// English text for lesson-05, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Verbs"] },
  summary: {
    en: [
      "Verbs are Hao-shuo-de's action words, sitting in the same Subject + Verb + Object order you've already been using. Most verbs turn negative with `{{word:bu4}}`, except `{{word:you3}}` (\"to have\"), which uses `{{word:mei2}}` instead. Verbs never change shape for tense: `{{word:le}}` marks a finished action, `guò` marks something you've done before, `{{word:zai4}}` marks something happening right now, and `{{word:hui4}}` marks something that will happen. `{{word:wan2}}`, `dào`, and `{{word:hao3}}` glue onto a verb to say HOW it finished, and words like `{{word:qi3}}`, `{{word:xia4}}`, and `{{word:shang4}}` glue on the same way to add a sense of direction.",
    ],
  },

  vocabYou: { en: ["to have, contain, carry"] },
  vocabMei: {
    en: [
      'negation word used only with `{{word:you3}}` -- together they make `{{word:mei2}}-{{word:you3}}` ("to not have")',
    ],
  },
  vocabTing: { en: ["to listen to, hear, obey"] },
  vocabChi: { en: ["to eat, drink, consume; food"] },
  vocabZuo: { en: ["to make, do, work on"] },
  vocabZhidao: { en: ["to know"] },
  vocabShuo: { en: ["to talk, speak, communicate"] },

  proseVerbs: {
    en: [
      'A verb is an action word -- it tells you what someone does. `{{word:chi1}}` ("eat"), `{{word:shuo1}}` ("talk"), and `{{word:zhi1dao4}}` ("know") are all verbs.',
      "A basic sentence follows one simple pattern: Subject + Verb + Object. The person or thing doing the action comes first, the action word comes second, and whatever the action is done to comes last.",
    ],
    tldr: {
      en: [
        'A sentence is built as Subject + Verb + Object: {{word:wo3}} {{word:chi1}} {{word:dong1xi}} ("I eat things").',
      ],
    },
    necessity: {
      en: [
        "Introduces verbs and the basic sentence pattern before anything more complicated -- negation, tense, complements -- gets layered on top.",
      ],
    },
  },

  verbsExample1: { en: ["I eat things."] },
  verbsExample2: { en: ["He/She speaks Hao-shuo-de."] },
  verbsExample3: { en: ["I have fruit."] },

  proseVerbNegation: {
    en: [
      'To say a verb did NOT happen, most verbs simply take `{{word:bu4}}` ("not", from Lesson 3) right in front of them, the same way it works with `{{word:hen3}}`.',
      '`{{word:you3}}` ("to have") is the one exception: instead of `{{word:bu4}}`, it pairs with a different word, `{{word:mei2}}`, to make `{{word:mei2}}-{{word:you3}}` ("to not have").',
      "So almost every verb uses `{{word:bu4}}` -- except `{{word:you3}}`, which always uses `{{word:mei2}}` instead.",
    ],
    tldr: {
      en: [
        'Most verbs negate with `{{word:bu4}}`; `{{word:you3}}` ("to have") is the one exception and uses `{{word:mei2}}` instead: `{{word:mei2}}-{{word:you3}}` ("to not have").',
      ],
    },
    necessity: {
      en: [
        "Flags the one irregular case in an otherwise simple negation rule, before the reader tries to negate `{{word:you3}}` with `{{word:bu4}}` and gets it wrong.",
      ],
    },
  },

  negationExample1: { en: ["I don't have fruit."] },
  negationExample2: { en: ["I don't eat things."] },
  negationExample3: { en: ["He/She doesn't have anything."] },

  proseWordOrderObject: {
    en: [
      "You've already been placing words in a fixed order: subject first, then the action, then whatever it touches -- that's exactly what Subject + Verb + Object means.",
      "Because the order alone shows who's doing the action and what it's being done to, Hao-shuo-de doesn't need an extra marker word in front of the object.",
      "Whatever word comes right after the verb is the object -- that's the whole rule.",
    ],
    tldr: {
      en: [
        "The word right after the verb is the object -- word order alone marks it, no extra marker needed.",
      ],
    },
    necessity: {
      en: [
        "Confirms the fixed word order from earlier lessons is doing real grammatical work, not just a style habit -- and shows what changes if you swap the order.",
      ],
    },
  },

  wordOrderExample1: { en: ["I know him/her."] },
  wordOrderExample2: { en: ["He/She knows me."] },

  vocabLe: {
    en: ["a small word placed right after a verb to mark that the action is finished"],
  },
  vocabGuo: {
    en: [
      'placed right after a verb to say you\'ve done that action before, at some point in the past (`{{word:chi1}}-guo`, "have eaten [it] before")',
    ],
  },
  vocabularyZai: {
    en: [
      "to be at/in a place; placed right before a verb instead, it marks the action as happening right now",
    ],
  },
  vocabHui: {
    en: ["placed right before a verb to mark the action as something that will happen"],
  },

  proseLeCompletion: {
    en: [
      'Hao-shuo-de verbs never change shape to show when something happened -- there\'s no separate word for "eat" versus "ate" versus "will eat". Instead, a small set of words placed right next to the verb do that job.',
      'The first and most useful of these is `{{word:le}}`. Placed right after a verb, it marks that the action is finished -- close to English "did" or "have done", though it\'s really about the action being DONE, not about time itself.',
      "Most of the time that lines up with \"the past\", since a finished action usually did happen earlier. But a sentence can use `{{word:le}}` for something that just finished a second ago, or something expected to be finished by a later point.",
    ],
    tldr: {
      en: [
        '`{{word:le}}` right after a verb marks that the action is finished -- close to the past tense in English, but really about being done, not about time.',
      ],
    },
    necessity: {
      en: [
        "Introduces the first of four small words that do the job English uses tenses for (`{{word:le}}`, `guò`, `{{word:zai4}}`, `{{word:hui4}}`), and heads off the common mistake of treating `{{word:le}}` as a direct stand-in for English `-ed`.",
      ],
    },
  },
  infoCompletionMarker: {
    title: { en: ["Marking a Finished Action: `{{word:le}}`"] },
    items: [
      {
        en: [
          "Put `{{word:le}}` right after a verb to say that action is finished. It's about being DONE, not about time -- it can describe something that just finished, or something that will be finished by a later point.",
        ],
      },
    ],
  },

  leExample1: { en: ["I've eaten. / I ate."] },

  proseGuo: {
    en: [
      '`guò` attaches right after a verb the same way `{{word:le}}` does, but it says something different: not that the action just finished, but that you\'ve done it before, at some point -- close to English "have done" (as in "I have eaten that before").',
      '`{{word:ting1}}-guò` means "have heard it before" -- you\'re describing past experience, not one single finished action.',
    ],
    tldr: {
      en: [
        '`guò` right after a verb means you\'ve done that action before, at some point -- close to English "have done", not simply "did".',
      ],
    },
    necessity: {
      en: [
        "Distinguishes `guò` (experience, \"have done before\") from `{{word:le}}` (a single action just finished), since both attach directly after a verb.",
      ],
    },
  },
  guoExample1: { en: ["I've heard Hao-shuo-de before."] },

  proseZai: {
    en: [
      '`{{word:zai4}}` works differently from `{{word:le}}` and `guò`: instead of attaching after the verb, it goes right in front of it, and marks the action as happening right now -- close to English "-ing".',
      '`{{word:zai4}} {{word:chi1}}` means "is eating", happening at this very moment.',
      "You already know `{{word:zai4}}` as \"to be at, to be in\" a place; used this way, in front of a verb, it's the same idea stretched to cover an action instead of just a location -- you're \"in the middle of\" doing something.",
    ],
    tldr: {
      en: [
        '`{{word:zai4}}` placed right before a verb marks the action as happening right now -- close to English "-ing".',
      ],
    },
    necessity: {
      en: [
        "Introduces `{{word:zai4}}`'s second, very common job -- marking an action in progress -- right after its first, being located somewhere, since it's the same word doing both.",
      ],
    },
  },
  zaiExample1: { en: ["He/She is eating."] },

  proseHui: {
    en: [
      '`{{word:hui4}}` also goes right in front of a verb, and marks that the action hasn\'t happened yet but will -- close to English "will" or "going to".',
      '`{{word:hui4}} {{word:chi1}}` means "will eat", something expected to happen later.',
    ],
    tldr: {
      en: [
        '`{{word:hui4}}` placed right before a verb marks the action as something that will happen -- close to English "will".',
      ],
    },
    necessity: {
      en: [
        "Rounds out the set of four small time-words: `{{word:le}}` (just finished), `guò` (done before), `{{word:zai4}}` (happening now), and `{{word:hui4}}` (will happen) -- covering what English uses verb tenses for.",
      ],
    },
  },
  huiExample1: { en: ["I will eat."] },

  completionMarkers: {
    en: [
      "`{{word:le}}` only tells you an action is DONE -- it doesn't say anything about how it went. Three more small words fill in that gap, glued straight onto the verb with a hyphen instead of standing in front of or after it on their own.",
      '`{{word:wan2}}` ("finish") says the action ran all the way to the end: `{{word:chi1}}-{{word:wan2}}`, "finish eating".',
      '`dào` ("reach, arrive") says the action successfully hit its target: `{{word:ting1}}-dào`, "hear" (listen-reach).',
      '`{{word:hao3}}` ("well, good") says the action came out well: `{{word:nong4}}-{{word:hao3}}`, "get it done right".',
    ],
    tldr: {
      en: [
        "Glue `{{word:wan2}}`, `dào`, or `{{word:hao3}}` onto a verb with a hyphen to say HOW it finished: all the way through, successfully, or well.",
      ],
    },
    necessity: {
      en: [
        "Separates HOW an action finished from `{{word:le}}`, which only says THAT it finished.",
      ],
    },
  },
  infoCompletionMarkers: {
    title: { en: ["Saying How an Action Finished"] },
    items: [
      {
        en: [
          '`{{word:wan2}}` ("finish") -- the action went all the way to the end: `{{word:chi1}}-{{word:wan2}}`, "finish eating."',
        ],
      },
      {
        en: [
          '`dào` ("reach") -- the action hit its target: `{{word:ting1}}-dào`, "hear" (listen-reach).',
        ],
      },
      {
        en: [
          '`{{word:hao3}}` ("well") -- the action came out well: `{{word:nong4}}-{{word:hao3}}`, "get it done right."',
        ],
      },
    ],
  },

  exampleCompletionMarker1: { en: ["I finished eating."] },
  exampleCompletionMarker2: { en: ["I heard it."] },
  exampleCompletionMarker3: { en: ["I got it done."] },

  vocabQi: { en: ["to rise, get up; begin"] },
  vocabXia: { en: ["down, below, under"] },
  vocabShang: { en: ["up, above, on"] },
  vocabLai: { en: ["to come, arrive"] },

  proseDirectionalComplements: {
    en: [
      'The same hyphen trick works one more way: gluing a direction word onto a verb (often together with `{{word:lai2}}`, "to come") to add a sense of direction or progress to the action.',
      '`{{word:qi3}}-{{word:lai2}}` ("rise-come") marks something starting. Glued onto another verb by itself, `{{word:qi3}}` marks a beginning too: `{{word:shuo1}}-{{word:qi3}}` doesn\'t just mean "talk" -- it means "bring something up", the moment a topic starts getting mentioned.',
      '`{{word:xia4}}-{{word:lai2}}` ("down-come") marks something settling into place, or carrying on steadily.',
      '`{{word:shang4}}-{{word:lai2}}` ("up-come") marks something arriving toward you, or finally succeeding at reaching a point.',
    ],
    tldr: {
      en: [
        "Glue `{{word:qi3}}`, `{{word:xia4}}`, or `{{word:shang4}}` onto a verb (often with `{{word:lai2}}`) to add a sense of direction: starting, settling in, or arriving.",
      ],
    },
    necessity: {
      en: [
        "Extends the same hyphen-gluing trick used for `{{word:wan2}}`/`dào`/`{{word:hao3}}` to a new job: adding direction to a verb.",
      ],
    },
  },
  infoDirectionalComplements: {
    title: { en: ["Adding a Sense of Direction"] },
    items: [
      {
        en: [
          '`{{word:qi3}}-{{word:lai2}}` -- marks something starting (e.g. `{{word:shuo1}}-{{word:qi3}}`, "bring up/mention")',
        ],
      },
      {
        en: [
          "`{{word:xia4}}-{{word:lai2}}` -- marks something settling into place or continuing steadily",
        ],
      },
      {
        en: [
          "`{{word:shang4}}-{{word:lai2}}` -- marks something arriving toward you, or finally getting there",
        ],
      },
    ],
  },

  directionalExample1: { en: ["He/She brings up Hao-shuo-de. / He/She mentions Hao-shuo-de."] },
  directionalExample2: { en: ["I've settled down."] },
  directionalExample3: { en: ["He/She has come up (arrived)."] },

  example1: { en: ["I know a simple language / good speech."] },
  example2: { en: ["That man is a messenger / speaking person."] },
  example3: { en: ["A large animal is eating you."] },
  example4: { en: ["The community's book is reliable."] },
  example5: { en: ["You made new food."] },
  example6: { en: ["A person of knowledge listens."] },
  example7: { en: ["The school / house of knowledge has books."] },

  exercise1: { en: ["I will listen to you."] },
  exercise2: { en: ["The woman obeyed the man."] },
  exercise3: { en: ["The friends ate meat."] },
  exercise4: { en: ["She mentions the community."] },

  answer1: { en: ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."] },
  answer2: {
    en: ["{{Word:nv3ren2}} {{word:ting1}} {{word:le}} {{word:nan2ren2}}."],
  },
  answer3: {
    en: [
      "{{Word:hao3}}-{{word:de}} {{word:ren2}} {{word:chi1}} {{word:le}} {{word:dong4wu4}}.",
    ],
  },
  answer4: { en: ["{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} {{word:qun2}}."] },
};

export default en;
