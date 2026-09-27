// Chinese text for lesson-20, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `zh` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const zh: PartialByKey<LessonShape> = {
  title: { zh: [] },
  summary: { zh: [] },
  vocabYinwei: { zh: [] },
  vocabDanshi: { zh: [] },
  vocabYan: { zh: [] },
  vocabSi: { zh: [] },
  vocabHua: { zh: [] },
  proseFrontedContext: { zh: [] },
  infoFrontedContext: { items: [{ zh: [] }] },
  example2: { zh: [] },
  example4: { zh: [] },
  example6L07: { zh: [] },
  example4L16: { zh: [] },
  exercise3: { zh: [] },
  answer3: { zh: [] },
};

export default zh;
