// Chinese text for lesson-08, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. Not translated yet -- every `zh` is the
// empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const zh: PartialByKey<LessonShape> = {
  title: { zh: [] },
  summary: { zh: [] },
  vocabShijian: { zh: [] },
  proseFrontedContext: { zh: [] },
  infoFrontedContext: { items: [{zh:[]}] },
  proseDeShijian: { zh: [] },
  example1: { zh: [] },
  example2: { zh: [] },
  example3: { zh: [] },
  example4: { zh: [] },
  exercise1: { zh: [] },
  exercise2: { zh: [] },
  exercise3: { zh: [] },
  answer1: { zh: [] },
  answer2: { zh: [] },
  answer3: { zh: [] },
};

export default zh;
