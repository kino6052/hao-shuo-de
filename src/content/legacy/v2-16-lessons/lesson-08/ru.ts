// Russian text for lesson-08, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. Not translated yet -- every `ru` is the
// empty-array placeholder.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabShijian: { ru: [] },
  proseFrontedContext: { ru: [] },
  infoFrontedContext: { items: [{ru:[]}] },
  proseDeShijian: { ru: [] },
  example1: { ru: [] },
  example2: { ru: [] },
  example3: { ru: [] },
  example4: { ru: [] },
  exercise1: { ru: [] },
  exercise2: { ru: [] },
  exercise3: { ru: [] },
  answer1: { ru: [] },
  answer2: { ru: [] },
  answer3: { ru: [] },
};

export default ru;
