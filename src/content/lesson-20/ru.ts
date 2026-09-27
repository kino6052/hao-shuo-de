// Russian text for lesson-20, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
// Not translated yet -- every `ru` is the empty-array placeholder.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: [] },
  summary: { ru: [] },
  vocabYinwei: { ru: [] },
  vocabDanshi: { ru: [] },
  vocabYan: { ru: [] },
  vocabSi: { ru: [] },
  vocabHua: { ru: [] },
  proseFrontedContext: { ru: [] },
  infoFrontedContext: { items: [{ ru: [] }] },
  example2: { ru: [] },
  example4: { ru: [] },
  example6L07: { ru: [] },
  example4L16: { ru: [] },
  exercise3: { ru: [] },
  answer3: { ru: [] },
};

export default ru;
