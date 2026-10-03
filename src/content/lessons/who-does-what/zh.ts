// Chinese text for who-does-what, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `zh` is the empty-array placeholder.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const zh: PartialByKey<LessonShape> = {
  title: { zh: [] },
  summary: { zh: [] },
  vocabChi: { zh: [] },
  vocabKan: { zh: [] },
  vocabTing: { zh: [] },
  vocabShuo: { zh: [] },
  vocabXie: { zh: [] },
  vocabMifan: { zh: [] },
  proseDo: { zh: [], tldr: { zh: [] }, necessity: { zh: [] } },
  exampleDo1: { zh: [] },
  exampleDo2: { zh: [] },
  exampleDo3: { zh: [] },
  exampleDo4: { zh: [] },
  exampleDo5: { zh: [] },
  exampleDo6: { zh: [] },
  proseNot: { zh: [], tldr: { zh: [] }, necessity: { zh: [] } },
  exampleNot1: { zh: [] },
  exampleNot2: { zh: [] },
  exampleNot3: { zh: [] },
  exampleNot4: { zh: [] },
  vocabYou: { zh: [] },
  vocabMei: { zh: [] },
  vocabJin: { zh: [] },
  proseHave: { zh: [], tldr: { zh: [] }, necessity: { zh: [] } },
  exampleHave1: { zh: [] },
  exampleHave2: { zh: [] },
  exampleHave3: { zh: [] },
  exampleHave4: { zh: [] },
  exampleHave5: { zh: [] },
  exampleHave6: { zh: [] },
  infoWhoDoesWhat: {
    title: { zh: [] },
    items: [{ zh: [] }, { zh: [] }, { zh: [] }],
  },
  exercise1: { zh: [] },
  exercise2: { zh: [] },
  exercise3: { zh: [] },
  exercise4: { zh: [] },
  exercise5: { zh: [] },
  exercise6: { zh: [] },
  answer1: { zh: [] },
  answer2: { zh: [] },
  answer3: { zh: [] },
  answer4: { zh: [] },
  answer5: { zh: [] },
  answer6: { zh: [] },
  faqPastFuture: { question: { zh: [] }, zh: [] },
  faqChiDrink: { question: { zh: [] }, zh: [] },
};

export default zh;
